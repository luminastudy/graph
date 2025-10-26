import type { BlockStyleType } from './BlockStyleType';
import type { Direction } from './Direction';

export interface TreeNodeData extends Record<string, unknown> {
  readonly label: string;
  readonly subModules?: readonly string[];
  readonly onClick?: () => void;
  readonly onToggleCollapse?: (nodeId: string, collapsed: boolean) => void;
  readonly isCollapsed?: boolean;
  readonly isSelected?: boolean;
  readonly isHighlighted?: boolean;
  readonly searchTerm?: string;
  readonly language?: 'en' | 'he';
  /**
   * Layout direction for proper handle positioning
   */
  readonly direction?: Direction;
  /**
   * Visual style for the node.
   */
  readonly style?: BlockStyleType;
  readonly type?: string;
  /**
   * Whether this node can be zoomed into (has submodules and not already zoomed)
   */
  readonly canZoom?: boolean;
  /**
   * Whether this module has associated questions
   */
  readonly hasQuestions?: boolean;
  /**
   * Whether this node is disabled (e.g., unpublished courses)
   */
  readonly disabled?: boolean;
}
