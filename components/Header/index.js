import React from 'react'
import Ad from './ad';
import Main from './Main';
import Styles from "./styles.module.scss"
import Top from './Top';
const Header = () => {
  return (
    <header className={Styles.header}>
      <Ad/>
      <Top/>
      <Main/>
    </header>
  )
}

export default Header;