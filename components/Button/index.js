import React from 'react'
import Styles from "./styles.module.scss"
import {BiRightArrowAlt} from "react-icons/bi"
const Button = ({type,className,children}) => {
        const buttonClass = `${Styles.custom__button} ${Styles[className] || ''}`;
  return (
    <button type={type} className={buttonClass}>{children}
    <div className={Styles.svg__icon}>
        <BiRightArrowAlt/>
    </div>
    </button>
  )
}

export default Button