import {
    Box
  } from "@chakra-ui/react";

import Navbar from "../../component/navbar"
import Jumbotron from "../../component/jumbotron";
import Partner from "../../component/partner";
import { useState } from "react";
import Footer from "../../component/footer";
import EventTab from "../../component/eventTab";

import Head from 'next/head'

const LandingPage = () => {
    const [activeTabe, setactiveTabe] = useState("preEvent")
    return(
        <>
            <Head>
                <title>SxCIntersummit 2021</title>
            </Head>
            <Box bgColor="black">
                <Navbar />
                <Jumbotron />
                <Partner />
                <EventTab />
                <Footer />
            </Box>
            
        </>
    )
}

export default LandingPage