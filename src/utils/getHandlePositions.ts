import { Position } from '@xyflow/react';
import type { Direction } from '../types';

/**
 * Get handle positions based on layout direction
 */
export function getHandlePositions(
  isVertical: boolean,
  dir: Direction
): { targetPosition: Position; sourcePosition: Position } {
  if (isVertical) {
    // Top to bottom layout
    return {
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
    };
  }

  // Horizontal layouts (ltr or rtl)
  if (dir === 'rtl') {
    return {
      targetPosition: Position.Right,
      sourcePosition: Position.Left,
    };
  }

  // Default ltr
  return {
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  };
}
