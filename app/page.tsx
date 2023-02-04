import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Luke Wong</title>
        <meta name='description' content='' />
        <link rel="icon" href="../public/favicon.ico" />  
      </Head>

      <div></div>
    </main>
  )
}
