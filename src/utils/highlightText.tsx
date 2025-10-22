import type { ReactNode } from 'react';

/**
 * Highlight search term in text
 */
export function highlightText(text: string, searchTerm?: string): ReactNode {
  if (!searchTerm || !searchTerm.trim()) {
    return text;
  }

  // Escape special regex characters
  const escapedTerm = searchTerm.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&');
  // eslint-disable-next-line security/detect-non-literal-regexp -- escapedTerm is sanitized above
  const parts = text.split(new RegExp(`(${escapedTerm})`, 'gi'));

  return (
    <>
      {parts.map((part, index) => {
        const isMatch = part.toLowerCase() === searchTerm.toLowerCase();
        return isMatch ? (
          <mark key={index} className="bg-yellow-200">
            {part}
          </mark>
        ) : (
          <span key={index} className="">
            {part}
          </span>
        );
      })}
    </>
  );
}
