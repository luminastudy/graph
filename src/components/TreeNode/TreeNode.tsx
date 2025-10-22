import { type NodeProps } from '@xyflow/react';
import { useState, useEffect } from 'react';
import { getTreeNodeClassName, getBlockIcon, handleClick, handleKeyDown, hasSubModules, getNodeDimensions } from '../../utils';
import type { TreeNodeData } from '../../types';
import { TreeNodeHandles } from './TreeNodeHandles';
import { TreeNodeHeader } from './TreeNodeHeader';
import { TreeNodeSubmodules } from './TreeNodeSubmodules';
import { useMobileDetection } from './useMobileDetection';
import './TreeNode.css';

type TreeNodeProps = NodeProps & { data: TreeNodeData };

function TreeNodeContainer(props: TreeNodeProps) {
  const { data } = props;
  const isMobile = useMobileDetection();
  const isVertical = data.direction === 'ttb';
  const layoutDirection = data.direction || 'ttb';

  const [isCollapsed, setIsCollapsed] = useState(
    data.isCollapsed !== undefined ? data.isCollapsed : false
  );

  useEffect(() => {
    if (data.isCollapsed !== undefined) {
      setIsCollapsed(data.isCollapsed);
    }
  }, [data.isCollapsed]);

  const hasSubModulesFlag = hasSubModules(data);
  const iconPath = getBlockIcon(data.style);

  // Set text direction based on language, but always align text to start
  const textDirection = data.language === 'he' ? 'rtl' : 'ltr';
  const textAlign = 'start';

  // Get responsive dimensions based on device type
  const { width: nodeWidth, height: nodeHeight } = getNodeDimensions(isMobile);

  const handleToggleCollapse = (nodeId: string, collapsed: boolean) => {
    if (data.onToggleCollapse) {
      data.onToggleCollapse(nodeId, collapsed);
    }
  };

  return (
    <div
      id={`tree-node-${props.id}`}
      onClick={(e) => handleClick(e, data.disabled ? undefined : data.onClick)}
      onKeyDown={(e) =>
        handleKeyDown(e, data.disabled ? undefined : data.onClick)
      }
      className={getTreeNodeClassName(data)}
      style={{
        direction: textDirection,
        textAlign,
        width: nodeWidth,
        height: nodeHeight,
      }}
      role="treeitem"
      aria-expanded={hasSubModulesFlag ? !isCollapsed : undefined}
      aria-selected={data.isSelected}
      aria-disabled={data.disabled}
      tabIndex={data.isSelected ? 0 : -1}
    >
      <TreeNodeHandles isVertical={isVertical} dir={layoutDirection} />
      <TreeNodeHeader
        hasSubModules={hasSubModulesFlag}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        onToggleCollapse={handleToggleCollapse}
        nodeId={props.id}
        label={data.label}
        searchTerm={data.searchTerm}
        iconPath={iconPath}
        canZoom={data.canZoom}
        isMobile={isMobile}
      />
      {!isCollapsed && (
        <TreeNodeSubmodules
          subModules={data.subModules}
          searchTerm={data.searchTerm}
        />
      )}
    </div>
  );
}

export const TreeNode = TreeNodeContainer;
