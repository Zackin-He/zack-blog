import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers'; // 假设你的 Reducer 存在于 './reducers/myReducer' 文件中

const store = configureStore({
  reducer: reducers,
  // 如果需要其他 store 配置选项，可以在这里添加。
});
export default store;