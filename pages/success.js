import {
    Box,
    Center,
    Text
  } from "@chakra-ui/react";

import Navbar from "../component/navbar"
import styles from "../../styles/authentication.module.scss"

const RegisterSuccess = () => {
    return(
        <Box className={styles.backgroundImage}>
            <Navbar />
            <Center h="100%">
                <Box 
                w={{base:"10%", md:"50%"}} 
                h="70%" 
                className={styles.glassBackground} 
                color="white">
                    <Box ml="15%" color="white">
                        <Text 
                        className={styles.authenticationHeader} 
                        lineHeight="52px" 
                        mt="25%">
                            Check your email for verification
                        </Text>
                        <Text 
                        className={styles.subtitle} 
                        mt="-40px" lineHeight="150%">
                            Thank you tor registering in SxC International Summit 2021
                        </Text>
                    </Box>
                </Box>
            </Center>
        </Box>
    )
}

export default RegisterSuccess