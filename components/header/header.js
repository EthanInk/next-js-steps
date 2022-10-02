import Styles from './header.module.scss'
import Link from 'next/link'

export default function Header() {
    const isLoggedIn = false;

    return (
      <>
        <header className={Styles.header}>
            <Link href="/"><a className={Styles.title}>Conductor</a></Link>
            { isLoggedIn ?
                (<Link href="/"><a className={Styles.btn}>Logout</a></Link>) : 
                (<Link href="/"><a className={Styles.btn}>Login</a></Link>)
            }
        </header>
        <nav className={Styles.nav}>
            <Link href="/train"><a>All trains</a></Link>
        </nav>
      </>
    )
  }