import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'
import Styles from "../styles/Signin.module.scss"
import {BiLeftArrowAlt} from "react-icons/bi"
import Link from 'next/link'
import {Formik,Form} from "formik"
import LoginInput from '@/components/Inputs/LoginInput'
import * as Yup from "yup"
import Button from '@/components/Button'
import { getProviders, signIn } from 'next-auth/react'
const initialvalues={
  login_email: "",
  login_password: "",
  signup_name:"",
  signup_email:"",
  signup_password:"",
  confirm_password:"",
}
const Signin = ({providers}) => {
  const [user,setUser]=useState(initialvalues);
  const {login_email,
    login_password,   
    signup_name,
    signup_email,
    signup_password,
    confirm_password} = user;
    console.log("user",user);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }
  const loginValidation = Yup.object({
    login_email:Yup.string().required("Email is required.").email("Please enter valid email"),
    login_password:Yup.string().required("Password is required.")
  });
  const signupValidation = Yup.object({
    signup_name:Yup.string().required("What's your name?").min(2,"Name must be 2 to 16 characters.").max(16,"Name must be 2 to 16 characters.").matches(/^[aA-zZ]/,"Number and special characters not allowed."),
    signup_email:Yup.string().required("Email is required.").email("Please enter valid email"),
    signup_password:Yup.string().required("Password is required.").min(8,"Password must be 8 to 16 characters.").max(16,"Name must be 8 to 16 characters."),
    confirm_password:Yup.string().required("Confirm Password is required.").oneOf([Yup.ref("signup_password")],"Password and confirm password does not match"),
  });
  return (
    <>
    <Header/>
    <div className={Styles.login}>
      <div className={Styles.login__container}>
        <div className={Styles.login__header}>
          <div className={Styles.back__svg}>
            <BiLeftArrowAlt/>
          </div>
          <span>
            We'd be happay to join us! <Link href="/">Go Store</Link>
          </span>
        </div>
        <div className={Styles.login__form}>
            <h1>Sign in</h1>
            <p>Get access to one of the best eshopping service in the world.</p>
            <Formik 
            enableReinitialize
            initialValues={{
              login_email,
              login_password
            }}
            validationSchema={loginValidation}
            >
              {(form)=>
                  (<Form>
                    <LoginInput name="login_email" icon="email" type="text" placeholder="Enter your email address" onChange={handleChange} />
                    <LoginInput name="login_password" icon="password" type="password" placeholder="Enter your password here" onChange={handleChange} />
                    <Button type="submit" className="primary">
                      Signin
                    </Button>
                  </Form>)
              }
            </Formik>
            <div className={Styles.login__socials}>
              <span className={Styles.or}>Or continue with</span>
              {providers.map((provider)=>(
                <div key={provider.name}>
                    <button className={Styles.social__btn} onClick={()=>signIn(provider.id)}>
                      <img className={Styles.button__image} src={`../../images/icons/${provider.name}.png`}/>
                      Signin with {provider.name}</button>
                </div>
              ))}
            </div>
        </div>
      </div>
      <div className={Styles.login__container}>
        <div className={Styles.login__form}>
            <h1>Signup</h1>
            <p>Get access to one of the best eshopping service in the world.</p>
            <Formik 
            enableReinitialize
            initialValues={{
              signup_name,
              signup_email,
              signup_password,
              confirm_password,
            }}
            validationSchema={signupValidation}
            >
              {(form)=>
                  (<Form>
                    <LoginInput name="signup_name" icon="user" type="text" placeholder="Enter your Full Name" onChange={handleChange} />
                    <LoginInput name="signup_email" icon="email" type="text" placeholder="Enter your email address" onChange={handleChange} />
                    <LoginInput name="signup_password" icon="password" type="password" placeholder="Enter your password here" onChange={handleChange} />
                    <LoginInput name="confirm_password" icon="password" type="password" placeholder="Enter your re-type password here" onChange={handleChange} />
                    <Button type="submit" className="primary">
                      Sign Up
                    </Button>
                  </Form>)
              }
            </Formik>
     
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signin;

export const getServerSideProps =async (context)=>{
const providers =Object.values(await getProviders());
return {
  props:{providers}
};
}