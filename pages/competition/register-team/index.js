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

import Navbar from "../../../component/navbar"
import Footer from "../../../component/footer";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Stepper from "../../../component/stepper";

const parseJSON = resp => (resp.json ? resp.json() : resp)

const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp
    } 
    return parseJSON(resp).then(resp => {
        throw resp
    })
}

const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
}

const { API_URL } = process.env

const RegisterTeamPage = () => {
    const [teamName, setteamName] = useState("")
    const [leaderName, setleaderName] = useState("")
    const [leaderEmail, setLeaderEmail] = useState("")
    const [leaderPhone, setleaderPhone] = useState("")
    const [leaderAddress, setleaderAddress] = useState("")
    const [leaderDateOfBirth, setLeaderDateOfBirth] = useState("")
    const [leaderCity, setleaderCity] = useState("")
    const [leaderUniversity, setleaderUniversity] = useState("")
    const [leaderFaculty, setleaderFaculty] = useState("")
    const [leaderMajor, setleaderMajor] = useState("")

    const [firstMemberName, setfirstMemberName] = useState("")
    const [firstMemberDateOfBirth, setFirstMemberDateOfBirth] = useState("")
    const [firstMemberAddress, setfirstMemberAddress] = useState("")
    const [firstMemberCity, setfirstMemberCity] = useState("")
    const [firstMemberUniversity, setfirstMemberUniversity] = useState("")
    const [firstMemberFaculty, setfirstMemberFaculty] = useState("")
    const [firstMemberMajor, setfirstMemberMajor] = useState("")

    const [secondMemberName, setsecondMemberName] = useState("")
    const [secondMemberDateOfBirth, setSecondMemberDateOfBirth] = useState("")
    const [secondMemberAddress, setsecondMemberAddress] = useState("")
    const [secondMemberCity, setsecondMemberCity] = useState("")
    const [secondMemberUniversity, setsecondMemberUniversity] = useState("")
    const [secondMemberFaculty, setsecondMemberFaculty] = useState("")
    const [secondMemberMajor, setsecondMemberMajor] = useState("")

    const [activeStep, setActiveStep] = useState(1);

    const [errorRegister, setErrorRegister] = useState(null)

    const router = useRouter()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = async e => {
        e.preventDefault()
        let success = false

        const registry = {
            team_name: teamName,
            leader_name: leaderName,
            leader_email: leaderEmail,
            leader_phone: leaderPhone,
            leader_address: leaderAddress,
            leader_date_of_birth: leaderDateOfBirth,
            leader_city: leaderCity,
            leader_university: leaderUniversity,
            leader_faculty: leaderFaculty,
            leader_major: leaderMajor,

            member1_name: firstMemberName,
            member1_date_of_birth: firstMemberDateOfBirth,
            member1_address: firstMemberAddress,
            member1_city: firstMemberCity,
            member1_university: firstMemberUniversity,
            member1_faculty: firstMemberFaculty,
            member1_major: firstMemberMajor,

            member2_name: secondMemberName,
            member2_date_of_birth: secondMemberDateOfBirth,
            member2_address: secondMemberAddress,
            member2_city: secondMemberCity,
            member2_university: secondMemberUniversity,
            member2_faculty: secondMemberFaculty,
            member2_major: secondMemberMajor
        }

        try {
            const response = await fetch(`${API_URL}/competition-users`, {
                method: 'POST',
                headers,
                body: JSON.stringify(registry)
            })
                .then(checkStatus)
                .then(parseJSON)
                success = true
        } catch (error) {
            setErrorRegister(error)
        }

        if (errorRegister && !success) {
            window.alert(`An error occured (register): ${errorRegister.message}`)
            window.alert('An error has occured! Please reload this page. If this continues, please contact: admin@sxcintersummit.com')
        }
    }

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
                                    <FormLabel className="label" mt="36px" htmlFor="leaderEmail">
                                        {"TEAM LEADER'S EMAIL"}
                                    </FormLabel>
                                    <InputGroup className="input" >
                                        <Input 
                                        id="leaderEmail" 
                                        type='text' 
                                        placeholder='ex: admin@sxcintersummit.com' 
                                        isRequired={true}
                                        onChange={(e) => setLeaderEmail(e.target.value)} />
                                    </InputGroup>
                                    <FormHelperText className="formHelper">Please input your active email account, We will contact you through this email</FormHelperText>
                                    <FormLabel className="label" mt="36px" htmlFor="leaderDateOfBirth">
                                        {"TEAM LEADER'S DATE OF BIRTH"}
                                    </FormLabel>
                                    <InputGroup className="input" >
                                        <Input 
                                        id="leaderDateOfBirth" 
                                        type='text' 
                                        placeholder='format: dd/mm/yyyy (ex: 16-01-2001)' 
                                        isRequired={true}
                                        onChange={(e) => setLeaderDateOfBirth(e.target.value)} />
                                    </InputGroup>
                                    <FormHelperText className="formHelper">Your information is required for event purposes and will not be shared publicly</FormHelperText>
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
                                                <FormLabel className="label" mt="32px" htmlFor="firstMemberDateOfBirth">
                                                    DATE OF BIRTH
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberDateOfBirth" 
                                                    type='text'  
                                                    onChange={(e) => setFirstMemberDateOfBirth(e.target.value)} />
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
                                                <FormLabel className="label" mt="32px" htmlFor="secondMemberDateOfBirth">
                                                    Date of Birth
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberDateOfBirth" 
                                                    type='text'  
                                                    onChange={(e) => setSecondMemberDateOfBirth(e.target.value)} />
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
                                                    {"Team Leader’s Email"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderEmail}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Text
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    fontSize="0.75rem"
                                                >
                                                    {"Team Leader’s Date of Birth"}
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {leaderDateOfBirth}
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
                                                    Date of Birth
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {firstMemberDateOfBirth ? firstMemberDateOfBirth : "-"}
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
                                                    Date of Birth
                                                </Text>
                                                <Text
                                                    mt="0.25rem"
                                                    className="secondaryFont"
                                                    fontSize="1rem"
                                                >
                                                    {secondMemberDateOfBirth ? secondMemberDateOfBirth : "-"}
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
                                onClick={activeStep != 4 ? handleNext : handleSubmit}
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