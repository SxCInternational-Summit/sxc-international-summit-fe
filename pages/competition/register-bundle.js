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
    Stack,
    HStack,
    Divider,
    UnorderedList,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Icon,
  } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../../component/navbar"
import Footer from "../../component/footer";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Stepper from "../../component/stepper";
import Faq from "../../component/faq";

import { FaInstagram, FaWhatsapp } from "react-icons/fa"

import { NextSeo } from "next-seo";

const parseJSON = resp => (resp.json ? resp.json() : resp)

const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp
    } 
    return parseJSON(resp).then(resp => {
        throw resp
    })
}

const head = {
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

    const [leaderFollowLink, setLeaderFollowLink] = useState("")
    const [leaderTwibbonLink, setLeaderTwibbonLink] = useState("")
    const [firstMemberTwibbonLink, setFirstMemberTwibbonLink] = useState("")
    const [secondMemberTwibbonLink, setSecondMemberTwibbonLink] = useState("")

    const [activeStep, setActiveStep] = useState(1);

    const [errorRegister, setErrorRegister] = useState(null)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        window.scrollTo(0, 0)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        window.scrollTo(0, 0)
    };

    const handleSubmit = async e => {
        //e.preventDefault()
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
            member2_major: secondMemberMajor,

            leader_follow: leaderFollowLink,
            leader_twibbon: leaderTwibbonLink,
            member1_twibbon: firstMemberTwibbonLink,
            member2_twibbon: secondMemberTwibbonLink,
        }

        try {
            const add = await fetch(`${API_URL}/competitionbundles`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registry)
            })
                .then(checkStatus)
                .then(parseJSON)
                success = true
        } catch (error) {
            setErrorRegister(error)
            success = false
        }
        
        if (errorRegister || !success) {
            //window.alert(`An error occured (register): ${errorRegister.message}`)
            window.alert('An error has occured! Please reload this page. If this continues, please contact: admin@sxcintersummit.com')
        } else {
            handleNext()
            window.scrollTo(0, 0)
        }
    }

    const faq =[
		{
			question: "How do I pay for the registration?",
			answer: "After you filled some information, we will provide you with the payment information you need."
		},
		{
			question: "What is the payment option if I live in Indonesia?",
			answer: "Currently we accept payment via bank transfer by BCA."
		},
		{
			question: "What if I live outside Indonesia?",
			answer: "You're welcomed to participate!"
		}
	]

    return(
        <>
            <NextSeo 
                title="Register Your Team | SxCInternational Summit 2021"
            />
            <Box bgColor="#04040C">
                <Navbar />
                    <Center 
                        w={{base:"90%", md:"36%"}}
                        mx={{base:"5%", md:"32%"}}
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

                        <Box mt="90px" display={{base:"none", md:"block"}}>
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
                                        <>Registration Requirement</>
                                    )
                                } else if (activeStep == 5) {
                                    return (
                                        <>Confirm Payment</>
                                    )
                                } else {
                                    return (
                                        <>
                                            <Center>
                                                <Image src="/images/registerEventSuccess.svg" alt="" fontSize="96px" />
                                            </Center>
                                            <Center>
                                                Registration Process Completed
                                            </Center>
                                        </>
                                    )
                                }
                            })()}
                        </Text>
                        <Text
                            className="secondaryFont"
                            fontSize="1.2rem"
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
                                    <>Please Provide Your Team Member Information</>
                                )
                                } else if(activeStep == 3){
                                    return(
                                        <>Please make sure that the information you have entered is correct</>
                                    )
                                } else if(activeStep == 4) {
                                    return (
                                        <>{"Please insert the instagram links to team member's twibbon post as requirement to participate"}</>
                                    )
                                } else if(activeStep == 5) {
                                    return (
                                        <>Please proceed to pay the registration fee. If you need help, check out the payment FAQ below the 
                                        register and previous button, or contact us at <Text color="F8C800">inreg@sxcintersummit.com</Text></>
                                    )
                                } else {
                                    return (
                                        <>
                                        <Text>
                                            Thank you for registering! We’ll review your payment and we’ll give you the event details soon! We’re looking forward to your participation!
                                        </Text>
                                        <Text mt="24px">
                                            If you need help, feel free to contact us at
                                        </Text>
                                        <Flex mt="20px" justify="center">
                                            <Icon as={FaWhatsapp} fontSize="24px" />
                                            <Text ml="0.75rem">
                                                +6281218989775 (Phylicia)
                                            </Text>
                                        </Flex>
                                        <Flex mt="20px" justify="center">
                                            <Icon as={FaInstagram} fontSize="24px" />
                                            <Text ml="0.75rem">
                                                sxcintersummit
                                            </Text>
                                        </Flex>
                                        </>
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
                                        w={{base:"90vw",md:"30vw"}}
                                    >
                                
                                    <FormControl isRequired>
                                        <FormLabel className="label" mt="36px" htmlFor="teamName">
                                            TEAM NAME
                                        </FormLabel>
                                        <InputGroup className="input" >
                                            <Input 
                                            id="teamName"
                                            type='text' 
                                            placeholder='ex: Super Business' 
                                            isRequired={true}
                                            onChange={(e) => setteamName(e.target.value)} 
                                            value={teamName}
                                            />
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
                                            onChange={(e) => setleaderName(e.target.value)}
                                            value={leaderName}
                                            />
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
                                            onChange={(e) => setLeaderEmail(e.target.value)} 
                                            value={leaderEmail}
                                            />
                                        </InputGroup>
                                        <FormHelperText className="formHelper">Please input your active email account, We will contact you through this email</FormHelperText>
                                        <FormLabel className="label" mt="36px" htmlFor="leaderDateOfBirth">
                                            {"TEAM LEADER'S DATE OF BIRTH"}
                                        </FormLabel>
                                        <InputGroup className="input" >
                                            <Input 
                                            id="leaderDateOfBirth" 
                                            type='text' 
                                            placeholder='format: dd-mm-yyyy (ex: 16-01-2001)' 
                                            isRequired={true}
                                            onChange={(e) => setLeaderDateOfBirth(e.target.value)} 
                                            value={leaderDateOfBirth}
                                            />
                                        </InputGroup>
                                        <FormHelperText className="formHelper">Your information is required for event purposes and will not be shared publicly</FormHelperText>
                                        <FormLabel className="label" mt="36px" htmlFor="leaderPhone">
                                            {"TEAM LEADER'S PHONE NUMBER"}
                                        </FormLabel>
                                        <InputGroup className="input" >
                                            <Input 
                                            id="leaderPhone" 
                                            type='text' 
                                            placeholder='ex: 0891204123' 
                                            isRequired={true}
                                            onChange={(e) => setleaderPhone(e.target.value)} 
                                            value={leaderPhone}
                                            />
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
                                            onChange={(e) => setleaderAddress(e.target.value)} 
                                            value={leaderAddress}
                                            />
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
                                            onChange={(e) => setleaderCity(e.target.value)} 
                                            value={leaderCity}
                                            />
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
                                            onChange={(e) => setleaderUniversity(e.target.value)} 
                                            value={leaderUniversity}
                                            />
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
                                            onChange={(e) => setleaderFaculty(e.target.value)} 
                                            value={leaderFaculty}
                                            />
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
                                            onChange={(e) => setleaderMajor(e.target.value)} 
                                            value={leaderMajor}
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </Box>
                                )
                                } else if (activeStep == 2) {
                                return (
                                    <>
                                        <Stack w="80vw" spacing="80px" mt="80px" direction={{base:"column", md:"row"}}>
                                            <Box 
                                            w="100%" 
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
                                                <FormControl isRequired>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberName">
                                                        FULL NAME
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberName" 
                                                        type='text'
                                                        placeholder="ex: Andi" 
                                                        onChange={(e) => setfirstMemberName(e.target.value)} 
                                                        value={firstMemberName}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberDateOfBirth">
                                                        DATE OF BIRTH
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberDateOfBirth" 
                                                        type='text'  
                                                        placeholder="Format: dd-mm-yyy (ex: 16-01-2001)"
                                                        onChange={(e) => setFirstMemberDateOfBirth(e.target.value)} 
                                                        value={firstMemberDateOfBirth}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberAddress">
                                                        ADDRESS
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberAddress"
                                                        type='text'
                                                        placeholder='ex: Jalan Sudirman Kav 6 Nomor 3, Menteng Raya' 
                                                        onChange={(e) => setfirstMemberAddress(e.target.value)} 
                                                        value={firstMemberAddress}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberCity">
                                                        CITY
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberCity" 
                                                        type='text' 
                                                        placeholder="ex: Jakarta Pusat" 
                                                        onChange={(e) => setfirstMemberCity(e.target.value)} 
                                                        value={firstMemberCity}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberUniversity">
                                                        UNIVERSITY
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberUniversity" 
                                                        type='text'
                                                        placeholder="Universitas Indonesia"
                                                        onChange={(e) => setfirstMemberUniversity(e.target.value)} 
                                                        value={firstMemberUniversity}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberFaculty">
                                                        FACULTY
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberFaculty" 
                                                        type='text' 
                                                        placeholder="Teknik"
                                                        onChange={(e) => setfirstMemberFaculty(e.target.value)} 
                                                        value={firstMemberFaculty}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="firstMemberMajor">
                                                        MAJOR
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="firstMemberMajor" 
                                                        type='text'
                                                        placeholder="Teknik Industri"
                                                        onChange={(e) => setfirstMemberMajor(e.target.value)} 
                                                        value={firstMemberMajor}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                            </Box>
                                            <Box 
                                            w="100%" 
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
                                                <FormControl isRequired>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberName">
                                                        FULL NAME
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberName" 
                                                        type='text'
                                                        placeholder="Alicia Setiawan"
                                                        onChange={(e) => setsecondMemberName(e.target.value)} 
                                                        value={secondMemberName}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberDateOfBirth">
                                                        Date of Birth
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberDateOfBirth" 
                                                        type='text'
                                                        placeholder="Format: dd-mm-yyy (ex: 16-01-2001)" 
                                                        onChange={(e) => setSecondMemberDateOfBirth(e.target.value)} 
                                                        value={secondMemberDateOfBirth}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberAddress">
                                                        ADDRESS
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberAddress" 
                                                        type='text'
                                                        placeholder="'ex: Jalan Sudirman Kav 6 Nomor 3, Menteng Raya"
                                                        onChange={(e) => setsecondMemberAddress(e.target.value)} 
                                                        value={secondMemberAddress}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberCity">
                                                        CITY
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberCity" 
                                                        type='text'
                                                        placeholder="Jakarta Pusat"
                                                        onChange={(e) => setsecondMemberCity(e.target.value)} 
                                                        value={secondMemberCity}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberUniversity">
                                                        UNIVERSITY
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberUniversity" 
                                                        type='text'
                                                        placeholder="Universitas Indonesia" 
                                                        onChange={(e) => setsecondMemberUniversity(e.target.value)} 
                                                        value={secondMemberUniversity}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberFaculty">
                                                        FACULTY
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberFaculty" 
                                                        type='text'
                                                        placeholder="Fakultas Ilmu Politik dan Sosial"
                                                        onChange={(e) => setsecondMemberFaculty(e.target.value)} 
                                                        value={secondMemberFaculty}
                                                        />
                                                    </InputGroup>
                                                    <FormLabel className="label" mt="32px" htmlFor="secondMemberMajor">
                                                        MAJOR
                                                    </FormLabel>
                                                    <InputGroup className="input" >
                                                        <Input 
                                                        id="secondMemberMajor" 
                                                        type='text'
                                                        placeholder="Ilmu Komunikasi"
                                                        onChange={(e) => setsecondMemberMajor(e.target.value)} 
                                                        value={secondMemberMajor}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                            </Box>
                                        </Stack>
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
                                            <Stack w="80vw" spacing="80px" mt="120px" direction={{base:"column", md:"row"}}>
                                            <Box 
                                            w="100%" 
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
                                            w="100%" 
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
                                        </Stack>
                                        </>
                                    )
                                } else if (activeStep == 4) {
                                    return (
                                        <>
                                        <Box 
                                            color="white"
                                            lineHeight="150%"
                                            textAlign="left"
                                            mt="60px"
                                            w="25vw">
                                            <Text
                                                mt="0.25rem"
                                                className="secondaryFont"
                                                fontSize="1.5rem"
                                                textAlign="center"
                                                fontWeight="600"
                                            >
                                                Requirements
                                            </Text>
                                        </Box>
                                        
                                        <Box
                                            lineHeight="125%"
                                            className="tertiaryFont"
                                            fontWeight="500">
                                            <Box mt="20px">
                                                <UnorderedList color="white">
                                                    <ListItem>
                                                        <Flex fontSize="1rem" align="center">
                                                            <Text color="#F8C800">
                                                                Twibbon (3 People)
                                                            </Text>
                                                        </Flex>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Flex fontSize="1rem" align="center">
                                                            <Text color="#F8C800">
                                                                Follow Account (sxcintersummit and studentsxceosjkt)
                                                            </Text>
                                                        </Flex>
                                                    </ListItem>
                                                </UnorderedList>
                                            </Box>
                                        </Box>

                                        <Box 
                                            color="white"
                                            lineHeight="150%"
                                            textAlign="left"
                                            w={{base:"80vw", md:"30vw"}}
                                        >
                                            <FormControl isRequired>
                                                <FormLabel className="label" mt="36px" htmlFor="leaderFollowLink">
                                                    Shareable Drive Link
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="leaderFollowLink" 
                                                    type='text' 
                                                    placeholder='ex: https://drive.google.com/<link>' 
                                                    isRequired={true}
                                                    onChange={(e) => setLeaderFollowLink(e.target.value)} 
                                                    value={leaderFollowLink}
                                                    />
                                                </InputGroup>
                                                <FormHelperText textAlign="center">Please insert all of the requirements into one shareable drive link (ex: Google Drive)</FormHelperText>
                                                <FormHelperText textAlign="center">File Name Format: [TeamName_YourName] for each files</FormHelperText>
                                                <FormLabel className="label" mt="36px" htmlFor="leaderTwibbonLink">
                                                    Team Leader Twibbon Link
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="leaderTwibbonLink" 
                                                    type='text' 
                                                    placeholder='ex: https://www.instagram.com/p/CRtR9j1Mp57/' 
                                                    isRequired={true}
                                                    onChange={(e) => setLeaderTwibbonLink(e.target.value)} 
                                                    value={leaderTwibbonLink}
                                                    />
                                                </InputGroup>
                                                <FormHelperText textAlign="center">Simply copy and paste the twibbon link from your instagram and make sure your account isn't private.</FormHelperText>
                                                <FormLabel className="label" mt="36px" htmlFor="firstMemberTwibbonLink">
                                                    Team Member Twibbon Link
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="firstMemberTwibbonLink" 
                                                    type='text' 
                                                    placeholder='ex: https://www.instagram.com/p/CRtR9j1Mp57/' 
                                                    isRequired={true}
                                                    onChange={(e) => setFirstMemberTwibbonLink(e.target.value)} 
                                                    value={firstMemberTwibbonLink}
                                                    />
                                                </InputGroup>
                                                <FormHelperText textAlign="center">Simply copy and paste the twibbon link from your instagram and make sure your account isn't private.</FormHelperText>
                                                <FormLabel className="label" mt="36px" htmlFor="secondMemberTwibbonLink">
                                                    Team Member Twibbon Link
                                                </FormLabel>
                                                <InputGroup className="input" >
                                                    <Input 
                                                    id="secondMemberTwibbonLink" 
                                                    type='text' 
                                                    placeholder='ex: https://www.instagram.com/p/CRtR9j1Mp57/' 
                                                    isRequired={true}
                                                    onChange={(e) => setSecondMemberTwibbonLink(e.target.value)} 
                                                    value={secondMemberTwibbonLink}
                                                    />
                                                </InputGroup>
                                                <FormHelperText textAlign="center">Simply copy and paste the twibbon link from your instagram and make sure your account isn't private.</FormHelperText>
                                            </FormControl>
                                        </Box>
                                        </>
                                    )
                                } else if(activeStep == 5) {
                                    return (
                                        <>
                                                <Box 
                                                    color="white"
                                                    lineHeight="150%"
                                                    textAlign="left"
                                                    mt="60px"
                                                    w={{base:"80vw", md: "30vw"}}>
                                                    <Text 
                                                        className="tertiaryFont"
                                                        fontWeight="700"
                                                        fontSize="0.75rem"
                                                    >
                                                        Item Name
                                                    </Text>
                                                    <Text
                                                        mt="0.25rem"
                                                        className="secondaryFont"
                                                        fontSize="1rem"
                                                    >
                                                        All Package Bundle
                                                    </Text>
                                                </Box>
                                                <Box
                                                    lineHeight="125%"
                                                    className="tertiaryFont"
                                                    fontWeight="700"
                                                    w={{base:"80vw", md: "30vw"}}
                                                    >
                                                    <Box mt="20px">
                                                        <Text 
                                                            color="white"
                                                            fontSize="0.75rem"
                                                        >
                                                            Registration Fee
                                                        </Text>
                                                        <Text
                                                            mt="0.25rem"
                                                            fontSize="1rem"
                                                            color="#F8C800"
                                                        >
                                                            Rp309.000,- <Text color="#FF6941">(Early Bird)</Text>
                                                        </Text>
                                                    </Box>
                                                    <Box mt="20px">
                                                        <Text 
                                                            color="white"
                                                            fontSize="0.75rem"
                                                        >
                                                            Payment Option
                                                        </Text>
                                                        <UnorderedList color="white">
                                                            <ListItem>
                                                                <Flex fontSize="1rem" align="center">
                                                                    <Text color="#F8C800">
                                                                        BCA - 5215131189
                                                                    </Text>
                                                                    <Text color="white" className="secondaryFont" fontWeight="400" lineHeight="150%" ml="0.25rem">
                                                                        a.n. Phylicia Febian
                                                                    </Text>
                                                                </Flex>
                                                            </ListItem>
                                                            {/* <ListItem>
                                                            <Flex fontSize="1rem" align="center">
                                                                    <Text color="#F8C800">
                                                                        Jenius - 13481943
                                                                    </Text>
                                                                    <Text color="white" className="secondaryFont" fontWeight="400" lineHeight="150%" ml="0.25rem">
                                                                        a.n. Antonius Prolionjo
                                                                    </Text>
                                                                </Flex>
                                                            </ListItem> */}
                                                        </UnorderedList>
                                                    </Box>
                                                </Box>
                                            {/* <Flex align="center" color="#0FA1DB" w="25vw" mt="24px">
                                                <Text fontWeight="700">
                                                    INTERNATIONAL
                                                </Text>
                                                <Divider borderColor="#0FA1DB" w="100%" ml="12px" />
                                            </Flex>
                                            <Box
                                                lineHeight="125%"
                                                className="tertiaryFont"
                                                fontWeight="700">
                                                <Box mt="20px">
                                                    <Text 
                                                        color="white"
                                                        fontSize="0.75rem"
                                                    >
                                                        Registration Fee
                                                    </Text>
                                                    <Text
                                                        mt="0.25rem"
                                                        fontSize="1rem"
                                                        color="#F8C800"
                                                    >
                                                        USD 21.00 <Text color="#FF6941">(Early Bird)</Text>
                                                    </Text>
                                                </Box>
                                                    <Text 
                                                        color="white"
                                                        fontSize="0.75rem"
                                                        mt="20px"
                                                    >
                                                        Payment Option
                                                    </Text>
                                                    <UnorderedList color="white">
                                                        <ListItem>
                                                            <Flex fontSize="0.75rem" align="center">
                                                                <Text color="#F8C800">
                                                                    PayPal - phyliciafebian@gmail.com
                                                                </Text>
                                                                <Text color="white" className="secondaryFont" fontWeight="400" lineHeight="150%" ml="10px">
                                                                    (Phylicia Febian)
                                                                </Text>
                                                            </Flex>
                                                        </ListItem>
                                                    </UnorderedList>
                                            </Box> */}
                                            <Box 
                                            color="white"
                                            lineHeight="150%"
                                            textAlign="center"
                                            mt="60px"
                                            w={{base: "80vw", md: "30vw"}}>
                                            <Text
                                                mt="0.25rem"
                                                className="secondaryFont"
                                                fontSize="1.5rem"
                                                textAlign="center"
                                                fontWeight="600"
                                            >
                                                Please send each person a copy of member`s student ID and the proof of payment to <Text color="#F8C800">inreg@sxcintersummit.com</Text>
                                            </Text>
                                        </Box>
                                        </>
                                    )
                                } else {
                                    return (
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
                                        mb="125px">
                                            Back to Events
                                        </Button>
                                    )
                                }
                            })()}
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent bgColor="#080818" pos="absolute" top="30%" borderRadius="20px" p="12px">
                                <ModalCloseButton color="#080818" bgColor="gray" borderRadius="50%" />
                                <ModalBody p="20px 40px">
                                    <Center>
                                        <Text
                                        mt="8px"
                                        textAlign="center"
                                        className="tertiaryFont"
                                        fontWeight="700"
                                        fontSize="24px"
                                        lineHeight="28px"
                                        color="#F8C800">
                                            Make sure you’ve saved the payment information!
                                        </Text>
                                    </Center>
                                    <Center>
                                        <Text
                                            mt="12px"
                                            textAlign="center"
                                            className="secondaryFont"
                                            fontSize="1rem"
                                            lineHeight="150%"
                                            color="white">
                                            Once you’ve left this page, you won’t be able to go back and view the payment detail.
                                        </Text>
                                    </Center>
                                    <Flex justify="center" mt="12px">
                                        <Button 
                                            bgColor="black"
                                            color="white"
                                            p="10px 24px" 
                                            borderRadius="4px"
                                            border="1px solid #F8C800"
                                            onClick={onClose}>
                                            Go Back
                                        </Button>
                                        <Button
                                            bgColor="#F8C800" 
                                            color="black"
                                            p="10px 24px" 
                                            borderRadius="4px" 
                                            className="yellowButtonFont"
                                            border="none"
                                            ml="20px"
                                            onClick={() => {onClose();handleSubmit(); handleNext();}}
                                        >
                                            Continue
                                        </Button>
                                    </Flex>
                                </ModalBody>
                                </ModalContent>
                            </Modal>
                            {activeStep != 6 ? <Flex justify="space-between" w="100%" mt="48px">
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
                                    isDisabled={activeStep == 1}
                                    >
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
                                    onClick={activeStep != 5 ? handleNext : onOpen}
                                    mb="36px"
                                    isDisabled={
                                        (activeStep == 4 && (firstMemberTwibbonLink == "" || secondMemberTwibbonLink == "" || leaderTwibbonLink == "")) || 
                                        (activeStep == 1 && (leaderName == "" || leaderPhone == "" || leaderAddress ==  "" || teamName == "" || leaderDateOfBirth == "" || leaderUniversity == "" || leaderFaculty == "" || leaderMajor == "")) ||
                                        (activeStep == 2 && (firstMemberName == "" || firstMemberDateOfBirth == "" || firstMemberAddress == "" || firstMemberCity == "" || firstMemberUniversity == "" || firstMemberFaculty == "" || firstMemberMajor == "" || secondMemberName == "" || secondMemberDateOfBirth == "" || secondMemberAddress == "" || secondMemberCity == "" || secondMemberUniversity == "" || secondMemberFaculty == "" || secondMemberMajor == ""))
                                    }
                                    >
                                    {activeStep != 5 ? "Next" : "Register"}
                                </Button>
                            </Flex> : <></>}
                            
                    </Center>
                    {activeStep == 4 ? <Faq faqList={faq} title={false} /> : <></>}
                <Footer />
            </Box>
        </>
    )
}

export default RegisterTeamPage