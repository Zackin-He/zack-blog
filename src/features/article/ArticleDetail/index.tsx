import React from 'react'
import Card from '@/components/Card';
import ButtonBase from '@/components/ButtonBase'
import Content from "./Content/index"
import article from './content';

const ArticleDetail:React.FC = () => {
  return (
    <div className="px-48">
      <div className="h-[440px] flex gap-4 justify-center flex-wrap items-start flex-col">
        <div className="text-6xl font-bold">Angular 学习笔记（Http、动画)</div>
        <div>
          <ButtonBase type="dark" className="text-xl">Angular 学习笔记</ButtonBase>
          <ButtonBase type="dark" className="text-xl ml-4">2023-05-11 11:29:42</ButtonBase>
        </div>
      </div>
      <Card scale={false} style={{padding: '40px'}}>
        <Content content={article.content} />
      </Card>
    </div>
  )
}

export default ArticleDetail;
