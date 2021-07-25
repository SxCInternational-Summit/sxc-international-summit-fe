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

const RegisterSuccess = () => {
    const router = useRouter()
    return(
        <Box bgColor="#04040C" >
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
                        fontSize="48px"
                        lineHeight="52px"
                        textAlign="center"
                        w="70%"
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
                        Thank you for registering! Don’t forget to join the whatsapp group for we will inform you through whatsapp.
                    </Text>
                    <Flex
                        color="#F8C800"
                        alignItems="center"
                        mt="48px">
                            <Icon as={FaWhatsapp} fontSize="48px" />
                            <Text ml="0.75rem"
                            fontSize="24px"
                            lineHeight="28px"
                            className="tertiaryFont"
                            fontWeight="700">
                                https://chat.whatsapp.com/E5msaBzu2yM31VOTGdchfC
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
                                +628121898977 (Phylicia)
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
                                Email us at: inreg@sxcintersummit.com
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
    )
}

export default RegisterSuccess