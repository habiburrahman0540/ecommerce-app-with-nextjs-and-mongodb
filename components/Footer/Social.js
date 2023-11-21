import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter,BsInstagram,BsYoutube,BsPinterest,BsSnapchat} from "react-icons/bs"
const Social = () => {
  return (
    <div className={Styles.footer__social}>
        <section>
            <h3>Stay Connected</h3>
            <ul className={Styles.list}>
                <li className={Styles.item}>
                    <Link href="" target="_blank" className={Styles.item_link}>
                        <FaFacebookF/>
                    </Link>
                </li>
                <li className={Styles.item}>
                    <Link href="" target="_blank" className={Styles.item_link}>
                        <BsTwitter/>
                    </Link>
                </li>
                <li className={Styles.item}>
                    <Link href="" target="_blank" className={Styles.item_link}>
                        <BsInstagram/>
                    </Link>
                </li>
                <li className={Styles.item}>
                    <Link href="" target="_blank" className={Styles.item_link}>
                        <BsYoutube/>
                    </Link>
                </li>
                <li className={Styles.item}>
                    <Link href="" target="_blank" className={Styles.item_link}>
                        <BsPinterest/>
                    </Link>
                </li>
                <li className={Styles.item}>
                    <Link href="" target="_blank" className={Styles.item_link}>
                        <BsSnapchat/>
                    </Link>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Social