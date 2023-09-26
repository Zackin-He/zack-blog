import { SET_THEME } from '../constant';

interface Action {
  type: string;
  data: string;
}

const initState = 'dark';

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_THEME:
      return data;
    default:
      return preState;
  }
}
