import Link from 'next/link';
import React from 'react'
import Styles from "./styles.module.scss"
const Links = () => {
  return (
    <div className={Styles.footer__links}>
        {links.map((link,index)=>(
            <ul className={Styles.list}>
                {index === 0 ? (<img src='../../../logo.png'/>):(<b>{link.heading}</b>)}
                    {link.links.map(link=>(
                        <li className={Styles.item}>
                            <Link href={link.link} className={Styles.link}> {link.name}</Link>
                            </li>
                    ))}
            </ul>
        ))}
    </div>
  )
}

export default Links;
const links = [
    {
      heading: "SHOPPAY",
      links: [
        {
          name: "About us",
          link: "",
        },
        {
          name: "Contact us",
          link: "",
        },
        {
          name: "Social Responsibility",
          link: "",
        },
        {
          name: "",
          link: "",
        },
      ],
    },
    {
      heading: "HELP & SUPPORT",
      links: [
        {
          name: "Shipping Info",
          link: "",
        },
        {
          name: "Returns",
          link: "",
        },
        {
          name: "How To Order",
          link: "",
        },
        {
          name: "How To Track",
          link: "",
        },
        {
          name: "Size Guide",
          link: "",
        },
      ],
    },
    {
      heading: "Customer service",
      links: [
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
      ],
    },
  ];