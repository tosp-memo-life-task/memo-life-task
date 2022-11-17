export class SharedWorkspaceModel {
  id: string;
  title: string;
  descp: string;
  modifiedAt: string;
  owner: string;

  constructor(
    id: string,
    title: string,
    descp: string,
    modifiedAt: string,
    owner: string
  ) {
    this.id = id;
    this.title = title;
    this.descp = descp;
    this.modifiedAt = modifiedAt;
    this.owner = owner;
  }
}
