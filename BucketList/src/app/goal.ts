import { User } from './user';

export class Goal {
  _id: string;
  title: string;
  description: string;
  users: User[];
  createdBy: User;
  done: boolean;
  createdAt: Date;
}
