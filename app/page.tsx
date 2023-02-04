import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luke Wong</title>
        <meta name='description' content='my portfolio website' />
        <link rel="icon" href="../public/favicon.ico" />  
      </Head>

      <main>
        <section className='bg-blue-700 h-screen '>
          <h1>Hello world</h1>
        </section>
      </main>
    </div>
  )
}
