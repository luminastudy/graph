# @lumina-study/graph

A React library for creating interactive tree node visualizations with React Flow integration.

## Features

- 🎨 Customizable tree nodes with multiple visual styles
- 📱 Responsive design with mobile support
- 🔄 Collapsible submodules
- 🔍 Search term highlighting
- ♿ Accessible with ARIA attributes
- 🎯 RTL and LTR language support
- 🖱️ Interactive with click and keyboard navigation
- 📦 Tree-shakeable with TypeScript support

## Installation

```bash
pnpm add @lumina-study/graph
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
pnpm add react react-dom @xyflow/react
```

## Usage

### Basic Example

```typescript
import { ReactFlow } from '@xyflow/react';
import { TreeNode } from '@lumina-study/graph';
import '@xyflow/react/dist/style.css';

const nodes = [
  {
    id: '1',
    type: 'treeNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Introduction to Mathematics',
      direction: 'ttb',
    },
  },
];

const nodeTypes = {
  treeNode: TreeNode,
};

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} />
    </div>
  );
}
```

### With Submodules

```typescript
const nodes = [
  {
    id: '1',
    type: 'treeNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Advanced Calculus',
      subModules: ['Derivatives', 'Integrals', 'Series'],
      direction: 'ttb',
      onToggleCollapse: (nodeId, collapsed) => {
        console.log(`Node ${nodeId} is ${collapsed ? 'collapsed' : 'expanded'}`);
      },
    },
  },
];
```

## API

### TreeNodeData

```typescript
interface TreeNodeData {
  readonly label: string;
  readonly subModules?: readonly string[];
  readonly onClick?: () => void;
  readonly onToggleCollapse?: (nodeId: string, collapsed: boolean) => void;
  readonly isCollapsed?: boolean;
  readonly isSelected?: boolean;
  readonly isHighlighted?: boolean;
  readonly searchTerm?: string;
  readonly language?: 'en' | 'he';
  readonly direction?: 'ltr' | 'rtl' | 'ttb';
  readonly style?: BlockStyleType;
  readonly type?: string;
  readonly canZoom?: boolean;
  readonly hasQuestions?: boolean;
  readonly disabled?: boolean;
}
```

### BlockStyleType

```typescript
type BlockStyleType =
  | 'complete'
  | 'normal'
  | 'inProgress'
  | 'quarterProgress'
  | 'halfProgress'
  | 'threeQuarterProgress';
```

### Direction

```typescript
type Direction = 'ltr' | 'rtl' | 'ttb';
```

## Exported Components

- `TreeNode` - Main tree node component
- `TreeNodeHandles` - React Flow handles component
- `TreeNodeHeader` - Node header with label and controls
- `TreeNodeSubmodules` - Submodules display component
- `CollapseButton` - Collapse/expand button

## Exported Utilities

- `getNodeDimensions(isMobile: boolean)` - Get node dimensions
- `getHandlePositions(isVertical: boolean, dir: Direction)` - Get handle positions
- `getTreeNodeClassName(data: TreeNodeData)` - Get CSS class names
- `hasSubModules(data: TreeNodeData)` - Check if node has submodules
- `handleClick(event, onClick)` - Handle click events
- `handleKeyDown(event, onClick)` - Handle keyboard events
- `highlightText(text, searchTerm)` - Highlight search terms
- `getBlockIcon(style)` - Get icon for block style

## Exported Constants

- `NODE_WIDTH_PX = 240` - Desktop node width
- `NODE_HEIGHT_PX = 80` - Desktop node height
- `MOBILE_NODE_WIDTH_PX = 180` - Mobile node width
- `MOBILE_NODE_HEIGHT_PX = 120` - Mobile node height

## Development

### Install dependencies

```bash
pnpm install
```

### Run Storybook

```bash
pnpm storybook
```

### Run tests

```bash
pnpm test
```

### Visual Testing

Visual regression testing is configured with Storybook Test Runner. See [VISUAL_TESTING.md](./VISUAL_TESTING.md) for details.

```bash
# Development mode (Storybook must be running)
pnpm test-storybook

# CI mode (builds and serves Storybook automatically)
pnpm test-storybook:ci
```

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

### Type check

```bash
pnpm typecheck
```

### Release

```bash
pnpm release
```

## License

ISC
