import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Temporary from "../component/temporary";

import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>SxcIntersummit 2021</title>
      <link rel="icon" href="/icon.svg" />
    </Head>
    <Navbar />
    <Temporary/>
    <Footer />
    </>
  )
}
