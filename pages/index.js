

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useSession,signIn,signOut} from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data:session} = useSession();
  console.log("session",session);
  return (
    <>
<Header/>
<Footer/>
   
    </>
  )
}
