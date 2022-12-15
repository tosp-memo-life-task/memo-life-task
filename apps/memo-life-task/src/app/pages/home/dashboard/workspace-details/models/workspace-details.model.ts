export class WorkspaceDetailsModel {
  id: string;
  title: string;
  descp: string;
  modifiedAt: string;
  editors: EditorModel[];
  tasks: TaskModel[];

  constructor(
    id: string,
    title: string,
    descp: string,
    modifiedAt: string,
    editors: EditorModel[],
    tasks: TaskModel[]
  ) {
    this.id = id;
    this.title = title;
    this.descp = descp;
    this.modifiedAt = modifiedAt;
    this.editors = editors;
    this.tasks = tasks;
  }
}

export class EditorModel {
  id: string;
  name: string;
  isMe: boolean;

  constructor(id: string, name: string, isMe: boolean) {
    this.id = id;
    this.name = name;
    this.isMe = isMe;
  }
}

export class TaskModel {
  id: string;
  name: string;
  details: string;
  assignee: EditorModel;
  priority: PriorityEnum;
  lastModified: string;

  constructor(
    id: string,
    name: string,
    details: string,
    assignee: EditorModel,
    priority: PriorityEnum,
    lastModified: string
  ) {
    this.id = id;
    this.name = name;
    this.details = details;
    this.assignee = assignee;
    this.priority = priority;
    this.lastModified = lastModified;
  }
}

export enum PriorityEnum {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}
