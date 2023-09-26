export interface IMenu {
  name: string
  to: string
  children?: MenusType,
}

export type MenusType = Array<IMenu>;

export const Menus: MenusType = [
  { name: '文章', to: '/article'},
  { name: '留言', to: '/guestbook'},
  { name: '说说', to: '/say' },
  { name: '友链', to: '/link' },
  { name: '作品', to: '/show' },
  { name: '建站', to: '/log' },
  { name: '关于', to: '/about' }
];