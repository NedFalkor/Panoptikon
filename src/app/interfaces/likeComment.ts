import { User } from "./user";

export interface LikeComment {
    id?: number;
    date?: string;
    numLikes?: number;
    comment: Comment;
    user: User;
  }
