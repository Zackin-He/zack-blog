import React, { useState } from 'react'
import Card from '@/components/Card'
import { useNavigate } from "react-router-dom"
import { IArticle } from "@Features/article/type"
import ArticleInfo from '@Features/article/ArticleInfo'

const Section:React.FC = () => {
  const navigate = useNavigate();
  const [cards] = useState<Array<IArticle>>([
    { title:'标题1', content:'我是文章内容1', tags:['node'], created: '2022' },
    { title:'标题2', content:'我是文章内容2', tags:['vue','react'], created: '2012' },
    { title:'标题3', content:'我是文章内容3', tags:['react'], created: '2024' },
    { title:'标题4', content:'我是文章内容4', tags:['node'], created: '2023' },
    { title:'标题5', content:'我是文章内容5', tags:['node'], created: '2022' },
    { title:'标题1', content:'我是文章内容1', tags:['node'], created: '2022' },
    { title:'标题2', content:'我是文章内容2', tags:['vue','react'], created: '2012' },
    { title:'标题3', content:'我是文章内容3', tags:['react'], created: '2024' },
    { title:'标题4', content:'我是文章内容4', tags:['node'], created: '2023' },
    { title:'标题5', content:'我是文章内容5', tags:['node'], created: '2022' },
  ]);
  return (
    <div className="flex-1">
      { cards.map((article)=>{
        return (
          <Card onClick={()=>{navigate('/article_detail')}}>
            <ArticleInfo article={article} />
          </Card>
        );
      }) }
    </div>
  )
}
export default Section