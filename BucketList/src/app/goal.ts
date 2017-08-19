import { User } from './user';

export class Goal {
  _id: string;
  title: string;
  description: string;
  user: User[];
  done: boolean;
  createdAt: Date;
}
