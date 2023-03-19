import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Input from '@design-system/components/inputs/input-control'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <main className='w-screen'>
        <Input />
        
      </main>
    </>
  )
}
