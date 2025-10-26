import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from './Tree';
import type { Edge } from '@xyflow/react';

const meta = {
  title: 'Components/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

// All stories use auto-layout - no need to specify positions!

export const SimpleTree: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        data: {
          id: '1',
          text: 'Introduction to Computer Science',
          style: 'complete' as const,
        },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          id: '2',
          text: 'Programming Fundamentals',
          style: 'inProgress' as const,
          subModules: ['Variables', 'Functions', 'Loops'],
        },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          id: '3',
          text: 'Data Structures',
          style: 'normal' as const,
          subModules: ['Arrays', 'Lists', 'Trees', 'Graphs'],
        },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          id: '4',
          text: 'Algorithms',
          style: 'normal' as const,
          disabled: true,
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
    ] as Edge[],
    direction: 'ttb',
    width: 800,
    height: 600,
  },
};

export const CourseHierarchy: Story = {
  args: {
    nodes: [
      {
        id: 'root',
        type: 'treeNode',
        data: {
          id: 'root',
          text: 'Mathematics Curriculum',
          style: 'halfProgress' as const,
          canZoom: true,
          isSelected: true,
          },
      },
      {
        id: 'algebra',
        type: 'treeNode',
        data: {
          id: 'algebra',
          text: 'Algebra',
          style: 'complete' as const,
          subModules: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
          },
      },
      {
        id: 'geometry',
        type: 'treeNode',
        data: {
          id: 'geometry',
          text: 'Geometry',
          style: 'threeQuarterProgress' as const,
          subModules: ['Angles', 'Triangles', 'Circles'],
          },
      },
      {
        id: 'calculus',
        type: 'treeNode',
        data: {
          id: 'calculus',
          text: 'Calculus',
          style: 'inProgress' as const,
          subModules: ['Limits', 'Derivatives', 'Integrals'],
          },
      },
      {
        id: 'statistics',
        type: 'treeNode',
        data: {
          id: 'statistics',
          text: 'Statistics',
          style: 'normal' as const,
          subModules: ['Probability', 'Distributions', 'Hypothesis Testing'],
          },
      },
      {
        id: 'advanced-calc',
        type: 'treeNode',
        data: {
          id: 'advanced-calc',
          text: 'Advanced Calculus',
          style: 'quarterProgress' as const,
          subModules: ['Multivariable', 'Vector Calculus'],
          },
      },
      {
        id: 'differential',
        type: 'treeNode',
        data: {
          id: 'differential',
          text: 'Differential Equations',
          style: 'normal' as const,
          disabled: true,
          },
      },
    ],
    edges: [
      { id: 'e-root-algebra', source: 'root', target: 'algebra' },
      { id: 'e-root-geometry', source: 'root', target: 'geometry' },
      { id: 'e-root-calculus', source: 'root', target: 'calculus' },
      { id: 'e-root-statistics', source: 'root', target: 'statistics' },
      { id: 'e-calculus-advanced', source: 'calculus', target: 'advanced-calc' },
      { id: 'e-calculus-diff', source: 'calculus', target: 'differential' },
    ] as Edge[],
    direction: 'ttb',
    width: 1200,
    height: 700,
  },
};

export const HorizontalLayout: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        data: {
          id: '1',
          text: 'Start',
          style: 'complete' as const,
          },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          id: '2',
          text: 'Beginner Level',
          style: 'complete' as const,
          subModules: ['Basics', 'Practice'],
          },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          id: '3',
          text: 'Intermediate Level',
          style: 'inProgress' as const,
          subModules: ['Theory', 'Applications'],
          },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          id: '4',
          text: 'Advanced Level',
          style: 'normal' as const,
          subModules: ['Research', 'Projects'],
          },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ] as Edge[],
    layoutOptions: {
      direction: 'horizontal',
    },
    direction: 'ltr',
    width: 1000,
    height: 600,
  },
};

