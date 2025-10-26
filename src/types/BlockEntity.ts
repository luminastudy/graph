import { TreeBlock } from "./TreeBlock";

export interface BlockEntity {
  readonly id: string;
  readonly text: string;
  Block?: TreeBlock;
}
