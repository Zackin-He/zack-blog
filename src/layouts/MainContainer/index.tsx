import React from 'react'
import Card from '@/components/Card';
import style from "./index.module.scss";
// import ButtonBase from '@/components/ButtonBase'

interface IProps {
  title: string,
  children?: React.ReactNode
}

const MainContainer:React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="px-48">
      <div className="h-[440px] flex gap-4 justify-center flex-wrap items-center">
        <div className={style.slogan}>
          {title.split('').map((letter)=>{
            return <h2>{letter}</h2>
          })}
        </div>
      </div>
      <Card scale={false} style={{padding: '40px'}}>
        { children }
      </Card>
    </div>
  )
}

export default MainContainer;
