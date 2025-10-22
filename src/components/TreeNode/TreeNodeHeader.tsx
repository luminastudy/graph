import { CollapseButton } from './CollapseButton';
import { ZoomBadge } from './ZoomBadge';
import { highlightText } from '../../utils';

export interface TreeNodeHeaderProps {
  readonly hasSubModules: boolean;
  readonly isCollapsed: boolean;
  readonly setIsCollapsed: (collapsed: boolean) => void;
  readonly onToggleCollapse: (nodeId: string, collapsed: boolean) => void;
  readonly nodeId: string;
  readonly label: string;
  readonly searchTerm?: string;
  readonly iconPath?: string;
  readonly canZoom?: boolean;
  readonly isMobile: boolean;
}

/** Header section for tree nodes including collapse control */
export const TreeNodeHeader = ({
  hasSubModules,
  isCollapsed,
  setIsCollapsed,
  onToggleCollapse,
  nodeId,
  label,
  searchTerm,
  iconPath,
  canZoom,
  isMobile,
}: TreeNodeHeaderProps) => {
  return (
    <div
      id={`tree-node-header-${nodeId}`}
      className={`${isMobile ? 'flex flex-col gap-2' : ''}`}
      style={{ display: isMobile ? 'flex' : 'block' }}
    >
      {hasSubModules ? (
        <div
          id={`tree-node-collapse-wrapper-${nodeId}`}
          className={`${isMobile ? 'flex justify-start' : ''}`}
          style={{ display: isMobile ? 'flex' : 'inline' }}
        >
          <CollapseButton
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            onToggleCollapse={onToggleCollapse}
            nodeId={nodeId}
            isMobile={isMobile}
          />
        </div>
      ) : null}
      <div
        id={`tree-node-content-${nodeId}`}
        className={`relative ${isMobile ? 'text-start' : ''}`}
        style={{ lineHeight: '1.25', textAlign: isMobile ? 'start' : 'initial' }}
      >
        {iconPath && (
          <div
            className="icon-wrapper"
            style={{
              width: '3rem',
              marginBottom: isMobile ? '0.5rem' : 0,
              float: isMobile ? 'none' : 'right',
            }}
          >
            <img src={iconPath} alt="" role="presentation" className="icon-img" />
          </div>
        )}
        <span
          className="tree-node__label"
          style={{
            fontWeight: 600,
            display: canZoom ? 'flex' : 'block',
            fontSize: isMobile ? '1.125rem' : '1.25rem',
            textAlign: 'start',
          }}
        >
          {highlightText(label, searchTerm)}
          {canZoom && <ZoomBadge />}
        </span>
      </div>
    </div>
  );
};
