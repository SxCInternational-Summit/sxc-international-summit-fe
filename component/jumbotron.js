import {
    Box,
    Text,
    Flex,
    useMediaQuery
  } from "@chakra-ui/react";

import styles from "../styles/landing.module.scss";

const Jumbotron = () => {
    const [isDesktop] = useMediaQuery("(min-width: 48em)")
    return(
            <Box 
            pl={{base:"0", md:"126px"}} 
            pt={{base:"156px", md:"267px" }} 
            className={styles.backgroundImage} 
            textAlign={{base:"center", md:"left"}}
            h={{base:"552px", md:"780px"}}>
                <Text 
                    fontSize={{base:"36px", md:"64px"}} 
                    lineHeight={{base:"42px", md:"72px"}}
                    className="tertiaryFont"
                    fontWeight="700"
                    color="white">
                        StudentsxCEOs<br/>International
                </Text>
                {isDesktop ? <Flex >
                    <Text 
                        fontSize={{base:"36px", md:"64px"}} 
                        lineHeight={{base:"42px", md:"72px"}}
                        className="tertiaryFont"
                        fontWeight="700"
                        color="white">
                            Summit 
                    </Text>
                    <Text 
                        fontSize={{base:"36px", md:"64px"}} 
                        lineHeight={{base:"42px", md:"72px"}}
                        className={["tertiaryFont", styles.gradientBlue].join(" ")}
                        fontWeight="700"
                        ml="12px">
                             2021
                    </Text>
                </Flex> : <>
                    <Text 
                        fontSize={{base:"36px", md:"64px"}} 
                        lineHeight={{base:"42px", md:"72px"}}
                        className="tertiaryFont"
                        fontWeight="700"
                        color="white">
                            Summit 
                    </Text>
                    <Text 
                        fontSize={{base:"36px", md:"64px"}} 
                        lineHeight={{base:"42px", md:"72px"}}
                        className={["tertiaryFont", styles.gradientBlue].join(" ")}
                        fontWeight="700"
                        ml="12px">
                             2021
                    </Text>
                </>}

                <Text
                    className="tertiaryFont"
                    fontSize="16px"
                    color="#FFFFFF"
                    fontWeight="30"
                >
                    Stand Up, Stand Out, Be the One
                </Text>
            </Box>
    )
}

export default Jumbotron;