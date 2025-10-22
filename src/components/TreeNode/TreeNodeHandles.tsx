import { Handle } from '@xyflow/react';
import { getHandlePositions } from '../../utils';
import type { Direction } from '../../types';

interface TreeNodeHandlesProps {
  readonly isVertical: boolean;
  readonly dir: Direction;
}

/** Handles used by React Flow nodes */
export const TreeNodeHandles = ({
  isVertical,
  dir,
}: TreeNodeHandlesProps) => {
  const { targetPosition, sourcePosition } = getHandlePositions(
    isVertical,
    dir
  );

  return (
    <>
      <Handle
        id="target"
        type="target"
        position={targetPosition}
        style={{ background: '#3b82f6' }}
      />
      <Handle
        id="source"
        type="source"
        position={sourcePosition}
        style={{ background: '#3b82f6' }}
      />
    </>
  );
};
