import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"
import {signIn,signOut} from 'next-auth/react'
const UserMenu = ({session}) => {
    
  return (
    <div className={Styles.menu}>
        <h1>Welcome to Shoppy !</h1>
        {session ? 
            <div className={Styles.flex}>
                <img className={Styles.menu__img} src={session.user.image} alt=''/>
                <div className={Styles.col}>
                    <span>Welcome back,</span>
                    <h3>{session.user.name}</h3>
                   <span onClick={()=>signOut()}>Sign out</span>
                    
                </div>
            </div> 
                : 
            <div className={Styles.flex}>
                    <button className={Styles.btn_primary}>Register</button>
                    <button className={Styles.btn_outline} onClick={()=>signIn()}>Signin</button>
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