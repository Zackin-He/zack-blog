import React, { useState } from "react";
import style from "./index.module.scss";
// import { Affix, Button } from 'antd';
import Aside from "@Layouts/Aside";
import Section from "@Layouts/Section";
const Home: React.FC = () => {
  const [slogan] = useState<string>('常记溪亭日暮，沉醉不知归路');
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className={style.slogan}>
          {slogan.split('').map((letter)=>{
            return <h2>{letter}</h2>
          })}
        </div>
      </div>
      <div className={style.center}>
        <div className={style.body}>
          <Section />
          <Aside />
        </div>
      </div>
    </div>
  );
}
export default Home;