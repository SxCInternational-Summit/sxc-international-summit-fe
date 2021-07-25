import {
    Box
  } from "@chakra-ui/react";

import Navbar from "../../component/navbar"
import Jumbotron from "../../component/jumbotron";
import Partner from "../../component/partner";
import { useState } from "react";
import Footer from "../../component/footer";
import EventTab from "../../component/eventTab";

const LandingPage = () => {
    const [activeTabe, setactiveTabe] = useState("preEvent")
    return(
        <>
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