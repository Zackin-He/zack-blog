import React, { useState } from 'react'
import Button from '@/components/ButtonBase';
import style from "./index.module.scss";
const Footer:React.FC = () => {
  const [technologyStack] = useState<Array<string>>(['React','React Router','Redux','Vite','AntD','Tailwind Css','ahooks','CloudBase']);
  return (
    <div className={style.footer}>
      <span>个人博客系统「源代码」</span>
      <span>浙ICP备2020043821号-1</span>
      <div className="flex gap-2">
        { technologyStack.map(technology => {
          return <Button type="dark" style={{padding: '2px 8px'}}>{technology}</Button>
        }) }
      </div>
    </div>
  )
}

export default Footer;
