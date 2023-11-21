import React from 'react'
import Copyright from './Copyright';
import Links from './Links';
import Newsletter from './Newsletter';
import Payment from './Payment';
import Social from './Social';
import Styles from "./styles.module.scss"
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__container}>
        <Links/>
        <Social/>
        <Newsletter/>
        <Payment/>
        <Copyright/>
      </div>
    </footer>
  )
}

export default Footer;