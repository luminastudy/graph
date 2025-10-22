import type { MouseEvent, KeyboardEvent } from 'react';

interface CollapseButtonProps {
  readonly isCollapsed: boolean;
  readonly setIsCollapsed: (collapsed: boolean) => void;
  readonly onToggleCollapse: (nodeId: string, collapsed: boolean) => void;
  readonly nodeId: string;
  readonly isMobile: boolean;
}

/** Button used to toggle node collapse state */
export const CollapseButton = ({
  isCollapsed,
  setIsCollapsed,
  onToggleCollapse,
  nodeId,
  isMobile,
}: CollapseButtonProps) => {
  const handleToggle = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggleCollapse(nodeId, newCollapsed);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(e);
    }
  };

  const buttonSize = isMobile ? 'w-8 h-8 text-base' : 'w-4 h-4 text-xs';
  const buttonPadding = isMobile ? 'p-1' : 'p-0.5';

  return (
    <button
      id={`tree-node-collapse-button-${nodeId}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={`bg-transparent border-none cursor-pointer ${buttonPadding} rounded-sm text-gray-500 flex items-center justify-center ${buttonSize}`}
      title={isCollapsed ? 'Expand sub-modules' : 'Collapse sub-modules'}
      aria-label={isCollapsed ? 'Expand sub-modules' : 'Collapse sub-modules'}
      type="button"
    >
      {isCollapsed ? '▶' : '▼'}
    </button>
  );
};
