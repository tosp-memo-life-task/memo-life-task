import { TaskPriorityEnum } from '@memo-life-task/enums';

export interface ICreateTaskRequestBody {
  description: string;
  editorId: number;
  name: string;
  priority: TaskPriorityEnum;
  workspaceId: number;
}
