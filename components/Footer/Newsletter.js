import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"

const Newsletter = () => {
  return (
    <div className={Styles.newsletter}>
        <h3 className={Styles.heading}>Signup for our Newsletter</h3>
        <div className={Styles.flex}>
            <input className={Styles.input} type="text" placeholder='Your email address'/>
            <button type="button" className={Styles.btn_primary}>Subscribe</button>
        </div>
        <p className={Styles.des}>
            By clicking subscribe button , you are agree to
            <Link href="" className={Styles.link}> Our Privacy & Cookie policy</Link>
        </p>
    </div>
  )
}

export default Newsletter