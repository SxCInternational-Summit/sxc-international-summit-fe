import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Text,
    Button, 
    Flex,
    Icon,
    Image
  } from "@chakra-ui/react";
import Footer from "../../../component/footer";
import Navbar from "../../../component/navbar";
import { FaWhatsapp, FaRegAddressBook } from "react-icons/fa"
import { useRouter } from "next/router";

import Head from 'next/head'

const RegisterSuccess = () => {
    const router = useRouter()
    return(
        <>
        <Head>
            <title>Registration Process Complete</title>
        </Head>
        <Box 
            bgColor="#04040C"
        >
            <Navbar />
            <Center 
                    w="40%"
                    mx="30%"
                    mt="64px"
                    flexDirection="column"
                >
                    <Button
                        pos="absolute"
                        top="20px"
                        left="120px"
                        color="white"
                        bgColor="transparent"
                        fontSize="1rem"
                        lineHeight="150%"
                        fontFamily="primaryFont"
                        fontWeight="900"
                        p="10px 12px"
                        onClick={() => router.push("/")}
                        >
                        <Flex lineHeight="100%">
                            <ChevronLeftIcon />
                            <Text ml="6px">Go Back</Text>
                        </Flex>
                    </Button>

                    <Image src="/images/registerEventSuccess.svg" alt="" fontSize="96px" mt="92px" />
                    <Text 
                        className="gradientFont"
                        fontSize={{base: "24px", md: "48px"}}
                        lineHeight="52px"
                        textAlign="center"
                        w="100%"
                        mt="12px"
                        >
                        Registration Process Completed
                    </Text>
                    <Text
                        className="secondaryFont"
                        fontSize="1rem"
                        lineHeight="150%"
                        color="white"
                        textAlign="center"
                        mt="24px"
                    >
                        Thank you for registering! Dont forget to join the Whatsapp group for the further information. See you soon, future leaders!
                    </Text>
                    <Flex
                        color="#F8C800"
                        alignItems="center"
                        mt="48px">
                            <Icon 
                                as={FaWhatsapp} 
                                fontSize="36px"
                            />
                            <Text ml="0.75rem"
                                fontSize={{base:"18px", md:"24px"}}
                                lineHeight="28px"
                                className="tertiaryFont"
                                fontWeight="700"
                                maxWidth="80vw"
                                textAlign="center"
                                >
                                    https://chat.whatsapp.com/JcO0nc2eWPUIKzlOstJrSw
                            </Text>
                        </Flex>
                        <Text
                                className="secondaryFont"
                                fontSize="1rem"
                                lineHeight="150%"
                                color="white"
                                textAlign="center"
                                mt="60px"
                            >
                                If you need help, feel free to contact us at
                        </Text>
                        <Flex
                        color="white"
                        alignItems="center"
                        mt="20px">
                            <Icon as={FaWhatsapp} fontSize="24px" />
                            <Text ml="0.75rem"
                            className="secondaryFont"
                            fontSize="1rem"
                            lineHeight="150%"
                            color="white"
                            textAlign="center">
                                +6281218989775 (Phylicia)
                            </Text>
                        </Flex>
                        <Flex
                        color="white"
                        alignItems="center"
                        mt="20px">
                            <Icon as={FaRegAddressBook} fontSize="24px" />
                            <Text ml="0.75rem"
                            className="secondaryFont"
                            fontSize="1rem"
                            lineHeight="150%"
                            color="white"
                            textAlign="center">
                                Email us at: info.sxcintersummit@gmail.com 
                            </Text>
                        </Flex>
                        <Button
                            mt="60px" 
                            cursor="pointer"
                            bgColor="#F8C800" 
                            color="black"
                            p="10px 24px" 
                            borderRadius="4px" 
                            className="yellowButtonFont"
                            border="none"
                            onClick={() => router.push("/event")}
                            mb="60px">
                                Back to Events
                            </Button>
                </Center>
            <Footer />
        </Box>
        </>
    )
}

export default RegisterSuccess