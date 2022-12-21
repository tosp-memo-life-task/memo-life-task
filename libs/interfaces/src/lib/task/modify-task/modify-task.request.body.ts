import { TaskPriorityEnum, TaskStatusEnum } from '@memo-life-task/enums';

export interface IModifyTaskRequestBody {
  description: string;
  editorId: number;
  name: string;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
}
