import {
    Box
  } from "@chakra-ui/react";

import Navbar from "../component/navbar"
import Jumbotron from "../component/jumbotron";
import Partner from "../component/partner";
import { useState } from "react";
import Footer from "../component/footer";
import EventTab from "../component/eventTab";

import { NextSeo } from "next-seo";

const LandingPage = () => {
    return(
        <>
            <NextSeo 
                title="SxCInternational Summit 2021"
                description="Landing page for SxcInternationalSummit 2021"
            />
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