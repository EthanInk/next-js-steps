import Head from "next/head";
import Breadcrumb from '../../components/breadcrumbs/breadcrumb'

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