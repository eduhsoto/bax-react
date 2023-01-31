import { MENU_SELECTED } from './actions';

const initialState = {
  menu: 1,
};

export default function useReduc(state = initialState, action) {
  if (action.type === MENU_SELECTED) {
    return {
      ...state,
      menu: action.payload,
    };
  }
  return state;
}
