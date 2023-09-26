import classNames from 'classnames';
import React, {HTMLProps} from 'react'

interface Iprops extends HTMLProps<HTMLInputElement> {
  width?: number,
  addonBefore?: string,

}
const Input: React.FC<Iprops> = (props) => {
  const {
    width = 160,
    addonBefore,
    ...restProps
  } = props;
  return (
    <div className="inline-block mr-3">
      <div className="flex flex-nowrap h-10">
        {addonBefore &&
          <div className="bg-themeColor2 align-middle leading-10 px-3 rounded-s-full">{addonBefore}</div>
        }

        <input
          type="text"
          className={classNames("rounded-e-full focus:outline-none bg-themeColor1 px-3 text-center text-base" ,!addonBefore && "rounded-s-full")}
          style={{width:`${width}px`}}
          {...restProps}
        />
      </div>
    </div>
  )
}
export default Input;