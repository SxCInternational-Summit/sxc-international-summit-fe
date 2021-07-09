import {
    Box
  } from "@chakra-ui/react";

import Navbar from "../../component/navbar"

import Jumbotron from "../../component/jumbotron";

import styles from "../../styles/landing.module.scss"
import Partner from "../../component/partner";

const LandingPage = () => {
    return(
        <Box className={styles.backgroundImage}>
            <Navbar />
            <Jumbotron />
            <Partner />
            
        </Box>
    )
}

export default LandingPage