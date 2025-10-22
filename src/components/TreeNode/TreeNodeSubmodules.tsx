import { highlightText } from '../../utils';

export interface TreeNodeSubmodulesProps {
  readonly subModules?: readonly string[];
  readonly searchTerm?: string;
}

/** Display submodules as badges */
export const TreeNodeSubmodules = ({
  subModules,
  searchTerm,
}: TreeNodeSubmodulesProps) => {
  if (!subModules || subModules.length === 0) {
    return null;
  }

  return (
    <div className="tree-node__submodules">
      {subModules.map((subModule, index) => (
        <span key={index} className="tree-node__submodule">
          {highlightText(subModule, searchTerm)}
        </span>
      ))}
    </div>
  );
};
