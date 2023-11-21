import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"
import {RiSearch2Line} from "react-icons/ri"
import {RiLuggageCartLine} from "react-icons/ri"
const Main = () => {
  return (
    <div className={Styles.main}>
        <div className={Styles.main__container}>
            <Link href="">
                <span className={Styles.logo}>
                    <img src='../../logo.png' alt=''/>
                </span>
            </Link>
           <div className={Styles.search}>
                <input type="text" placeholder='Search' />
                <div className={Styles.search__icon}>
                    <RiSearch2Line/>
                </div>
           </div>
           <Link href="" className={Styles.cart}>
           <RiLuggageCartLine/>
                <span >

0
                </span>
           </Link>
        </div>

    </div>
  )
}

export default Main