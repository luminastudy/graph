import type { TreeNodeData } from '../types';

/**
 * Check if a node has submodules
 */
export function hasSubModules(data: TreeNodeData): boolean {
  return Boolean(data.subModules && data.subModules.length > 0);
}
