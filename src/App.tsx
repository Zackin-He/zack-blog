import { useEffect } from "react";
import routes from "@/router/index"
import { useRoutes, useLocation } from "react-router-dom"
import Nav from "@/layouts/Nav/index"
import Footer from "@/layouts/Footer/index"

import BackToTop from "@Components/BackToTop/index";
import classNames from "classnames";
// import CacheScrollPosition from "@Features/cacheScrollPosition/index"


const App:React.FC = () => {
  const outlet = useRoutes(routes);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // 重置滚动条位置到顶部
  }, [pathname]);
  return (
    <div className={classNames('text-primary')}>
      <Nav />
      { outlet }
      <Footer />
      <BackToTop />
      {/* <CacheScrollPosition /> */}
    </div>
  )
}

export default App;