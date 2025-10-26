import { ReactFlow, Background, Controls } from '@xyflow/react';
import type { Node, Edge, ReactFlowProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TreeNode } from '../TreeNode/TreeNode';
import type { TreeNodeData } from '../../types';

export interface TreeProps extends Partial<Omit<ReactFlowProps, 'nodes' | 'edges' | 'nodeTypes' | 'width' | 'height' | 'fitView'>> {
  /**
   * Array of tree nodes to render
   */
  nodes: Node<TreeNodeData>[];
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
  ...reactFlowProps
}: TreeProps) {
  // Default node types with TreeNode registered
  const nodeTypes = {
    treeNode: TreeNode,
    ...customNodeTypes,
  };

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div style={containerStyle}>
      <ReactFlow
        nodes={nodes}
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
