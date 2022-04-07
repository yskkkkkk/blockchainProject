import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { UserContext } from '../lib/UserContext';
import Send from '../lib/Send';
import { useEffect, useContext } from 'react';

export default function Home() {

  const {userSeq, setUserSeq} = useContext(UserContext);
  const {userInfo, setUserInfo} = useContext(UserContext);

  const a = (e) => {
    e.preventDefault();
    console.log('userInfo:',userInfo);
    console.log('user nickname:', userInfo.userNickname);
    console.log('user seq:', userSeq);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>우리두레</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <button onClick={a} >show userInfo (check console log)</button>
    </div>
  )
}
