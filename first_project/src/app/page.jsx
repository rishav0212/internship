'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <h1>Linking and Navigation</h1>
      <Link href="/login">Go to Login page</Link>
      <Link href="/aboutus">Go to About Us page</Link>
      <button onClick={()=>router.push("/login")}>Login Page</button>
    </div>
  )
} 
