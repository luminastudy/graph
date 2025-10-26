import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from './Tree';
import type { TreeNodeData } from '../../types';
import type { Node, Edge } from '@xyflow/react';

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

export const SimpleTree: Story = {
  args: {
    nodes: [
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
    ] as Node<TreeNodeData>[],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
    ] as Edge[],
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
        position: { x: 400, y: 0 },
        data: {
          label: 'Mathematics Curriculum',
          style: 'halfProgress' as const,
          canZoom: true,
          isSelected: true,
          direction: 'ttb' as const,
        },
      },
      {
        id: 'algebra',
        type: 'treeNode',
        position: { x: 0, y: 150 },
        data: {
          label: 'Algebra',
          style: 'complete' as const,
          subModules: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
          direction: 'ttb' as const,
        },
      },
      {
        id: 'geometry',
        type: 'treeNode',
        position: { x: 300, y: 150 },
        data: {
          label: 'Geometry',
          style: 'threeQuarterProgress' as const,
          subModules: ['Angles', 'Triangles', 'Circles'],
          direction: 'ttb' as const,
        },
      },
      {
        id: 'calculus',
        type: 'treeNode',
        position: { x: 600, y: 150 },
        data: {
          label: 'Calculus',
          style: 'inProgress' as const,
          subModules: ['Limits', 'Derivatives', 'Integrals'],
          direction: 'ttb' as const,
        },
      },
      {
        id: 'statistics',
        type: 'treeNode',
        position: { x: 900, y: 150 },
        data: {
          label: 'Statistics',
          style: 'normal' as const,
          subModules: ['Probability', 'Distributions', 'Hypothesis Testing'],
          direction: 'ttb' as const,
        },
      },
      {
        id: 'advanced-calc',
        type: 'treeNode',
        position: { x: 600, y: 300 },
        data: {
          label: 'Advanced Calculus',
          style: 'quarterProgress' as const,
          subModules: ['Multivariable', 'Vector Calculus'],
          direction: 'ttb' as const,
        },
      },
      {
        id: 'differential',
        type: 'treeNode',
        position: { x: 900, y: 300 },
        data: {
          label: 'Differential Equations',
          style: 'normal' as const,
          disabled: true,
          direction: 'ttb' as const,
        },
      },
    ] as Node<TreeNodeData>[],
    edges: [
      { id: 'e-root-algebra', source: 'root', target: 'algebra' },
      { id: 'e-root-geometry', source: 'root', target: 'geometry' },
      { id: 'e-root-calculus', source: 'root', target: 'calculus' },
      { id: 'e-root-statistics', source: 'root', target: 'statistics' },
      { id: 'e-calculus-advanced', source: 'calculus', target: 'advanced-calc' },
      { id: 'e-calculus-diff', source: 'calculus', target: 'differential' },
    ] as Edge[],
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
        position: { x: 0, y: 200 },
        data: {
          label: 'Start',
          style: 'complete' as const,
          direction: 'ltr' as const,
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 300, y: 100 },
        data: {
          label: 'Beginner Level',
          style: 'complete' as const,
          subModules: ['Basics', 'Practice'],
          direction: 'ltr' as const,
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 300, y: 300 },
        data: {
          label: 'Intermediate Level',
          style: 'inProgress' as const,
          subModules: ['Theory', 'Applications'],
          direction: 'ltr' as const,
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 600, y: 200 },
        data: {
          label: 'Advanced Level',
          style: 'normal' as const,
          subModules: ['Research', 'Projects'],
          direction: 'ltr' as const,
        },
      },
    ] as Node<TreeNodeData>[],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ] as Edge[],
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
        position: { x: 300, y: 0 },
        data: {
          label: 'מדעי המחשב',
          language: 'he' as const,
          style: 'complete' as const,
          direction: 'rtl' as const,
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 100, y: 150 },
        data: {
          label: 'תכנות',
          language: 'he' as const,
          style: 'complete' as const,
          subModules: ['משתנים', 'פונקציות', 'לולאות'],
          direction: 'rtl' as const,
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 500, y: 150 },
        data: {
          label: 'מבני נתונים',
          language: 'he' as const,
          style: 'inProgress' as const,
          subModules: ['מערכים', 'רשימות', 'עצים'],
          direction: 'rtl' as const,
        },
      },
      {
        id: '4',
        type: 'treeNode',
        position: { x: 300, y: 300 },
        data: {
          label: 'אלגוריתמים',
          language: 'he' as const,
          style: 'normal' as const,
          direction: 'rtl' as const,
        },
      },
    ] as Node<TreeNodeData>[],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-4', source: '3', target: '4' },
    ] as Edge[],
    width: 800,
    height: 600,
  },
};

export const WithoutControls: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 200, y: 100 },
        data: {
          label: 'Simple Node',
          direction: 'ttb' as const,
        },
      },
    ] as Node<TreeNodeData>[],
    showControls: false,
    showBackground: false,
    width: 600,
    height: 400,
  },
};

export const CustomSize: Story = {
  args: {
    nodes: [
      {
        id: '1',
        type: 'treeNode',
        position: { x: 250, y: 0 },
        data: {
          label: 'Root',
          style: 'complete' as const,
          direction: 'ttb' as const,
        },
      },
      {
        id: '2',
        type: 'treeNode',
        position: { x: 100, y: 150 },
        data: {
          label: 'Child 1',
          style: 'inProgress' as const,
          direction: 'ttb' as const,
        },
      },
      {
        id: '3',
        type: 'treeNode',
        position: { x: 400, y: 150 },
        data: {
          label: 'Child 2',
          style: 'normal' as const,
          direction: 'ttb' as const,
        },
      },
    ] as Node<TreeNodeData>[],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
    ] as Edge[],
    width: 1400,
    height: 800,
  },
};
