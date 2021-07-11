import { useMediaQuery } from "@chakra-ui/react"
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Temporary from "../component/temporary";

import Head from 'next/head';

export default function Home() {
  const [isDesktop] = useMediaQuery("(min-width: 48em)")
  return (
    <>
    <Head>
      <title>SxcIntersummit 2021</title>
      <link rel="icon" href="/icon.svg" />
    </Head>
    <Navbar isDesktop={isDesktop} />
    <Temporary isDesktop={isDesktop} />
    <Footer isDesktop={isDesktop} />
    </>
  )
}
