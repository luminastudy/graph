import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TreeNode } from './TreeNode';
import { ZoomBadge } from './ZoomBadge';
import { Tree } from '../Tree/Tree';
import type { TreeNodeData } from '../../types';
import type { Node, Edge } from '@xyflow/react';

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
  render: () => (
    <Tree
      nodes={[
        {
          id: '1',
          type: 'treeNode',
          data: { label: 'Introduction to Computer Science', style: 'complete' as const },
        },
        {
          id: '2',
          type: 'treeNode',
          data: { label: 'Programming Fundamentals', style: 'inProgress' as const, subModules: ['Variables', 'Functions', 'Loops'] },
        },
        {
          id: '3',
          type: 'treeNode',
          data: { label: 'Data Structures', style: 'normal' as const, subModules: ['Arrays', 'Lists', 'Trees', 'Graphs'] },
        },
        {
          id: '4',
          type: 'treeNode',
          data: { label: 'Algorithms', style: 'normal' as const, disabled: true },
        },
      ]}
      edges={[
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e2-4', source: '2', target: '4' },
      ] as Edge[]}
      autoLayout={true}
      direction="ttb"
      width={800}
      height={600}
    />
  ),
};

export const CourseHierarchy: Story = {
  render: () => {
    const nodes = [
      {
        id: 'root',
        type: 'treeNode',
        data: {
          label: 'Mathematics Curriculum',
          style: 'halfProgress',
          canZoom: true,
          isSelected: true,
        },
      },
      {
        id: 'algebra',
        type: 'treeNode',
        data: {
          label: 'Algebra',
          style: 'complete',
          subModules: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
        },
      },
      {
        id: 'geometry',
        type: 'treeNode',
        data: {
          label: 'Geometry',
          style: 'threeQuarterProgress',
          subModules: ['Angles', 'Triangles', 'Circles'],
        },
      },
      {
        id: 'calculus',
        type: 'treeNode',
        data: {
          label: 'Calculus',
          style: 'inProgress',
          subModules: ['Limits', 'Derivatives', 'Integrals'],
        },
      },
      {
        id: 'statistics',
        type: 'treeNode',
        data: {
          label: 'Statistics',
          style: 'normal',
          subModules: ['Probability', 'Distributions', 'Hypothesis Testing'],
        },
      },
      {
        id: 'advanced-calc',
        type: 'treeNode',
        data: {
          label: 'Advanced Calculus',
          style: 'quarterProgress',
          subModules: ['Multivariable', 'Vector Calculus'],
        },
      },
      {
        id: 'differential',
        type: 'treeNode',
        data: {
          label: 'Differential Equations',
          style: 'normal',
          disabled: true,
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

    return <Tree nodes={nodes} edges={edges as Edge[]} autoLayout={true} direction="ttb" width={1200} height={700} />;
  },
};

export const HorizontalTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        data: {
          label: 'Start',
          style: 'complete',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          label: 'Beginner Level',
          style: 'complete',
          subModules: ['Basics', 'Practice'],
        },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          label: 'Intermediate Level',
          style: 'inProgress',
          subModules: ['Theory', 'Applications'],
        },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          label: 'Advanced Level',
          style: 'normal',
          subModules: ['Research', 'Projects'],
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ];

    return (
      <Tree
        nodes={nodes}
        edges={edges as Edge[]}
        autoLayout={true}
        layoutOptions={{ direction: 'horizontal' }}
        direction="ltr"
        width={1000}
        height={600}
      />
    );
  },
};

export const MixedStatesTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        data: {
          label: 'Course Overview',
          style: 'halfProgress',
          isSelected: true,
        },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          label: 'Module 1: Completed',
          style: 'complete',
          subModules: ['Lesson 1', 'Lesson 2', 'Lesson 3'],
        },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          label: 'Module 2: In Progress',
          style: 'threeQuarterProgress',
          subModules: ['Lesson 1', 'Lesson 2'],
          canZoom: true,
          isHighlighted: true,
        },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          label: 'Module 3: Not Started',
          style: 'normal',
          subModules: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
        },
      },
      {
        id: '5',
        type: 'treeNode',
        data: {
          label: 'Quiz 1',
          style: 'complete',
          hasQuestions: true,
        },
      },
      {
        id: '6',
        type: 'treeNode',
        data: {
          label: 'Quiz 2',
          style: 'quarterProgress',
          hasQuestions: true,
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

    return <Tree nodes={nodes} edges={edges as Edge[]} autoLayout={true} direction="ttb" width={900} height={600} />;
  },
};

