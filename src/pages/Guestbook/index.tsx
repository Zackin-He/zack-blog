import React, { useState } from 'react'
import MainContainer from '@/layouts/MainContainer';
import Input from "@Components/Input/index"

interface IWebInfo {
  name: string,
  link: string,
  avatar: string,
  desc: string,
}

const Guestbook:React.FC = () => {
  const [webInfo] = useState<IWebInfo>({
    name: '何泽铤',
    link: 'https://www.baidu.com',
    avatar: 'https://img.lzxjack.top:99/202203302154224.webp',
    desc: '一只平凡的鸟罢了。'
  })
  return (
    <MainContainer title="留言板">
      {/* 打招呼语 */}
      <div>
        <div className="text-center text-3xl font-bold">
          晚上好，我叫何泽铤<br />
          欢迎来到我的个人博客！<br />
          可以在这里留言、吐槽～
        </div>
        <div>
          <h1 className="font-bold text-[28px] text-[#a7a7a7]">本站链接</h1>
          <div className="text-[22px]">
            <div>name: {webInfo.name}</div>
            <div>link: {webInfo.link}</div>
            <div>avatar: {webInfo.avatar}</div>
            <div>desc: {webInfo.desc}</div>
          </div>
        </div>
      </div>
      {/* 分割线 */}
      <div
        style={{backgroundImage:'linear-gradient(90deg, #868686 50%, transparent 0)'}}
        className="bg-repeat-x	bg-[length:28px_3px] h-1 my-6"
      />
      {/* 留言 */}
      <div className="flex gap-6 mb-8">
        <div className="w-20 h-20 overflow-hidden rounded-lg">
          <img src={`https://picsum.photos/200/300?${Math.random()}`} alt="" className="w-full" />
        </div>
        <div className="flex-1 rounded-xl">
          <div className="mb-3 text-xl">
            <Input width={160} addonBefore="昵称" placeholder="QQ号" />
            <Input width={240} addonBefore="邮箱" placeholder="必填" />
            <Input width={240} addonBefore="网址" placeholder="选填" />
          </div>
          <div>
            <textarea
              rows={4}
              className="resize-none text-lg text-primary bg-themeColor1 focus:outline-none px-6 py-3 rounded-2xl w-full"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div>我是内容</div>
    </MainContainer>
  )
}

export default Guestbook;
