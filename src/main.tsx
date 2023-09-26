import React from 'react'
import ReactDOM from 'react-dom/client'
// tailwindcss
import '@/styles/tailwind.css'
// 样式初始化
// import 'reset-css'
// 全局样式
// import '@/styles/index.scss'

import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import store from "@/store/index"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
)
