import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TreeNode } from './TreeNode';
import type { TreeNodeData } from '../../types';

const meta = {
  title: 'Components/TreeNode',
  component: TreeNode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TreeNode>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to use TreeNode with ReactFlow
const TreeNodeWrapper = ({ data }: { data: TreeNodeData }) => {
  const nodes = [
    {
      id: '1',
      type: 'custom',
      position: { x: 0, y: 0 },
      data,
    },
  ];

  const nodeTypes = {
    custom: TreeNode,
  };

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Introduction to Mathematics',
        direction: 'ttb',
      }}
    />
  ),
};

export const WithSubModules: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Advanced Calculus',
        subModules: ['Derivatives', 'Integrals', 'Series', 'Differential Equations'],
        direction: 'ttb',
      }}
    />
  ),
};

export const WithSubModulesCollapsed: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Advanced Calculus',
        subModules: ['Derivatives', 'Integrals', 'Series', 'Differential Equations'],
        isCollapsed: true,
        direction: 'ttb',
      }}
    />
  ),
};

export const Selected: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Linear Algebra',
        isSelected: true,
        direction: 'ttb',
      }}
    />
  ),
};

export const Highlighted: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Quantum Physics',
        isHighlighted: true,
        direction: 'ttb',
      }}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Unpublished Course',
        disabled: true,
        direction: 'ttb',
      }}
    />
  ),
};

export const WithSearchHighlight: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Introduction to Programming',
        searchTerm: 'Programming',
        subModules: ['Variables', 'Functions', 'Programming Basics', 'Data Structures'],
        direction: 'ttb',
      }}
    />
  ),
};

export const CanZoom: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Computer Science Fundamentals',
        canZoom: true,
        subModules: ['Algorithms', 'Data Structures', 'Complexity'],
        direction: 'ttb',
      }}
    />
  ),
};

export const RightToLeft: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'מבוא למתמטיקה',
        language: 'he',
        direction: 'rtl',
      }}
    />
  ),
};

export const LeftToRight: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Mathematics Course',
        direction: 'ltr',
      }}
    />
  ),
};

export const Complete: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Completed Module',
        style: 'complete',
        direction: 'ttb',
      }}
    />
  ),
};

export const InProgress: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'In Progress Module',
        style: 'inProgress',
        direction: 'ttb',
      }}
    />
  ),
};

export const Interactive: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Interactive Node',
        subModules: ['Module 1', 'Module 2', 'Module 3'],
        onClick: () => alert('Node clicked!'),
        onToggleCollapse: (nodeId, collapsed) => {
          console.log(`Node ${nodeId} ${collapsed ? 'collapsed' : 'expanded'}`);
        },
        direction: 'ttb',
      }}
    />
  ),
};
