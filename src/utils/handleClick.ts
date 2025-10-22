import type { MouseEvent } from 'react';

/**
 * Handle click events on tree nodes
 */
export function handleClick(
  event: MouseEvent<HTMLDivElement>,
  onClick?: () => void
): void {
  if (!onClick) {
    return;
  }

  const target = event.target;
  // eslint-disable-next-line guard-clauses/prefer-guard-at-function-start -- onClick check should be first
  if (!(target instanceof HTMLElement)) {
    return;
  }

  // Don't trigger if clicking on interactive elements
  if (
    target.tagName === 'BUTTON' ||
    target.closest('button') ||
    target.tagName === 'A' ||
    target.closest('a')
  ) {
    return;
  }

  onClick();
}
