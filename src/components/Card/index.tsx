import React from 'react'
import classNames from 'classnames';
import style from "./index.module.scss"

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode,
  scale?: boolean,
}

const Card:React.FC<Props> = (props) => {
  const {
    scale = true,
    children,
    className,
    ...restProps
  } = props;
  return (
    <div
      className={classNames(style.card, scale ? style.scale : '', className)}
      {...restProps}
    >
      { children }
    </div>
  )
}
export default Card