export const LargeCurriculum: Story = {
  render: () => {
    const nodes = [
      {
        id: 'cs-101',
        type: 'treeNode',
        data: {
          label: 'Computer Science 101',
          style: 'halfProgress',
          canZoom: true,
        },
      },
      {
        id: 'intro',
        type: 'treeNode',
        data: {
          label: 'Introduction',
          style: 'complete',
          subModules: ['Overview', 'Setup'],
        },
      },
      {
        id: 'programming',
        type: 'treeNode',
        data: {
          label: 'Programming Basics',
          style: 'complete',
          subModules: ['Syntax', 'Variables', 'Control Flow'],
        },
      },
      {
        id: 'data-struct',
        type: 'treeNode',
        data: {
          label: 'Data Structures',
          style: 'inProgress',
          subModules: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
          isSelected: true,
        },
      },
      {
        id: 'algorithms',
        type: 'treeNode',
        data: {
          label: 'Algorithms',
          style: 'quarterProgress',
          subModules: ['Sorting', 'Searching', 'Recursion'],
        },
      },
      {
        id: 'final',
        type: 'treeNode',
        data: {
          label: 'Final Project',
          style: 'normal',
          disabled: true,
        },
      },
      {
        id: 'arrays',
        type: 'treeNode',
        data: {
          label: 'Arrays Deep Dive',
          style: 'complete',
          subModules: ['1D Arrays', '2D Arrays', 'Dynamic Arrays'],
        },
      },
      {
        id: 'trees',
        type: 'treeNode',
        data: {
          label: 'Trees & Graphs',
          style: 'halfProgress',
          subModules: ['Binary Trees', 'BST', 'Heaps', 'Graphs'],
        },
      },
      {
        id: 'sorting',
        type: 'treeNode',
        data: {
          label: 'Sorting Algorithms',
          style: 'normal',
          subModules: ['Bubble', 'Merge', 'Quick'],
        },
      },
      {
        id: 'bst',
        type: 'treeNode',
        data: {
          label: 'Binary Search Trees',
          style: 'threeQuarterProgress',
          hasQuestions: true,
        },
      },
      {
        id: 'graph-algos',
        type: 'treeNode',
        data: {
          label: 'Graph Algorithms',
          style: 'quarterProgress',
          subModules: ['DFS', 'BFS', 'Dijkstra'],
        },
      },
    ];

    const edges = [
      { id: 'e-root-intro', source: 'cs-101', target: 'intro' },
      { id: 'e-root-prog', source: 'cs-101', target: 'programming' },
      { id: 'e-root-ds', source: 'cs-101', target: 'data-struct' },
      { id: 'e-root-algo', source: 'cs-101', target: 'algorithms' },
      { id: 'e-root-final', source: 'cs-101', target: 'final' },
      { id: 'e-ds-arrays', source: 'data-struct', target: 'arrays' },
      { id: 'e-ds-trees', source: 'data-struct', target: 'trees' },
      { id: 'e-algo-sort', source: 'algorithms', target: 'sorting' },
      { id: 'e-trees-bst', source: 'trees', target: 'bst' },
      { id: 'e-trees-graph', source: 'trees', target: 'graph-algos' },
      { id: 'e-prog-ds', source: 'programming', target: 'data-struct' },
      { id: 'e-ds-algo', source: 'data-struct', target: 'algorithms' },
      { id: 'e-algo-final', source: 'algorithms', target: 'final' },
    ];

    return (
      <Tree
        nodes={nodes}
        edges={edges as Edge[]}
        autoLayout={true}
        layoutOptions={{ horizontalSpacing: 350, verticalSpacing: 180 }}
        direction="ttb"
        width={1400}
        height={800}
      />
    );
  },
};

export const RTLTree: Story = {
  render: () => {
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        data: {
          label: 'מדעי המחשב',
          language: 'he',
          style: 'complete',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          label: 'תכנות',
          language: 'he',
          style: 'complete',
          subModules: ['משתנים', 'פונקציות', 'לולאות'],
        },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          label: 'מבני נתונים',
          language: 'he',
          style: 'inProgress',
          subModules: ['מערכים', 'רשימות', 'עצים'],
        },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          label: 'אלגוריתמים',
          language: 'he',
          style: 'normal',
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ];

    return <Tree nodes={nodes} edges={edges as Edge[]} autoLayout={true} direction="rtl" width={800} height={600} />;
  },
};

export const SearchHighlightTree: Story = {
  render: () => {
    const searchTerm = 'Data';
    const nodes = [
      {
        id: '1',
        type: 'treeNode',
        data: {
          label: 'Database Systems',
          searchTerm,
          style: 'complete',
        },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          label: 'Data Modeling',
          searchTerm,
          style: 'complete',
          subModules: ['ER Diagrams', 'Data Types', 'Normalization'],
          isHighlighted: true,
        },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          label: 'SQL Fundamentals',
          searchTerm,
          style: 'inProgress',
          subModules: ['SELECT', 'JOIN', 'Data Aggregation'],
        },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          label: 'NoSQL Databases',
          searchTerm,
          style: 'normal',
          subModules: ['MongoDB', 'Data Structures'],
        },
      },
    ];

    const edges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e1-4', source: '1', target: '4' },
    ];

    return <Tree nodes={nodes} edges={edges as Edge[]} autoLayout={true} direction="ttb" width={900} height={600} />;
  },
};
