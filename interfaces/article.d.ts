export interface IArticleBase {
  id: number;
  catalogName: string;
  title: string;
  content: string;
  introduction?: string;
  time: string;
  viewCount: number;
}

export interface IArticleList extends IArticleBase {
  list: Array<IArticleBase>;
}
