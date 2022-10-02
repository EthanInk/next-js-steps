import styles from './breadcrumb.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Breadcrumb() {
    const url = useRouter().pathname.split("/");
    const crumbs = [{text:"HOME", link:"/"}];
    url.forEach((currentValue, index)=>{
        if(index===0)return;
        crumbs.push(
            {
                text: currentValue.toUpperCase(),
                link: (`${crumbs[(index-1)].link}${currentValue}/`)
            })
    })

    return (
      <>
        <div className={styles.breadcrumb}>
            {crumbs.map(({text, link})=>(
                <Link href={link} key={link}><a>/ {text} </a></Link>
                ))}
        </div>
      </>
    )
  }