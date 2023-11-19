import React from 'react'
import Ad from './ad';
import Styles from "./styles.module.scss"
import Top from './Top';
const Header = () => {
  return (
    <header className={Styles.header}>
      <Ad/>
      <Top/>
    </header>
  )
}

export default Header;