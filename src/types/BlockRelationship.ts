export interface BlockRelationship {
  readonly id: string;
  prerequisiteId: string;
  postrequisiteId: string;
}
