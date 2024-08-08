export interface NewsItem {
    id: number;
    title: string;
    description: string;
    img?: string;
    avatar?: string;
    source?: string;
    time?: string;
    intro?: string;
    tags?: string[];
    attention?: boolean;
    islike?: boolean;
    like_num?: number;
  }