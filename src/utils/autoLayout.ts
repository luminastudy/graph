import type { Node, Edge } from '@xyflow/react';
import type { TreeNodeData } from '../types';

export type LayoutDirection = 'vertical' | 'horizontal';

export interface LayoutOptions {
  /**
   * Direction of the tree layout
   * @default 'vertical'
   */
  direction?: LayoutDirection;
  /**
   * Horizontal spacing between nodes
   * @default 300
   */
  horizontalSpacing?: number;
  /**
   * Vertical spacing between nodes
   * @default 150
   */
  verticalSpacing?: number;
}

interface TreeNode<T extends Record<string, unknown>> {
  node: Node<T>;
  children: TreeNode<T>[];
  width: number;
}

/**
 * Calculate positions for tree nodes using a simple hierarchical layout
 *
 * @example
 * ```typescript
 * const nodes = [
 *   { id: '1', data: { label: 'Root' } },
 *   { id: '2', data: { label: 'Child 1' } },
 *   { id: '3', data: { label: 'Child 2' } }
 * ];
 * const edges = [
 *   { id: 'e1-2', source: '1', target: '2' },
 *   { id: 'e1-3', source: '1', target: '3' }
 * ];
 *
 * const layoutedNodes = autoLayout(nodes, edges);
 * ```
 */
export function autoLayout<T extends TreeNodeData = TreeNodeData>(
  nodes: Omit<Node<T>, 'position'>[],
  edges: Edge[],
  options: LayoutOptions = {}
): Node<T>[] {
  const {
    direction = 'vertical',
    horizontalSpacing = 300,
    verticalSpacing = 150,
  } = options;

  if (nodes.length === 0) {
    return [];
  }

  // Build adjacency map
  const childrenMap = new Map<string, string[]>();
  const parentMap = new Map<string, string>();

  edges.forEach(edge => {
    const children = childrenMap.get(edge.source) || [];
    children.push(edge.target);
    childrenMap.set(edge.source, children);
    parentMap.set(edge.target, edge.source);
  });

  // Find root nodes (nodes without parents)
  const roots = nodes.filter(node => !parentMap.has(node.id));

  if (roots.length === 0) {
    // No clear root, use first node
    roots.push(nodes[0]);
  }

  // Build tree structure
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  function buildTree(nodeId: string): TreeNode<T> {
    const node = nodeMap.get(nodeId)!;
    const children = (childrenMap.get(nodeId) || []).map(buildTree);

    // Calculate subtree width
    const width = children.length === 0
      ? 1
      : children.reduce((sum, child) => sum + child.width, 0);

    return { node: node as Node<T>, children, width };
  }

  const trees = roots.map(root => buildTree(root.id));

  // Position nodes
  const positioned = new Map<string, { x: number; y: number }>();

  function positionTree(tree: TreeNode<T>, x: number, y: number): void {
    if (direction === 'vertical') {
      positioned.set(tree.node.id, { x, y });

      if (tree.children.length > 0) {
        const totalWidth = tree.width;
        const childY = y + verticalSpacing;
        let childX = x - ((totalWidth - 1) * horizontalSpacing) / 2;

        tree.children.forEach(child => {
          const childCenterX = childX + (child.width * horizontalSpacing) / 2;
          positionTree(child, childCenterX, childY);
          childX += child.width * horizontalSpacing;
        });
      }
    } else {
      // Horizontal layout
      positioned.set(tree.node.id, { x: y, y: x });

      if (tree.children.length > 0) {
        const totalWidth = tree.width;
        const childX = y + horizontalSpacing;
        let childY = x - ((totalWidth - 1) * verticalSpacing) / 2;

        tree.children.forEach(child => {
          const childCenterY = childY + (child.width * verticalSpacing) / 2;
          positionTree(child, childCenterY, childX);
          childY += child.width * verticalSpacing;
        });
      }
    }
  }

  // Position each tree
  let offsetX = 0;
  trees.forEach(tree => {
    const treeWidth = tree.width * horizontalSpacing;
    positionTree(tree, offsetX + treeWidth / 2, 0);
    offsetX += treeWidth + horizontalSpacing;
  });

  // Apply positions to nodes
  return nodes.map(node => ({
    ...node,
    position: positioned.get(node.id) || { x: 0, y: 0 },
  })) as Node<T>[];
}

/**
 * Helper to create a tree from a simple parent-child structure
 *
 * @example
 * ```typescript
 * const tree = createTreeFromHierarchy([
 *   { id: '1', data: { label: 'Root' } },
 *   { id: '2', parentId: '1', data: { label: 'Child 1' } },
 *   { id: '3', parentId: '1', data: { label: 'Child 2' } }
 * ]);
 * // Returns { nodes, edges }
 * ```
 */
export function createTreeFromHierarchy<T extends TreeNodeData>(
  items: Array<{ id: string; parentId?: string; data: T }>
): { nodes: Node<T>[]; edges: Edge[] } {
  const nodes: Node<T>[] = items.map(item => ({
    id: item.id,
    type: 'treeNode',
    position: { x: 0, y: 0 }, // Will be calculated by autoLayout
    data: item.data,
  }));

  const edges: Edge[] = items
    .filter(item => item.parentId)
    .map(item => ({
      id: `e-${item.parentId}-${item.id}`,
      source: item.parentId!,
      target: item.id,
    }));

  return { nodes, edges };
}
