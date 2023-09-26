import React, { useEffect, useState } from 'react'
import Button from "@Components/ButtonBase/index"
import { ToTopOutlined } from "@ant-design/icons";
const BackToTop:React.FC = () => {
  const [visible, setVisible] = useState(false);
  // 添加滚动事件监听器
  useEffect(() => {
    const handleScroll = () => {
      // 获取当前滚动位置
      const scrollY = window.scrollY;
      // 设置滚动位置的阈值，当滚动位置大于等于阈值时显示按钮
      const scrollThreshold = 400;
      // 根据滚动位置更新状态
      setVisible(scrollY >= scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    // 在组件卸载时移除滚动事件监听器，防止内存泄漏
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 回到顶部的点击事件处理函数
  const scrollToTop = () => {
    // 创建一个新的鼠标滚轮事件
    const wheelEvent = new WheelEvent('mousewheel', {
      deltaX: 0, // 设置水平滚动量
      deltaY: -1, // 设置垂直滚动量，向上滚动，显示Nav组件
    });
    // 触发鼠标滚轮事件
    window.dispatchEvent(wheelEvent);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滚动
    });
  };

  return (
    <div className="fixed bottom-10 right-20 z-10">
      { visible && (
        <Button onClick={scrollToTop} type="primary" className="w-12 h-12 transition-all	duration-300">
          <ToTopOutlined className="text-2xl font-bold" />
        </Button>
      ) }
    </div>
  )
}

export default BackToTop;