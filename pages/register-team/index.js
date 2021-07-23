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
    InputGroup,
    Spacer,
    Stack,
    HStack
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
    const [firstMemberUniversity, setfirstMemberUniversity] = useState("")
    const [firstMemberFaculty, setfirstMemberFaculty] = useState("")
    const [firstMemberMajor, setfirstMemberMajor] = useState("")

    const [secondMemberName, setsecondMemberName] = useState("")
    const [secondMemberPhone, setsecondMemberPhone] = useState("")
    const [secondMemberAddress, setsecondMemberAddress] = useState("")
    const [secondMemberCity, setsecondMemberCity] = useState("")
    const [secondMemberUniversity, setsecondMemberUniversity] = useState("")
    const [secondMemberFaculty, setsecondMemberFaculty] = useState("")
    const [secondMemberMajor, setsecondMemberMajor] = useState("")

    const [thirdMemberName, setthirdMemberName] = useState("")
    const [thirdMemberPhone, setthirdMemberPhone] = useState("")
    const [thirdMemberAddress, setthirdMemberAddress] = useState("")
    const [thirdMemberCity, setthirdMemberCity] = useState("")
    const [thirdMemberUniversity, setthirdMemberUniversity] = useState("")
    const [thirdMemberFaculty, setthirdMemberFaculty] = useState("")
    const [thirdMemberMajor, setthirdMemberMajor] = useState("")

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
                    </Text>


                    {(() => {
                            if (activeStep == 1) {
                            return (
                                <Box 
                                    color="white"
                                    lineHeight="150%"
                                    textAlign="left"
                                    w="30vw"
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
                            )
                            } else if (activeStep == 2) {
                            return (
                                <>
                                    <HStack w="80vw" spacing="80px" mt="80px">
                                        <Box 
                                        w="50%" 
                                        bgColor="#080818" 
                                        p="50px"
                                        color="white"
                                        lineHeight="150%"
                                        textAlign="left">

                                            <Text
                                                className="tertiaryFont"
                                                fontWeight="700"
                                                fontSize="36px"
                                                lineHeight="42px"
                                            >
                                                Team Member 1
                                            </Text>
                                            <FormControl>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberName">
                                                    FULL NAME
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberName" 
                                                    type='text' 
                                                    onChange={(e) => setfirstMemberName(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberPhone">
                                                    PHONE NUMBER
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberPhone" 
                                                    type='number'  
                                                    onChange={(e) => setfirstMemberPhone(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberAddress">
                                                    ADDRESS
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberAddress" 
                                                    type='text' 
                                                    onChange={(e) => setfirstMemberAddress(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberCity">
                                                    CITY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberCity" 
                                                    type='text'  
                                                    onChange={(e) => setfirstMemberCity(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberUniversity">
                                                    UNIVERSITY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberUniversity" 
                                                    type='text' 
                                                    onChange={(e) => setfirstMemberUniversity(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberFaculty">
                                                    FACULTY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberFaculty" 
                                                    type='text' 
                                                    onChange={(e) => setfirstMemberFaculty(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberMajor">
                                                    MAJOR
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberMajor" 
                                                    type='text' 
                                                    onChange={(e) => setfirstMemberMajor(e.target.value)} />
                                                </InputGroup>
                                            </FormControl>
                                        </Box>
                                        <Box 
                                        w="50%" 
                                        bgColor="#080818" 
                                        p="50px"
                                        color="white"
                                        lineHeight="150%"
                                        textAlign="left">

                                            <Text
                                                className="tertiaryFont"
                                                fontWeight="700"
                                                fontSize="36px"
                                                lineHeight="42px"
                                            >
                                                Team Member 2
                                            </Text>
                                            <FormControl>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberName">
                                                    FULL NAME
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberName" 
                                                    type='text' 
                                                    onChange={(e) => setsecondMemberName(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberPhone">
                                                    PHONE NUMBER
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberPhone" 
                                                    type='number'  
                                                    onChange={(e) => setsecondMemberPhone(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberAddress">
                                                    ADDRESS
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberAddress" 
                                                    type='text' 
                                                    onChange={(e) => setsecondMemberAddress(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberCity">
                                                    CITY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberCity" 
                                                    type='text'  
                                                    onChange={(e) => setsecondMemberCity(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberUniversity">
                                                    UNIVERSITY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberUniversity" 
                                                    type='text' 
                                                    onChange={(e) => setsecondMemberUniversity(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberFaculty">
                                                    FACULTY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberFaculty" 
                                                    type='text' 
                                                    onChange={(e) => setsecondMemberFaculty(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberMajor">
                                                    MAJOR
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberMajor" 
                                                    type='text' 
                                                    onChange={(e) => setsecondMemberMajor(e.target.value)} />
                                                </InputGroup>
                                            </FormControl>
                                        </Box>
                                    </HStack>
                                    <Flex>
                                    <Box 
                                        w="calc(40vw - 40px)" 
                                        bgColor="#080818" 
                                        p="50px"
                                        color="white"
                                        lineHeight="150%"
                                        textAlign="left"
                                        mt="60px">

                                            <Text
                                                className="tertiaryFont"
                                                fontWeight="700"
                                                fontSize="36px"
                                                lineHeight="42px"
                                            >
                                                Team Member 3
                                            </Text>
                                            <FormControl>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberName">
                                                    FULL NAME
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberName" 
                                                    type='text' 
                                                    onChange={(e) => setthirdMemberName(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberPhone">
                                                    PHONE NUMBER
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberPhone" 
                                                    type='number'  
                                                    onChange={(e) => setthirdMemberPhone(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberAddress">
                                                    ADDRESS
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberAddress" 
                                                    type='text' 
                                                    onChange={(e) => setthirdMemberAddress(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberCity">
                                                    CITY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberCity" 
                                                    type='text'  
                                                    onChange={(e) => setthirdMemberCity(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberUniversity">
                                                    UNIVERSITY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberUniversity" 
                                                    type='text' 
                                                    onChange={(e) => setthirdMemberUniversity(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberFaculty">
                                                    FACULTY
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberFaculty" 
                                                    type='text' 
                                                    onChange={(e) => setthirdMemberFaculty(e.target.value)} />
                                                </InputGroup>
                                                <FormLabel className="label" mt="32px" htmlFor="thirdMemberMajor">
                                                    MAJOR
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="thirdMemberMajor" 
                                                    type='text' 
                                                    onChange={(e) => setthirdMemberMajor(e.target.value)} />
                                                </InputGroup>
                                            </FormControl>
                                        </Box>
                                    </Flex>
                                </>
                            )
                            } else if(activeStep == 3){
                                return(
                                    <>
                                        <Stack 
                                            spacing="36px" 
                                            mt="60px" 
                                            color="white"
                                            lineHeight="150%"
                                        >
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Team Name
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {teamName}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Name"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderName}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Line ID"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderID}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Phone Number"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderPhone}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Address"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderAddress}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s City"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderCity}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s University"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderUniversity}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Faculty"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderFaculty}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Major"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderMajor}
                                                </Text>
                                            </Box>
                                        </Stack>
                                        <HStack w="80vw" spacing="80px" mt="120px">
                                        <Box 
                                        w="50%" 
                                        bgColor="#080818" 
                                        p="50px"
                                        color="white"
                                        lineHeight="150%"
                                        textAlign="left">

                                            <Text
                                                className="tertiaryFont"
                                                fontWeight="700"
                                                fontSize="36px"
                                                lineHeight="42px"
                                            >
                                                Team Member 1
                                            </Text>
                                                    
                                                <Text 
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Full Name
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberName ? firstMemberName : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Phone Number
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberPhone ? firstMemberPhone : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Address
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberAddress ? firstMemberAddress : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    City
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberCity ? firstMemberCity : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    University
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberUniversity ? firstMemberUniversity : "-"}
                                                </Text>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Faculty
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberFaculty ? firstMemberFaculty : "-"}
                                                </Text>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Major
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberMajor ? firstMemberMajor : "-"}
                                                </Text>
                                        </Box>
                                        <Box 
                                        w="50%" 
                                        bgColor="#080818" 
                                        p="50px"
                                        color="white"
                                        lineHeight="150%"
                                        textAlign="left">

                                            <Text
                                                className="tertiaryFont"
                                                fontWeight="700"
                                                fontSize="36px"
                                                lineHeight="42px"
                                            >
                                                Team Member 2
                                            </Text>
                                                    
                                                <Text 
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Full Name
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberName ? secondMemberName : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Phone Number
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberPhone ? secondMemberPhone : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Address
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberAddress ? secondMemberAddress : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    City
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberCity ? secondMemberCity : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    University
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberUniversity ? secondMemberUniversity : "-"}
                                                </Text>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Faculty
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberFaculty ? secondMemberFaculty : "-"}
                                                </Text>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Major
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberMajor ? secondMemberMajor : "-"}
                                                </Text>
                                        </Box>
                                    </HStack>
                                    <Flex>
                                        <Box 
                                            w="calc(40vw - 40px)" 
                                            bgColor="#080818" 
                                            p="50px"
                                            color="white"
                                            lineHeight="150%"
                                            textAlign="left"
                                            mt="60px">

                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="36px"
                                                    lineHeight="42px"
                                                >
                                                    Team Member 3
                                                </Text>
                                                    
                                                <Text 
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Full Name
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberName ? thirdMemberName : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Phone Number
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberPhone ? thirdMemberPhone : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Address
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberAddress ? thirdMemberAddress : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    City
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberCity ? thirdMemberCity : "-"}
                                                </Text>

                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    University
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberUniversity ? thirdMemberUniversity : "-"}
                                                </Text>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Faculty
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberFaculty ? thirdMemberFaculty : "-"}
                                                </Text>
                                                <Text
                                                    mt="24px"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    Major
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {thirdMemberMajor ? thirdMemberMajor : "-"}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </>
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