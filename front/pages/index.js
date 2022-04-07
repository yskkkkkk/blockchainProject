import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { UserContext } from '../lib/UserContext';
import Send from '../lib/Send';
import { useEffect, useContext } from 'react';

export default function Home() {

  const {userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    Send.get('/user/check')
    .then((data) => {
      if (data.data) {
        console.log(0, data.json());
      }
      console.log(1, data);
      console.log(2, data.data);
      if (data.data) {
        setUserInfo(data.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  })
  

  return (
    <div className={styles.container}>
      <Head>
        <title>우리두레</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {userInfo ? <h2>로그인 성공</h2> : <h2>로그인 실패</h2>}
      <h2>wow</h2>
    </div>
  )
}
