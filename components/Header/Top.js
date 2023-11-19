import React, { useState } from 'react'
import Styles from "./styles.module.scss"
import {MdSecurity} from "react-icons/md"
import {BsSuitHeart} from "react-icons/bs"
import Link from 'next/link'
import {RiAccountPinCircleLine,RiArrowDropDownFill} from "react-icons/ri"
import UserMenu from './UserMenu'
const Top = () => {
    const [loggedIn,setLoggedIn] = useState(true);
    const [visiable,setVisiable] = useState(false);
  return (
    <div className={Styles.top}>
        <div className={Styles.top__container}>
            <div></div>
            <ul className={Styles.top__list}>
                <li className={Styles.top__list__item}>
                    <img src='https://www.seekpng.com/png/full/97-977015_flag-of-usa-emoji-usa-flag-png.png' alt=''/>
                    <span>USA/USD</span>
                </li>
                <li className={Styles.top__list__item}>
                    <MdSecurity/>
                    <span>Buyer Protection</span>
                </li>
                <li className={Styles.top__list__item}>
                    <span>Customer Service</span>
                </li>
                <li className={Styles.top__list__item}>
                    <span>Help</span>
                </li>
                <li className={Styles.top__list__item}>
                    <BsSuitHeart/>
                    <Link href="/profile/whishlist"> <span>Whishlist</span></Link>
                   
                </li>
                <li className={Styles.top__list__item} onMouseOver={()=>setVisiable(true)} onMouseLeave={()=>setVisiable(false)}>
                {
                loggedIn ?     
                    <li className={Styles.top__list__item}>
                        <div className={Styles.flex}>
                           <img src='https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image-378x279.png' alt=''/>
                            <span>Habibur</span>
                            <RiArrowDropDownFill/>
                        </div>
                    </li> 
                    : 
                    <li className={Styles.top__list__item}>
                        <div className={Styles.flex}>
                            <RiAccountPinCircleLine/>
                            <span>Account</span>
                            <RiArrowDropDownFill/>
                        </div>
                    </li> 
                }
                {
                    visiable ? <UserMenu loggedIn={loggedIn}/> :""
                }
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Top