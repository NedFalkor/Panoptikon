export interface Comment {
    id?: number;
    username: string;
    text: string;
    date?: string;
    replies?: Comment[];
    numLikes?: number;
  }
