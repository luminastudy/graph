import { BlockRelationship } from "./BlockRelationship";

export interface TreeBlock {
  readonly id: string;

  prerequisiteFor?: BlockRelationship[];
  postrequisiteOf?: BlockRelationship[];
}