export const RTLTree: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        data: {
          id: '1',
          text: 'מדעי המחשב',
          language: 'he' as const,
          style: 'complete' as const,
          },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          id: '2',
          text: 'תכנות',
          language: 'he' as const,
          style: 'complete' as const,
          subModules: ['משתנים', 'פונקציות', 'לולאות'],
          },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          id: '3',
          text: 'מבני נתונים',
          language: 'he' as const,
          style: 'inProgress' as const,
          subModules: ['מערכים', 'רשימות', 'עצים'],
          },
      },
      {
        id: '4',
        type: 'treeNode',
        data: {
          id: '4',
          text: 'אלגוריתמים',
          language: 'he' as const,
          style: 'normal' as const,
          },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ] as Edge[],
    direction: 'rtl',
    width: 800,
    height: 600,
  },
};

export const LargeCurriculum: Story = {
  args: {
    nodes: [
      {
        id: 'cs-101',
        type: 'treeNode',
        data: {
          id: 'cs-101',
          text: 'Computer Science 101',
          style: 'halfProgress' as const,
          canZoom: true,
          },
      },
      {
        id: 'intro',
        type: 'treeNode',
        data: {
          id: 'intro',
          text: 'Introduction',
          style: 'complete' as const,
          subModules: ['Overview', 'Setup'],
          },
      },
      {
        id: 'programming',
        type: 'treeNode',
        data: {
          id: 'programming',
          text: 'Programming Basics',
          style: 'complete' as const,
          subModules: ['Syntax', 'Variables', 'Control Flow'],
          },
      },
      {
        id: 'data-struct',
        type: 'treeNode',
        data: {
          id: 'data-struct',
          text: 'Data Structures',
          style: 'inProgress' as const,
          subModules: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
          isSelected: true,
          },
      },
      {
        id: 'algorithms',
        type: 'treeNode',
        data: {
          id: 'algorithms',
          text: 'Algorithms',
          style: 'quarterProgress' as const,
          subModules: ['Sorting', 'Searching', 'Recursion'],
          },
      },
      {
        id: 'final',
        type: 'treeNode',
        data: {
          id: 'final',
          text: 'Final Project',
          style: 'normal' as const,
          disabled: true,
          },
      },
      {
        id: 'arrays',
        type: 'treeNode',
        data: {
          id: 'arrays',
          text: 'Arrays Deep Dive',
          style: 'complete' as const,
          subModules: ['1D Arrays', '2D Arrays', 'Dynamic Arrays'],
          },
      },
      {
        id: 'trees',
        type: 'treeNode',
        data: {
          id: 'trees',
          text: 'Trees & Graphs',
          style: 'halfProgress' as const,
          subModules: ['Binary Trees', 'BST', 'Heaps', 'Graphs'],
          },
      },
      {
        id: 'sorting',
        type: 'treeNode',
        data: {
          id: 'sorting',
          text: 'Sorting Algorithms',
          style: 'normal' as const,
          subModules: ['Bubble', 'Merge', 'Quick'],
          },
      },
      {
        id: 'bst',
        type: 'treeNode',
        data: {
          id: 'bst',
          text: 'Binary Search Trees',
          style: 'threeQuarterProgress' as const,
          hasQuestions: true,
          },
      },
      {
        id: 'graph-algos',
        type: 'treeNode',
        data: {
          id: 'graph-algos',
          text: 'Graph Algorithms',
          style: 'quarterProgress' as const,
          subModules: ['DFS', 'BFS', 'Dijkstra'],
          },
      },
    ],
    edges: [
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
    ] as Edge[],
    layoutOptions: {
      horizontalSpacing: 350,
      verticalSpacing: 180,
    },
    direction: 'ttb',
    width: 1400,
    height: 800,
  },
};

export const WithoutControls: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        data: {
          id: '1',
          text: 'Simple Node',
          },
      },
    ],
    showControls: false,
    showBackground: false,
    direction: 'ttb',
    width: 600,
    height: 400,
  },
};

export const CustomSpacing: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        data: {
          id: '1',
          text: 'Root',
          style: 'complete' as const,
          },
      },
      {
        id: '2',
        type: 'treeNode',
        data: {
          id: '2',
          text: 'Child 1',
          style: 'inProgress' as const,
          },
      },
      {
        id: '3',
        type: 'treeNode',
        data: {
          id: '3',
          text: 'Child 2',
          style: 'normal' as const,
          },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
    ] as Edge[],
    layoutOptions: {
      horizontalSpacing: 500,
      verticalSpacing: 250,
    },
    direction: 'ttb',
    width: 1400,
    height: 800,
  },
};
