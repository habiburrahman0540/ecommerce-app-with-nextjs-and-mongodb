import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"
const Ad = () => {
  return (
    <Link href="/browse">
        <div className={Styles.banner}></div>
    </Link>
  )
}

export default Ad;