type Status = 'Won’t do' | 'Completed' | 'In Progress'

export interface Task {
  '_id': string
  'board-id': string
  'name': string;
  'description'?: string;
  'icon': number;
  'status'?: Status;
}
