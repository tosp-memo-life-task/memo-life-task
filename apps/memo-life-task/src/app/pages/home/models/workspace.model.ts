export class WorkspaceModel {
  id: string;
  title: string;
  descp: string;
  modifiedAt: string;

  constructor(id: string, title: string, descp: string, modifiedAt: string) {
    this.id = id;
    this.title = title;
    this.descp = descp;
    this.modifiedAt = modifiedAt;
  }
}
