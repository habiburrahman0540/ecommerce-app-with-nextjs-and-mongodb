import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"
const UserMenu = ({loggedIn}) => {
  return (
    <div className={Styles.menu}>
        <h1>Welcome to Shoppy !</h1>
        {loggedIn ? 
            <div className={Styles.flex}>
                <img className={Styles.menu__img} src='https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image-378x279.png' alt=''/>
                <div className={Styles.col}>
                    <span>Welcome back,</span>
                    <h3>Habib</h3>
                   <span>Sign out</span>
                    
                </div>
            </div> 
                : 
            <div className={Styles.flex}>
                    <button className={Styles.btn_primary}>Register</button>
                    <button className={Styles.btn_outline}>Signin</button>
            </div>
        }
        <ul>
            <li>
                <Link href="/profile">Account</Link>
            </li>
            <li>
                <Link href="/profile/orders">My Orders</Link>
            </li>
            <li>
                <Link href="/profile/messages">Message Center</Link>
            </li>
            <li>
                <Link href="/profile/address">Address</Link>
            </li>
            <li>
                <Link href="/profile/whishlist">Whishlist</Link>
            </li>
        </ul>
    </div>
  )
}

export default UserMenu