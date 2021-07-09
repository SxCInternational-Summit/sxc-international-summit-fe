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
            <Box ml="126px" fontSize="64px" mt="200px">
                <Text 
                    className={styles.titleFont} 
                    color="white">
                        StudentsxCEOs<br/>International
                </Text>

                <Flex mt="-128px">
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

                <Text 
                    className={styles.sloganFont} 
                    mt="-48px">
                        Jaya Jaya Jaya
                </Text>

                <Stack spacing="24px" direction="row" mt="120px">
                    <Button 
                        borderRadius="4px" 
                        p="10px 24px"
                        bgColor="#F8C800" 
                        border="none" 
                        className={styles.buttonFont}
                        cursor="pointer">
                            Register
                    </Button>
                    <Button 
                        borderRadius="4px" 
                        p="10px 24px" 
                        border="1px solid #F8C800" 
                        bgColor="transparent" 
                        color="white" 
                        className={styles.buttonFont}
                        cursor="pointer">
                            Sign In
                    </Button>
                </Stack>
            </Box>
    )
}

export default Jumbotron;