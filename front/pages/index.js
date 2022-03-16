import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>우리두레</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>home page</h2>

    </div>
  )
}
