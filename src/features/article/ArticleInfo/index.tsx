import React from 'react';
import { IArticle } from "./../type"
import ButtonBase from '@/components/ButtonBase';

interface IProps {
  article: IArticle
}
const Article:React.FC<IProps> = (props) => {
  const { article } = props;
  // const [cards] = useState<Array<number>>([1,2,3,4,5]);
  return (
    <div>
      <div className="mt-2 h-40 flex gap-2">
        <div className="w-40 h-40 rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 ease-in-out duration-300"
            src={`https://picsum.photos/200/300?${Math.random()}`}
            alt=""
          />
        </div>
        <div className="flex-1 h-40 overflow-hidden">
          <h2 className="text-center text-3xl font-bold">{article.title}</h2>
          <div className="p-2 text-xl">
            src属性: 指定图片的url src的值可以时本地计算机存储的图片地址,也可以是网络上外网上的图片
            如果src的值不正确,浏览器就无法正确显示图片,是现实一张裂开图2.alt属性: 指定图像无法显示时的替换文件
            src属性: 指定图片的url src的值可以时本地计算机存储的图片地址,也可以是网络上外网上的图片
             如果src的值不正确,浏览器就无法正确显示图片,是现实一张裂开图2.alt属性: 指定图像无法显示时的替换文件
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <ButtonBase type="primary"><span>{article.created}</span></ButtonBase>
        </div>
        <div className="flex gap-2">
          {article.tags.map(tag => {
            return <ButtonBase type="primary">{tag}</ButtonBase>
          })}
        </div>
      </div>
    </div>
  )
}
export default Article