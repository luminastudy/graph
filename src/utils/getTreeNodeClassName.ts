import type { TreeNodeData } from '../types';

/**
 * Get CSS class names for a tree node based on its state
 */
export function getTreeNodeClassName(data: TreeNodeData): string {
  const classes = ['tree-node'];

  if (data.isSelected) {
    classes.push('tree-node--selected');
  }

  if (data.isHighlighted) {
    classes.push('tree-node--highlighted');
  }

  if (data.disabled) {
    classes.push('tree-node--disabled');
  }

  return classes.join(' ');
}
