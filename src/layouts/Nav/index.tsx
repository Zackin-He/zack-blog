import styles from "./index.module.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { setTheme } from "@/store/actions";
import { storeState } from "@/store/interface";
import { connect } from 'react-redux';
import classNames from "classnames";
import { useEventListener } from "ahooks";
import ButtonBase from "@/components/ButtonBase";
import { Menus, MenusType } from "./config"


interface Props {
  theme: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setTheme: Function;
}
const Nav: React.FC<Props> = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const [ menus ] = useState<MenusType>(Menus);
  const [navShow, setNavShow] = useState<boolean>(true);


  useEventListener(
    'mousewheel',
    (e: Event) => {
      const wheelEvent = e as WheelEvent;
      setNavShow(wheelEvent.deltaY < 0 ? true : false);
    }
  )
  // // 切换主题
  useEffect(() => {
    const rootElement: HTMLElement | null = document.documentElement;
    if (rootElement) {
      // 切换类名
      rootElement.className = `theme-${theme}`;
    }
  }, [theme]);

  const tottleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const changeRoute = ( path: string ) => {
    navigate(path);
  }
  return (
    <div className={classNames(styles.nav, navShow ? '' : styles.hidden)}>
      <div className={styles.nav_content}>
        <div className={styles.nav_left}>
          <ButtonBase className="w-16" onClick={()=>{changeRoute('/')}}>
            <HomeOutlined className="text-2xl line" />
          </ButtonBase>
        </div>
        <div className={styles.nav_center}>
          { menus.map((menu):JSX.Element =>  {
            return (
              <ButtonBase key={menu.to} onClick={()=>{changeRoute(menu.to)}}>
                <span className="text-xl font-bold line">{menu.name}</span>
              </ButtonBase>
            )
          })}
        </div>
        <div className={styles.nav_right}>
            <ButtonBase className="w-16" onClick={tottleTheme}>
              <HomeOutlined className="text-2xl line" />
            </ButtonBase>
        </div>
      </div>
    </div>
  )
};
const NewNav = connect(
  (state: storeState) => ({
    theme: state.theme
  }),
  { setTheme }
)(Nav);

export default NewNav;
