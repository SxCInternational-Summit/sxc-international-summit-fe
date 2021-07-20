import {
    Box,
    Center,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Flex,
    InputGroup
  } from "@chakra-ui/react";
import { useState } from "react";

import { useRouter } from "next/router";

import Navbar from "../../component/navbar"
import Footer from "../../component/footer";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const RegisterPage = () => {
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [university, setuniversity] = useState("")
    const [faculty, setfaculty] = useState("")
    const [major, setmajor] = useState("")

    const handleSubmit = () => {
        console.log([{email: email, name: name, university: university, faculty: faculty, major: major}]);
        router.push("/register/success")
    }
    const router = useRouter()

    return(
        <Box bgColor="#04040C">
            <Navbar />
                <Center 
                    w="30%"
                    mx="35%"
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

                    <Text 
                        className="gradientFont"
                        fontSize="48px"
                        lineHeight="52px"
                        textAlign="center"
                        mt="112px"
                        >
                        Confirm Your Seat
                    </Text>
                    <Text
                        className="secondaryFont"
                        fontSize="1rem"
                        lineHeight="150%"
                        color="white"
                        textAlign="center"
                        mt="10px"
                    >
                        Please make sure that the information provided is correct
                    </Text>

                    <Box 
                        color="white"
                        lineHeight="150%"
                        textAlign="left"
                    >
                        <Text
                            className="tertiaryFont"
                            fontSize="0.75rem"
                            fontWeight="700"
                            mt="60px"
                        >
                            Event Name
                        </Text>
                        <Text
                            mt="0.25rem"
                            className="secondaryFont"
                            fontSize="1rem"
                        >
                            Pre-Event #1 Talkshow
                        </Text>

                        <Text
                            className="tertiaryFont"
                            fontSize="0.75rem"
                            fontWeight="700"
                            mt="36px"
                        >
                            Time and Date
                        </Text>
                        <Text
                            mt="0.25rem"
                            className="secondaryFont"
                            fontSize="1rem"
                        >
                            8:00 PM (GMT+7), 24 July 2021
                        </Text>

                        <Text
                            className="tertiaryFont"
                            fontSize="0.75rem"
                            fontWeight="700"
                            mt="36px"
                        >
                            Platform
                        </Text>
                        <Text
                            mt="0.25rem"
                            className="secondaryFont"
                            fontSize="1rem"
                        >
                            Zoom
                        </Text>
                            <FormControl>
                                <FormLabel className="label" mt="36px" htmlFor="email">
                                    E-Mail Address
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="email" 
                                    type='email' 
                                    placeholder='ex: email@address.com' 
                                    isRequired={true}
                                    onChange={(e) => setemail(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">We will send the event’s detail to your e-mail. Make sure it’s correct.</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="name">
                                    Full Name
                                </FormLabel>
                                <InputGroup className="input">
                                    <Input 
                                        id="name"
                                        type="text"
                                        placeholder="ex: John Doe"
                                        isRequired={true}
                                        onChange={(e) => setname(e.target.value)}
                                        />
                                </InputGroup>
                                <FormLabel className="label" mt="36px" htmlFor="university">
                                    University
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="university" 
                                    type='text' 
                                    placeholder='ex: Universitas Indonesia' 
                                    isRequired={true}
                                    onChange={(e) => setuniversity(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">Please input your current or previous university name</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="faculty">
                                    Faculty
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="faculty" 
                                    type='text' 
                                    placeholder='ex: Computer Science' 
                                    isRequired={true}
                                    onChange={(e) => setfaculty(e.target.value)} />
                                </InputGroup>
                                <FormLabel className="label" mt="36px" htmlFor="major">
                                    Major
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="major" 
                                    type='text' 
                                    placeholder='ex: Information System' 
                                    isRequired={true}
                                    onChange={(e) => setmajor(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            </Box>
                        <Text
                                className="secondaryFont"
                                fontSize="1rem"
                                lineHeight="150%"
                                color="white"
                                textAlign="center"
                                mt="60px"
                            >
                                We will send you an e-mail with the event’s detail prior to the event.
                        </Text>
                        <Flex justifyContent="flex-end" w="100%">
                            <Button
                                mt="40px" 
                                type="submit"
                                cursor={(email === "" || university === "" || faculty === "" || major === "") ? "default" : "pointer"} 
                                bgColor="#F8C800" 
                                opacity={(email === "" || university === "" || faculty === "" || major === "") ? "0.6" : "1"} 
                                color="black"
                                p="10px 24px" 
                                borderRadius="4px" 
                                className="yellowButtonFont"
                                border="none"
                                onClick={handleSubmit}
                                mb="36px"
                                isDisabled={(email === "" || university === "" || faculty === "" || major === "")}>
                                Confirm
                            </Button>
                        </Flex>
                        
                </Center>
            <Footer />
        </Box>
    )
}

export default RegisterPage