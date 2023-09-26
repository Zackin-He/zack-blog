// import { Navigate } from "react-router-dom";
import Home from "@/pages/Home/index";
import Say from "@/pages/Say/index";
import Guestbook from "@/pages/Guestbook/index";

import ArticleDetail from "@/features/article/ArticleDetail";

export default [
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/guestbook',
    element: <Guestbook/>,
  },
  {
    path:'/say',
    element: <Say/>,
  },
  {
    path: '/article_detail',
    element: <ArticleDetail/>
  }
]