import { ReactFlow, Background, Controls } from '@xyflow/react';
import type { Node, Edge, ReactFlowProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TreeNode } from '../TreeNode/TreeNode';
import type { TreeNodeData, Direction } from '../../types';
import { autoLayout, type LayoutOptions } from '../../utils/autoLayout';

export interface TreeProps extends Partial<Omit<ReactFlowProps, 'nodes' | 'edges' | 'nodeTypes' | 'width' | 'height' | 'fitView'>> {
  /**
   * Array of tree nodes to render.
   * If using auto-layout, positions can be omitted or set to {x:0, y:0}
   */
  nodes: Node<TreeNodeData>[] | Omit<Node<TreeNodeData>, 'position'>[];
  /**
   * Array of edges connecting the nodes
   */
  edges?: Edge[];
  /**
   * Width of the tree container
   * @default '100%'
   */
  width?: string | number;
  /**
   * Height of the tree container
   * @default '600px'
   */
  height?: string | number;
  /**
   * Whether to show the background grid
   * @default true
   */
  showBackground?: boolean;
  /**
   * Whether to show the controls (zoom, fit view, etc.)
   * @default true
   */
  showControls?: boolean;
  /**
   * Whether to fit the view to show all nodes on mount
   * @default true
   */
  fitView?: boolean;
  /**
   * Custom node types (TreeNode is registered by default)
   */
  nodeTypes?: ReactFlowProps['nodeTypes'];
  /**
   * Layout options for auto-layout
   */
  layoutOptions?: LayoutOptions;
  /**
   * Direction for all nodes in the tree (for handle positioning)
   * @default 'ttb'
   */
  direction?: Direction;
}

/**
 * Tree component that wraps ReactFlow with TreeNode integration
 *
 * @example
 * ```tsx
 * import { Tree } from '@lumina-study/graph';
 *
 * const nodes = [
 *   {
 *     id: '1',
 *     type: 'treeNode',
 *     position: { x: 0, y: 0 },
 *     data: { label: 'Node 1', direction: 'ttb' }
 *   }
 * ];
 *
 * <Tree nodes={nodes} />
 * ```
 */
export function Tree({
  nodes,
  edges = [],
  width = '100%',
  height = '600px',
  showBackground = true,
  showControls = true,
  fitView = true,
  nodeTypes: customNodeTypes,
  layoutOptions,
  direction = 'ttb',
  ...reactFlowProps
}: TreeProps) {
  // Default node types with TreeNode registered
  const nodeTypes = {
    treeNode: TreeNode,
    ...customNodeTypes,
  };

  // Apply auto-layout and tree-level direction
  const processedNodes = autoLayout(
    nodes as Omit<Node<TreeNodeData>, 'position'>[],
    edges,
    layoutOptions
  ).map(node => ({
    ...node,
    data: {
      ...node.data,
      direction: node.data.direction || direction,
    },
  }));

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div style={containerStyle}>
      <ReactFlow
        nodes={processedNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView={fitView}
        {...reactFlowProps}
      >
        {showBackground && <Background />}
        {showControls && <Controls />}
      </ReactFlow>
    </div>
  );
}
