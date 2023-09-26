import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
const CacheScrollPosition: React.FC = () => {
  const [ positionMap, setPositionMap ] = useState<Map<string,number>>(new Map());
  const location = useLocation();
  useEffect(() => {
    // 进入当前路由时执行的逻辑
    Promise.resolve().then(()=>{
      window.scrollTo(0, positionMap.get(location.pathname) || 0);
    })
    const save = () => {
      positionMap.set(location.pathname, window.scrollY)
      setPositionMap(positionMap)
    }
    window.addEventListener('scroll', save)
    // 离开当前路由时执行的逻辑
    return () => window.removeEventListener('scroll', save)
  }, [location, positionMap]);
  return null;
}
export default CacheScrollPosition;