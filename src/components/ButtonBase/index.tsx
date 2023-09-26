import React, { ReactNode, HTMLProps } from 'react'
import _style from "./index.module.scss"
import classNames from "classnames"

interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode,
  type?: 'primary' | 'default' | 'dark',
}

const ButtonBase:React.FC<Props> = (props) => {
  const {
    type = 'default',
    children,
    className,
    ...restProps
  } = props;
  return (
    <div
      className={classNames(_style.btn, _style[type], className)}
      {...restProps}
    >
      <div className="w-full h-full flex justify-center items-center">
        { children }
      </div>
    </div>
  )
}
export default ButtonBase