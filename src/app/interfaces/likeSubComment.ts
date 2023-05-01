import { SubComment } from "./sub-comment";

export interface LikeSubComment {
    id: number;
    date: Date;
    subcomment: SubComment;
    username: string;
  }
