// 文章类型
export interface IArticle {
  title: string,
  content: string,
  tags: Array<string>,
  created: string,
  cover_image?: string
}