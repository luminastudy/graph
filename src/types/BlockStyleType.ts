const BlockStyle = {
  complete: 'complete',
  normal: 'normal',
  inProgress: 'inProgress',
  quarterProgress: 'quarterProgress',
  halfProgress: 'halfProgress',
  threeQuarterProgress: 'threeQuarterProgress',
} as const;

export type BlockStyleType = keyof typeof BlockStyle;
