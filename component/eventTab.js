import { 
    Flex,
    Icon,
    Box,
    Text,
    Center,
    Circle,
    Divider,
    Image,
    Grid,
    Button
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaMicrophone } from "react-icons/fa"

const EventTab = () => {
    const [activeTab, setactiveTab] = useState("preEvent")
    const router = useRouter()
    

    const preEventCaption = "There are three events highlighted in this year's international summit which consist of Pre-Event, Product Branding Competition, and Main Events. Additionally, there will be webinars and coaching clinics conducted to further upgrade your skill in managing as well as maintaining your product idea. We can't wait to see you in our events. Click the button below to learn more."
    const competitionCaption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const mainEventCaption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const [activeCaption, setactiveCaption] = useState(preEventCaption)
    return(
        <Box bgColor="black"  pt="90px">
            <Center
                className="tertiaryFont"
                fontWeight="700"
                fontSize="36px"
                lineHeight="52px"
                color="white"
            >
                What's up with this year's International Summit?
            </Center>
            <Flex direction={{base:"row", md:"column"}}>
                <Flex 
                mt="40px" 
                justify="space-between" 
                px={{base:"0", md:"256px"}}
                direction={{base:"column", md:"row"}}>
                    <Box>
                        <Circle 
                            ml="16px"
                            size="80px" 
                            bg={activeTab === "preEvent" ? "linear-gradient(135deg, #F8C800 0%, #FF6941 100%)" : "#0FA1DB"}
                            color="white"
                            onClick={() => {setactiveTab("preEvent"); setactiveCaption(preEventCaption)}}
                            cursor="pointer">
                            <Icon as={FaMicrophone} fontSize="30px" />
                            
                        </Circle>
                    </Box>
                    <Divider transform="translateY(40px)" mx="20px" />
                    <Box>
                        <Circle 
                            size="80px" 
                            bg={activeTab === "competition" ? "linear-gradient(135deg, #F8C800 0%, #FF6941 100%)" : "#0FA1DB"}
                            color="white"
                            onClick={() => {setactiveTab("competition"); setactiveCaption(competitionCaption)}}
                            cursor="pointer">
                            <Icon as={FaMicrophone} fontSize="30px" />
                        </Circle>
                    </Box>
                    <Divider transform="translateY(40px)" mx="20px" />
                    <Box>
                        <Circle 
                            mr="16px"
                            size="80px" 
                            bg={activeTab === "mainEvent" ? "linear-gradient(135deg, #F8C800 0%, #FF6941 100%)" : "#0FA1DB"}
                            color="white"
                            onClick={() => {setactiveTab("mainEvent"); setactiveCaption(mainEventCaption)}}
                            cursor="pointer">
                            <Icon as={FaMicrophone} fontSize="30px" />
                        </Circle>
                    </Box>
                </Flex>
                <Flex justifyContent="space-between" px="256px" direction={{base:"column", md:"row"}}>
                    <Box>
                        <Text
                            mt="12px"
                            textAlign="center"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color="white"
                        >
                            Pre-Event
                        </Text>
                        <Text
                            mt="4px"
                            textAlign="center"
                            className="secondaryFont"
                            fontWeight="400"
                            fontSize="1rem"
                            lineHeight="150%"
                            color="white"
                        >
                            11-12 June
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            mt="12px"
                            textAlign="center"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color="white"
                        >
                            Competition
                        </Text>
                        <Text
                            mt="4px"
                            textAlign="center"
                            className="secondaryFont"
                            fontWeight="400"
                            fontSize="1rem"
                            lineHeight="150%"
                            color="white"
                        >
                            11-12 June
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            mt="12px"
                            textAlign="center"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color="white"
                        >
                            Main Event
                        </Text>
                        <Text
                            mt="4px"
                            textAlign="center"
                            className="secondaryFont"
                            fontWeight="400"
                            fontSize="1rem"
                            lineHeight="150%"
                            color="white"
                        >
                            11-12 June
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Grid 
            px={{base:"0", md:"121px"}} 
            mx={{base:"30px", md:"0"}} 
            templateColumns={{base:"repeat(1, 1fr)" , md:"repeat(2, 1fr)"}} 
            bgColor={{base:"#080818", md:"black"}} 
            borderRadius="16px" 
            gap="87px" 
            mt='126px'
            overflow="hidden">
                <Center>    
                    <Text
                        className="secondaryFont"
                        fontWeight="400"
                        fontSize="24px"
                        lineHeight="28px"
                        color="white"
                        textAlign="justify"
                        m={{base:"16px 36px", md:""}}
                    >
                        {activeCaption}
                    </Text>
                </Center>
                <Image src="/images/eventLanding.svg" w="100%" alt=""/>
            </Grid>
            <Flex
                backgroundImage={`url("/images/landing.svg")`}
                height="490px"
                justify="space-evenly"
                mt={{base:"44px", md:'131px'}}
                pt={{base:"130px", md:"0"}}
                px={{base:"67px", md:"0"}}
                direction={{base:"column", md:"row"}}
            >
                <Center
                    className="tertiaryFont"
                    fontWeight="700"
                    fontSize={{base:"36px", md:"64px"}}
                    lineHeight={{base:"42px", md:"68px"}}
                    color="white"
                    textAlign={{base:"center", md:"left"}}
                    maxW={{base:"100%", md:"30%"}}
                >
                    What are you waiting for?
                </Center>
                <Center>
                    <Button
                        bgColor="#F8C800" 
                        color="black"
                        p={{base:"24px 24px"}} 
                        borderRadius="4px" 
                        className="yellowButtonFont"
                        border="none"
                        mb={{base:"67px", md:"0"}}
                        onClick={() => {router.push("/event")}}>
                            Go To Events
                    </Button>
                </Center>
            </Flex>
        </Box>
    )
}
export default EventTab