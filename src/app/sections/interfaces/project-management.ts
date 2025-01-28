export interface ProjectManagement {
  id: number;
  projectName: string;
  projectLogo: string;
  totalEstimatedTime: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  status: TaskStatus;
  description: string;
  startDate: string;
  endDate: string;
  estimatedTime: string;
  evaluation: string;
}

export type TaskStatus =
  | 'TODO'
  | 'DOING'
  | 'EVALUATED'
  | 'COMPLETED'
  | 'CLOSED'
  | 'NONE';
