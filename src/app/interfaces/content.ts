import { User } from "./user";

export interface Content {
  id: number;
  date: Date;
  likes: number;
  dislikes: number;
  author: User;
  comments: Comment[];
}