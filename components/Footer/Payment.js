import React from 'react'
import Styles from "./styles.module.scss"
const Payment = () => {
  return (
    <div className={Styles.footer__payment}>
        <h3>We accept</h3>
        <div className={Styles.footer__flexwrap}>
            <img src="../../../images/visa.png" alt=""/>
            <img src="../../../images/mastercard.png" alt=""/>
            <img src="../../../images/paypal.webp" alt=""/>
        </div>
    </div>
  )
}

export default Payment