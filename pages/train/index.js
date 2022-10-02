import Head from "next/head";
import Breadcrumb from '../../components/breadcrumbs/breadcrumb'
import styles from '../../styles/Home.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Trains!</title>
            </Head>
            <Breadcrumb></Breadcrumb>
            
        </>
    )
}