import { Goal } from './goal';

export class User {
  _id: string;
  username: string;
  email: string;
  password: string;
  goals: Goal[];
}
