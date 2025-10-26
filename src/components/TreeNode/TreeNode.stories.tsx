import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TreeNode } from './TreeNode';
import { ZoomBadge } from './ZoomBadge';
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

export const WithZoomBadge: Story = {
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

export const ZoomBadgeOnly: Story = {
  render: () => (
    <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h3 style={{ margin: 0 }}>Standalone ZoomBadge Component:</h3>
      <ZoomBadge />
      <p style={{ color: '#666', marginTop: '1rem' }}>
        This badge can be imported and used independently in custom components
      </p>
    </div>
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

export const AllProgressStates: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'custom',
        position: { x: 0, y: 0 },
        data: { label: 'Normal', style: 'normal' as const, direction: 'ttb' as const },
      },
      {
        id: '2',
        type: 'custom',
        position: { x: 260, y: 0 },
        data: { label: 'Quarter', style: 'quarterProgress' as const, direction: 'ttb' as const },
      },
      {
        id: '3',
        type: 'custom',
        position: { x: 520, y: 0 },
        data: { label: 'Half', style: 'halfProgress' as const, direction: 'ttb' as const },
      },
      {
        id: '4',
        type: 'custom',
        position: { x: 0, y: 120 },
        data: { label: 'Three Quarter', style: 'threeQuarterProgress' as const, direction: 'ttb' as const },
      },
      {
        id: '5',
        type: 'custom',
        position: { x: 260, y: 120 },
        data: { label: 'In Progress', style: 'inProgress' as const, direction: 'ttb' as const },
      },
      {
        id: '6',
        type: 'custom',
        position: { x: 520, y: 120 },
        data: { label: 'Complete', style: 'complete' as const, direction: 'ttb' as const },
      },
    ];

    const nodeTypes = { custom: TreeNode };

    return (
      <div style={{ width: '800px', height: '600px' }}>
        <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const ComplexNode: Story = {
  render: () => (
    <TreeNodeWrapper
      data={{
        label: 'Advanced Course with All Features',
        subModules: ['Introduction', 'Advanced Topics', 'Practical Applications', 'Final Project'],
        canZoom: true,
        style: 'halfProgress',
        isSelected: true,
        hasQuestions: true,
        direction: 'ttb',
      }}
    />
  ),
};

// Multi-node graph stories

export const SimpleTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 250, y: 0 },
        data: {
          label: 'Introduction to Computer Science',
          style: 'complete' as const,
          direction: 'ttb' as const,
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 100, y: 150 },
        data: {
          label: 'Programming Fundamentals',
          style: 'inProgress' as const,
          subModules: ['Variables', 'Functions', 'Loops'],
          direction: 'ttb' as const,
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 400, y: 150 },
        data: {
          label: 'Data Structures',
          style: 'normal' as const,
          subModules: ['Arrays', 'Lists', 'Trees', 'Graphs'],
          direction: 'ttb' as const,
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 250, y: 300 },
        data: {
          label: 'Algorithms',
          style: 'normal' as const,
          disabled: true,
          direction: 'ttb' as const,
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '800px', height: '600px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const CourseHierarchy: Story = {
  render: () => {
    const nodes = [
      {
        id: 'root',
        type: 'treeNode',
        position: { x: 400, y: 0 },
        data: {
          label: 'Mathematics Curriculum',
          style: 'halfProgress',
          canZoom: true,
          isSelected: true,
          direction: 'ttb',
        },
      },
      {
        id: 'algebra',
        type: 'treeNode',
        position: { x: 0, y: 150 },
        data: {
          label: 'Algebra',
          style: 'complete',
          subModules: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
          direction: 'ttb',
        },
      },
      {
        id: 'geometry',
        type: 'treeNode',
        position: { x: 300, y: 150 },
        data: {
          label: 'Geometry',
          style: 'threeQuarterProgress',
          subModules: ['Angles', 'Triangles', 'Circles'],
          direction: 'ttb',
        },
      },
      {
        id: 'calculus',
        type: 'treeNode',
        position: { x: 600, y: 150 },
        data: {
          label: 'Calculus',
          style: 'inProgress',
          subModules: ['Limits', 'Derivatives', 'Integrals'],
          direction: 'ttb',
        },
      },
      {
        id: 'statistics',
        type: 'treeNode',
        position: { x: 900, y: 150 },
        data: {
          label: 'Statistics',
          style: 'normal',
          subModules: ['Probability', 'Distributions', 'Hypothesis Testing'],
          direction: 'ttb',
        },
      },
      {
        id: 'advanced-calc',
        type: 'treeNode',
        position: { x: 600, y: 300 },
        data: {
          label: 'Advanced Calculus',
          style: 'quarterProgress',
          subModules: ['Multivariable', 'Vector Calculus'],
          direction: 'ttb',
        },
      },
      {
        id: 'differential',
        type: 'treeNode',
        position: { x: 900, y: 300 },
        data: {
          label: 'Differential Equations',
          style: 'normal',
          disabled: true,
          direction: 'ttb',
        },
      },
    ];

    const edges = [
      { id: 'e-root-algebra', source: 'root', target: 'algebra' },
      { id: 'e-root-geometry', source: 'root', target: 'geometry' },
      { id: 'e-root-calculus', source: 'root', target: 'calculus' },
      { id: 'e-root-statistics', source: 'root', target: 'statistics' },
      { id: 'e-calculus-advanced', source: 'calculus', target: 'advanced-calc' },
      { id: 'e-calculus-diff', source: 'calculus', target: 'differential' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '1200px', height: '700px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const HorizontalTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 0, y: 200 },
        data: {
          label: 'Start',
          style: 'complete',
          direction: 'ltr',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 300, y: 100 },
        data: {
          label: 'Beginner Level',
          style: 'complete',
          subModules: ['Basics', 'Practice'],
          direction: 'ltr',
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 300, y: 300 },
        data: {
          label: 'Intermediate Level',
          style: 'inProgress',
          subModules: ['Theory', 'Applications'],
          direction: 'ltr',
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 600, y: 200 },
        data: {
          label: 'Advanced Level',
          style: 'normal',
          subModules: ['Research', 'Projects'],
          direction: 'ltr',
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '1000px', height: '600px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const MixedStatesTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 300, y: 0 },
        data: {
          label: 'Course Overview',
          style: 'halfProgress',
          isSelected: true,
          direction: 'ttb',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 0, y: 150 },
        data: {
          label: 'Module 1: Completed',
          style: 'complete',
          subModules: ['Lesson 1', 'Lesson 2', 'Lesson 3'],
          direction: 'ttb',
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 300, y: 150 },
        data: {
          label: 'Module 2: In Progress',
          style: 'threeQuarterProgress',
          subModules: ['Lesson 1', 'Lesson 2'],
          canZoom: true,
          isHighlighted: true,
          direction: 'ttb',
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 600, y: 150 },
        data: {
          label: 'Module 3: Not Started',
          style: 'normal',
          subModules: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
          direction: 'ttb',
        },
      },
      {
        id: '5',
        type: 'treeNode',
        position: { x: 150, y: 300 },
        data: {
          label: 'Quiz 1',
          style: 'complete',
          hasQuestions: true,
          direction: 'ttb',
        },
      },
      {
        id: '6',
        type: 'treeNode',
        position: { x: 450, y: 300 },
        data: {
          label: 'Quiz 2',
          style: 'quarterProgress',
          hasQuestions: true,
          direction: 'ttb',
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e1-4', source: '1', target: '4' },
      { id: 'e2-5', source: '2', target: '5' },
      { id: 'e3-6', source: '3', target: '6' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '900px', height: '600px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const LargeCurriculum: Story = {
  render: () => {
    const nodes = [
      {
        id: 'cs-101',
        type: 'treeNode',
        position: { x: 600, y: 0 },
        data: {
          label: 'Computer Science 101',
          style: 'halfProgress',
          canZoom: true,
          direction: 'ttb',
        },
      },
      // First level
      {
        id: 'intro',
        type: 'treeNode',
        position: { x: 100, y: 150 },
        data: {
          label: 'Introduction',
          style: 'complete',
          subModules: ['Overview', 'Setup'],
          direction: 'ttb',
        },
      },
      {
        id: 'programming',
        type: 'treeNode',
        position: { x: 400, y: 150 },
        data: {
          label: 'Programming Basics',
          style: 'complete',
          subModules: ['Syntax', 'Variables', 'Control Flow'],
          direction: 'ttb',
        },
      },
      {
        id: 'data-struct',
        type: 'treeNode',
        position: { x: 700, y: 150 },
        data: {
          label: 'Data Structures',
          style: 'inProgress',
          subModules: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
          isSelected: true,
          direction: 'ttb',
        },
      },
      {
        id: 'algorithms',
        type: 'treeNode',
        position: { x: 1000, y: 150 },
        data: {
          label: 'Algorithms',
          style: 'quarterProgress',
          subModules: ['Sorting', 'Searching', 'Recursion'],
          direction: 'ttb',
        },
      },
      {
        id: 'final',
        type: 'treeNode',
        position: { x: 1300, y: 150 },
        data: {
          label: 'Final Project',
          style: 'normal',
          disabled: true,
          direction: 'ttb',
        },
      },
      // Second level
      {
        id: 'arrays',
        type: 'treeNode',
        position: { x: 550, y: 300 },
        data: {
          label: 'Arrays Deep Dive',
          style: 'complete',
          subModules: ['1D Arrays', '2D Arrays', 'Dynamic Arrays'],
          direction: 'ttb',
        },
      },
      {
        id: 'trees',
        type: 'treeNode',
        position: { x: 850, y: 300 },
        data: {
          label: 'Trees & Graphs',
          style: 'halfProgress',
          subModules: ['Binary Trees', 'BST', 'Heaps', 'Graphs'],
          direction: 'ttb',
        },
      },
      {
        id: 'sorting',
        type: 'treeNode',
        position: { x: 1000, y: 300 },
        data: {
          label: 'Sorting Algorithms',
          style: 'normal',
          subModules: ['Bubble', 'Merge', 'Quick'],
          direction: 'ttb',
        },
      },
      // Third level
      {
        id: 'bst',
        type: 'treeNode',
        position: { x: 750, y: 450 },
        data: {
          label: 'Binary Search Trees',
          style: 'threeQuarterProgress',
          hasQuestions: true,
          direction: 'ttb',
        },
      },
      {
        id: 'graph-algos',
        type: 'treeNode',
        position: { x: 950, y: 450 },
        data: {
          label: 'Graph Algorithms',
          style: 'quarterProgress',
          subModules: ['DFS', 'BFS', 'Dijkstra'],
          direction: 'ttb',
        },
      },
    ];

    const edges = [
      // Root connections
      { id: 'e-root-intro', source: 'cs-101', target: 'intro' },
      { id: 'e-root-prog', source: 'cs-101', target: 'programming' },
      { id: 'e-root-ds', source: 'cs-101', target: 'data-struct' },
      { id: 'e-root-algo', source: 'cs-101', target: 'algorithms' },
      { id: 'e-root-final', source: 'cs-101', target: 'final' },
      // Second level
      { id: 'e-ds-arrays', source: 'data-struct', target: 'arrays' },
      { id: 'e-ds-trees', source: 'data-struct', target: 'trees' },
      { id: 'e-algo-sort', source: 'algorithms', target: 'sorting' },
      // Third level
      { id: 'e-trees-bst', source: 'trees', target: 'bst' },
      { id: 'e-trees-graph', source: 'trees', target: 'graph-algos' },
      // Cross connections
      { id: 'e-prog-ds', source: 'programming', target: 'data-struct' },
      { id: 'e-ds-algo', source: 'data-struct', target: 'algorithms' },
      { id: 'e-algo-final', source: 'algorithms', target: 'final' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '1400px', height: '800px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const RTLTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 300, y: 0 },
        data: {
          label: 'מדעי המחשב',
          language: 'he',
          style: 'complete',
          direction: 'rtl',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 100, y: 150 },
        data: {
          label: 'תכנות',
          language: 'he',
          style: 'complete',
          subModules: ['משתנים', 'פונקציות', 'לולאות'],
          direction: 'rtl',
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 500, y: 150 },
        data: {
          label: 'מבני נתונים',
          language: 'he',
          style: 'inProgress',
          subModules: ['מערכים', 'רשימות', 'עצים'],
          direction: 'rtl',
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 300, y: 300 },
        data: {
          label: 'אלגוריתמים',
          language: 'he',
          style: 'normal',
          direction: 'rtl',
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '800px', height: '600px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};

export const SearchHighlightTree: Story = {
  render: () => {
    const searchTerm = 'Data';
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 250, y: 0 },
        data: {
          label: 'Database Systems',
          searchTerm,
          style: 'complete',
          direction: 'ttb',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 0, y: 150 },
        data: {
          label: 'Data Modeling',
          searchTerm,
          style: 'complete',
          subModules: ['ER Diagrams', 'Data Types', 'Normalization'],
          isHighlighted: true,
          direction: 'ttb',
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 300, y: 150 },
        data: {
          label: 'SQL Fundamentals',
          searchTerm,
          style: 'inProgress',
          subModules: ['SELECT', 'JOIN', 'Data Aggregation'],
          direction: 'ttb',
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 600, y: 150 },
        data: {
          label: 'NoSQL Databases',
          searchTerm,
          style: 'normal',
          subModules: ['MongoDB', 'Data Structures'],
          direction: 'ttb',
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e1-4', source: '1', target: '4' },
    ];

    const nodeTypes = { treeNode: TreeNode };

    return (
      <div style={{ width: '900px', height: '600px' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  },
};
