import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import Dashboard from './dashboard'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()

  const handleRe =()=>{
    router.push(`/dashboard`);
  }
  return (
    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vicky-profile-trans.png" />
      </Head>
{/* <Dashboard /> */}
<center><button onClick={handleRe} style={{fontSize:"30px", color:"black"}}>Go to dashboard</button></center>
    </>
  )
}
