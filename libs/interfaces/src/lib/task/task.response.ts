import { IUserResponse } from '../user/user.response';

import { TaskPriorityEnum, TaskStatusEnum } from '@memo-life-task/enums';

export interface ITaskResponse {
  assignee: IUserResponse;
  createdAt: Date;
  description: string;
  name: string;
  id: number;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
  updatedAt: Date;
  workspaceId: number;
}
