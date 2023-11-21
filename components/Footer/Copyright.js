import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.scss"
import {IoLocationSharp} from "react-icons/io5"
const Copyright = () => {
  return (
    <div className={Styles.footer__copyright}>
        <section>@2023 All right reserved.</section>
        <section>
            <ul>
                {data.map(link=>(
                    <li>
                        <Link href={link.link}>{link.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href="">
                        <IoLocationSharp/>
                    </Link>
                </li>
              
            </ul>
        </section>
    </div>
  )
}

export default Copyright;
const data = [
    {
      name: "Customer service",
      link: "",
    },
    {
      name: "Terms and Conditions",
      link: "",
    },
    {
      name: "Consumers (Transactions)",
      link: "",
    },
    {
      name: "Take our feedback survey",
      link: "",
    },
  ];