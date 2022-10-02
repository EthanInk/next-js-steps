import Head from 'next/head'
import Header from '../header/header'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </>
  )
}