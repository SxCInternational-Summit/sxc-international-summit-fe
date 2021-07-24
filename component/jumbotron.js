import {
    Box,
    Text,
    Flex,
    Button,
    Stack
  } from "@chakra-ui/react";

import styles from "../styles/landing.module.scss";

const Jumbotron = () => {
    return(
            <Box pl="126px" fontSize="64px" pt="267px" className={styles.backgroundImage}>
                <Text 
                    className={styles.titleFont} 
                    color="white">
                        StudentsxCEOs<br/>International
                </Text>

                <Flex>
                    <Text 
                        className={styles.titleFont} 
                        color="white">
                            Summit 
                        </Text>
                    <Text 
                        className={[styles.titleFont, styles.gradientBlue].join(" ")}
                         ml="12px">
                             2021
                    </Text>
                </Flex>

                <Text className={styles.sloganFont} mt="15px" mb="210px">
                        Jaya Jaya Jaya
                </Text>
            </Box>
    )
}

export default Jumbotron;