import type { KeyboardEvent } from 'react';

/**
 * Handle keyboard events on tree nodes
 */
export function handleKeyDown(
  event: KeyboardEvent<HTMLDivElement>,
  onClick?: () => void
): void {
  if (!onClick) {
    return;
  }

  // Trigger on Enter or Space
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onClick();
  }
}
