export const MENU_SELECTED = 'MENU_SELECTED';

export function setNewMenu(menu) {
  return {
    type: MENU_SELECTED,
    payload: menu,
  };
}
