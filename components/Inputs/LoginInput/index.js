import React from 'react'
import Styles from "./styles.module.scss"
import {BiUser} from "react-icons/bi"
import {SiMinutemailer} from "react-icons/si"
import {IoKeyOutline} from "react-icons/io5"
import { ErrorMessage, useField } from 'formik'
const LoginInput = ({icon,placeholder,...props}) => {
  const [field,meta] = useField(props);
  return (
    <div className={`${Styles.input} ${meta.touched && meta.error ? Styles.error : ""}`}>
        {icon == "user" ? (<BiUser/>): icon=="email" ? (<SiMinutemailer/>): icon=="password"?(<IoKeyOutline/>) :("")}
        <input type={field.type} name={field.name} placeholder={placeholder} {...field} {...props}/>
        {meta.touched && meta.error && <div className={Styles.error__popp}>
          <span></span>
          <ErrorMessage name={field.name}/>
          </div>}
    </div>
  )
}

export default LoginInput