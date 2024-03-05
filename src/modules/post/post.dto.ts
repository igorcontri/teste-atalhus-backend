export type PostDTO = {
  id?: number;
  title: string;
  content: string;
  author: string;
  date: Date | string; //ISO-8601 DateTime Ex:"2024-03-05T12:11:07Z"
};
