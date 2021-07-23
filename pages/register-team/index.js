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
import Stepper from "../../component/stepper";


const RegisterTeamPage = () => {
    const [teamName, setteamName] = useState("")
    const [leaderName, setleaderName] = useState("")
    const [leaderID, setleaderID] = useState("")
    const [leaderPhone, setleaderPhone] = useState("")
    const [leaderAddress, setleaderAddress] = useState("")
    const [leaderCity, setleaderCity] = useState("")
    const [leaderUniversity, setleaderUniversity] = useState("")
    const [leaderFaculty, setleaderFaculty] = useState("")
    const [leaderMajor, setleaderMajor] = useState("")

    const [firstMemberName, setfirstMemberName] = useState("")
    const [firstMemberPhone, setfirstMemberPhone] = useState("")
    const [firstMemberAddress, setfirstMemberAddress] = useState("")
    const [firstMemberCity, setfirstMemberCity] = useState("")
    const [firstnumberUniversity, setfirstnumberUniversity] = useState("")
    const [firstNumberFaculty, setfirstNumberFaculty] = useState("")
    const [firstNumberMajor, setfirstNumberMajor] = useState("")

    const [secondMemberName, setsecondMemberName] = useState("")
    const [secondMemberPhone, setsecondMemberPhone] = useState("")
    const [secondMemberAddress, setsecondMemberAddress] = useState("")
    const [secondMemberCity, setsecondMemberCity] = useState("")
    const [secondnumberUniversity, setsecondnumberUniversity] = useState("")
    const [secondNumberFaculty, setsecondNumberFaculty] = useState("")
    const [secondNumberMajor, setsecondNumberMajor] = useState("")

    const [thirdtMemberName, setthirdMemberName] = useState("")
    const [thirdMemberPhone, setthirdMemberPhone] = useState("")
    const [thirdMemberAddress, setthirdMemberAddress] = useState("")
    const [thirdMemberCity, setthirdMemberCity] = useState("")
    const [thirdnumberUniversity, setthirdnumberUniversity] = useState("")
    const [thirdNumberFaculty, setthirdNumberFaculty] = useState("")
    const [thirdNumberMajor, setthirdtNumberMajor] = useState("")

    const [activeStep, setActiveStep] = useState(1);

    const router = useRouter()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
        <Box bgColor="#04040C">
            <Navbar />
                <Center 
                    w="36%"
                    mx="32%"
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

                    <Box mt="90px">
                        <Stepper activeStep={activeStep} />
                    </Box>
                    

                    <Text 
                        className="gradientFont"
                        fontSize="48px"
                        lineHeight="52px"
                        textAlign="center"
                        mt="80px"
                        >
                        {(() => {
                            if (activeStep == 1) {
                            return (
                                <>Register Your Team.</>
                            )
                            } else if (activeStep == 2) {
                            return (
                                <>Register Your Team Member</>
                            )
                            } else if(activeStep == 3){
                                return(
                                    <>Confirm Your Team</>
                                )
                            } else if(activeStep == 4) {
                                return (
                                    <>Registration Payment</>
                                )
                            } else {
                                return (
                                    <>Registration Process Completed</>
                                )
                            }
                        })()}
                    </Text>
                    <Text
                        className="secondaryFont"
                        fontSize="1rem"
                        lineHeight="150%"
                        color="white"
                        textAlign="center"
                        mt="24px"
                    >
                        {(() => {
                            if (activeStep == 1) {
                            return (
                                <>Only one person who represents their team is needed to fill this registration form</>
                            )
                            } else if (activeStep == 2) {
                            return (
                                <>Team’s leader is not required to fill this form</>
                            )
                            } else if(activeStep == 3){
                                return(
                                    <>Please make sure that the information you have entered is correct</>
                                )
                            } else if(activeStep == 4) {
                                return (
                                    <>Please proceed to pay the registration fee. If you need help, check out the payment FAQ below the 
                                    register and previous button, or contact us at 081292138924</>
                                )
                            } else {
                                return (
                                    <>Thank you for registering! We’ll review your payment and we’ll give you the event details soon!
                                    We’re looking forward to your participation!</>
                                )
                            }
                        })()}
                        Only one person who represents their team is needed to fill this registration form
                    </Text>

                    <Box 
                        color="white"
                        lineHeight="150%"
                        textAlign="left"
                    >
                            <FormControl>
                                <FormLabel className="label" mt="36px" htmlFor="teamName">
                                    TEAM NAME
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="teamName" 
                                    type='text' 
                                    placeholder='ex: Super Business' 
                                    isRequired={true}
                                    onChange={(e) => setteamName(e.target.value)} />
                                </InputGroup>
                                <FormLabel className="label" mt="36px" htmlFor="leaderName">
                                    {"TEAM LEADER'S FULL NAME"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderName" 
                                    type='text' 
                                    placeholder='ex: Andi' 
                                    isRequired={true}
                                    onChange={(e) => setleaderName(e.target.value)} />
                                </InputGroup>
                                <FormLabel className="label" mt="36px" htmlFor="leaderID">
                                    {"TEAM LEADER'S LINE ID"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderID" 
                                    type='text' 
                                    placeholder='ex: alianda2012' 
                                    isRequired={true}
                                    onChange={(e) => setleaderID(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">Please input your active Line account</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="leaderPhone">
                                    {"TEAM LEADER'S PHONE NUMBER"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderPhone" 
                                    type='number' 
                                    placeholder='ex: 0891204123' 
                                    isRequired={true}
                                    onChange={(e) => setleaderPhone(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">Please input your active phone number</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="leaderAddress">
                                    {"TEAM LEADER'S ADDRESS"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderAddress" 
                                    type='text' 
                                    placeholder='ex: Jalan Sudirman Kav 6 Nomor 3, Menteng Raya' 
                                    isRequired={true}
                                    onChange={(e) => setleaderAddress(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">Please input your current address</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="leaderCity">
                                    {"TEAM LEADER'S CITY"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderCity" 
                                    type='text' 
                                    placeholder='ex: Jakarta Pusat' 
                                    isRequired={true}
                                    onChange={(e) => setleaderCity(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">Please input your current city</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="leaderUniversity">
                                    {"TEAM LEADER's UNIVERSITY"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderUniversity" 
                                    type='text' 
                                    placeholder='ex: Universitas Indonesia' 
                                    isRequired={true}
                                    onChange={(e) => setleaderUniversity(e.target.value)} />
                                </InputGroup>
                                <FormHelperText className="formHelper">Please input your current or previous university name</FormHelperText>
                                <FormLabel className="label" mt="36px" htmlFor="leaderFaculty">
                                    {"TEAM LEADER'S FACULTY"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderFaculty" 
                                    type='text' 
                                    placeholder='ex: Computer Science' 
                                    isRequired={true}
                                    onChange={(e) => setleaderFaculty(e.target.value)} />
                                </InputGroup>
                                <FormLabel className="label" mt="36px" htmlFor="leaderMajor">
                                    {"TEAM LEADER'S MAJOR"}
                                </FormLabel>
                                <InputGroup className="input" >
                                    <Input 
                                    id="leaderMajor" 
                                    type='text' 
                                    placeholder='ex: Information System' 
                                    isRequired={true}
                                    onChange={(e) => setleaderMajor(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            </Box>
                        <Flex justify="space-between" w="100%" mt="48px">
                            <Button
                                border="1px solid #F8C800"
                                mt="40px" 
                                type="submit"
                                bgColor="black"
                                color="white"
                                p="10px 24px" 
                                borderRadius="4px" 
                                className="yellowButtonFont"
                                onClick={handleBack}
                                mb="36px"
                                isDisabled={activeStep == 1}>
                                Previous
                            </Button>
                            <Button
                                mt="40px" 
                                type="submit"
                                bgColor="#F8C800" 
                                color="black"
                                p="10px 24px" 
                                borderRadius="4px" 
                                className="yellowButtonFont"
                                border="none"
                                onClick={handleNext}
                                mb="36px">
                                {activeStep != 4 ? "Next" : "Register"}
                            </Button>
                        </Flex>
                        
                </Center>
            <Footer />
        </Box>
    )
}

export default RegisterTeamPage