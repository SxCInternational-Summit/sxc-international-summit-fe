import { Button, Center, Flex, Box, Image, Text, UnorderedList, ListItem, Circle, Stack, useMediaQuery, Grid, GridItem } from "@chakra-ui/react"
import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"
import Timeline from "../../component/timeline"

import Head from 'next/head'
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"

const { PROD_URL } = process.env

const CompetitionPage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const router = useRouter()

    const backgroundImageURL = "/images/competitionBackground.svg"
    const events = [
        {
            title: "Product Branding Competition",
            src: "/images/event1.svg",
            subtitle: "StudentsxCEOs International Summit Competition is a case-based competition consisting of two stages, proposal stage and pitching stage.",
            type: "Competition",
            date: "26 July 2021 - 10 October 2021",
            fee: "IDR 279.000",
            linkTo: 'https://sxcinternationalsummit.vercel.app/competition/'
          }
    ]

    const eventHeld = [
        {
            title: "Interactive Coaching Clinics",
            subtitle: "We are going to hold three coaching clinics in a workshop fashion with experienced professionals to facilitate the participants in facing the competition and give the best results possible for the case that needs to be solved.",
            src: "/images/coaching.jfif"
        },
        {
            title: "Proposal Formulation and Submission",
            subtitle: "Putting ideas into a structurized plan, this is the time for participants to bring their best solutions, and propose them in a proposal format. The top 10 standing out proposals will be selected to present in the grand final stage.",
            src: "/images/proposal.jfif"
        },
        {
            title: "The Grand Final",
            subtitle: "Speak confidently and pitch eloquently. The final stage will present the top 10 finalists to present their proposed ideas in front of the professional judges and the public streamers to determine who is going to be the one taking the winner title in the awarding ceremony.",
            src: "/images/presentation.jfif"
        },
    ]

    const faq =[
		{
			question: "What language that will be used during the competition?",
			answer: "The whole series of events in competition will use English. The making of proposals and pitch decks will also be in English."
		},
		{
			question: "Who can join the competition?",
			answer: "This competition is open to all active Indonesian and international students in any major studying in a Bachelor (S1) Program or Diploma (D1, D2, D3, D4) students and need to have Student Id Cards."
		},
		{
			question: "What is the competition format?",
			answer: "The format of this competition is in teams. A team will consists of 3 members including 1 leader. Each team member can be from a different University/Major/Institution/Country."
		},
        {
			question: "What are the stages of this competition?",
			answer: "This competition will consist of two stages, proposal stage and pitching stage."
		},
        {
			question: "What are the event series that are mandatory for the participants?",
			answer: "It is mandatory for the participants to attend pre-event, all the coaching clinics, and submit the proposal."
		},
        {
			question: "Is there any event besides the competition?",
			answer: "You can still join this competition because there will be coaching clinics with different topics about branding for your preparation before the competition."
		},
        {
			question: "What if the participants don’t have any knowledge about branding?",
			answer: "Yes, there will be Pre-Event, Chambers & Networking Session, Virtual Company Visit, and International Conference & Awarding Ceremony. Stay tuned for our awesome speakers, session, and many more prizes!"
		},
        {
			question: "How to register my team?",
			answer: "You can register by simply clicking the register button above."
		},
	]

    const timelines = [
        {
            title : "Early bird Registration",
            date: "26 July 2021 - 14 August 2021"
        },
        {
            title : "Normal Bird Registration",
            date: "15 August 2021 - 27 August 2021"
        },
        {
            title : "Late Bird Registration and Case Distribution",
            date: "28 August - 3 September 2021"
        },
        {
            title : "Coaching Clinic 1",
            date: "4 September 2021"
        },
        {
            title : "Coaching Clinic 2",
            date: "11 September 2021"
        },
        {
            title : "Proposal Submission",
            date: "25 September 2021"
        },
        {
            title : "Coaching Clinic 3, Finalist Annoucement, Technical Meeting",
            date: "2 October 2021"
        },
        {
            title : "Pitch Deck Submission",
            date: "8 October 2021"
        },
        {
            title : "The Grand Final",
            date: "10 October 2021"
        }
        
    ]

    return(
    <>
        <NextSeo
            title="Competition | SxCInternational Summit 2021"
        />
        <Navbar />
        <Hero 
            title=" International Product Branding Competition"
            subtitle="StudentsxCEOs International Summit Competition is a case-based competition consisting of two stages, proposal stage and pitching stage."
            image={backgroundImageURL}
            buttons={true}
            guidebookURL="https://drive.google.com/file/d/1O0_n4O6nhL4o6fV_sQlEm6BJksRk5LZ-/view"
        />
        <Box bgColor="#04040C">
            <Center 
                pt="120px"
                className="tertiaryFont"
                fontWeight="700"
                fontSize="36px"
                lineHeight="42px"
                color="#F8C800"
            >
                Total Prize
            </Center>
            {isMobile ? 
            <Center pt="32px" mx="54px">
                <Grid templateColumns="repeat(2, 1fr)" gap="12px">
                    <GridItem bgColor="#080818" borderRadius="16px" colSpan={2} p="24px 35px">
                        <Center>
                            <Image src="/images/firstPlace.svg" alt="" w="180px" />
                        </Center>
                        <Center
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="36px"
                            lineHeight="42px"
                            color="#F8C800"
                            mt="48px"
                            >
                            1st Place
                        </Center>   
                        <Center
                            className="secondaryFont"
                            fontWeight="400"
                            fontSize="24px"
                            lineHeight="28px"
                            color="white"
                            mb="12px"
                        >
                            Rp5.000.000+ ($345+)
                        </Center>
                    </GridItem>
                    <GridItem p="24px 35px" bgColor="#080818" borderRadius="16px">
                        <Center>
                            <Image src="/images/secondPlace.svg" alt="" w="80px" />
                        </Center>
                            
                            <Center
                                className="tertiaryFont"
                                fontWeight="700"
                                fontSize="16px"
                                lineHeight="24px"
                                color="#0FA1DB"
                                mt="48px"
                            >
                                2nd Place
                            </Center>   
                            <Center
                                className="secondaryFont"
                                fontWeight="400"
                                fontSize="16px"
                                lineHeight="24px"
                                color="white"
                                mb="12px"
                            >
                                Rp3.500.000+ ($240+)
                            </Center>
                        </GridItem>
                        <GridItem p="24px 35px" bgColor="#080818" borderRadius="16px">
                            <Center>
                                <Image src="/images/thirdPlace.svg" alt="" w="80px" />
                            </Center>
                            <Center
                                className="tertiaryFont"
                                fontWeight="700"
                                fontSize="16px"
                                lineHeight="24px"
                                color="#0FA1DB"
                                mt="48px"
                            >
                                3rd Place
                            </Center>   
                            <Center
                                className="secondaryFont"
                                fontWeight="400"
                                fontSize="16px"
                                lineHeight="24px"
                                color="white"
                                mb="12px"
                            >
                                Rp2.500.000+ ($170+)
                            </Center>
                        </GridItem>
                </Grid>
            </Center> : 
                <Center>
                    <Flex align="center" mt="60px">
                        <Box p="24px 35px" bgColor="#080818" borderRadius="16px">
                            <Image src="/images/secondPlace.svg" alt="" />
                            <Center
                                className="tertiaryFont"
                                fontWeight="700"
                                fontSize="24px"
                                lineHeight="28px"
                                color="#0FA1DB"
                                mt="48px"
                            >
                                2nd Place
                            </Center>   
                            <Center
                                className="secondaryFont"
                                fontWeight="400"
                                fontSize="24px"
                                lineHeight="28px"
                                color="white"
                                mb="12px"
                            >
                                Rp3.500.000+ ($240+)
                            </Center>
                        </Box>
                        <Box p="24px 35px" bgColor="#080818" borderRadius="16px" mx="87px">
                            <Image src="/images/firstPlace.svg" alt="" />
                            <Center
                                className="tertiaryFont"
                                fontWeight="700"
                                fontSize="36px"
                                lineHeight="42px"
                                color="#F8C800"
                                mt="48px"
                            >
                                1st Place
                            </Center>   
                            <Center
                                className="secondaryFont"
                                fontWeight="400"
                                fontSize="24px"
                                lineHeight="28px"
                                color="white"
                                mb="12px"
                            >
                                Rp5.000.000+ ($345+)
                            </Center>
                        </Box>
                        <Box p="24px 35px" bgColor="#080818" borderRadius="16px">
                            <Image src="/images/thirdPlace.svg" alt="" />
                            <Center
                                className="tertiaryFont"
                                fontWeight="700"
                                fontSize="24px"
                                lineHeight="28px"
                                color="#0FA1DB"
                                mt="48px"
                            >
                                3rd Place
                            </Center>   
                            <Center
                                className="secondaryFont"
                                fontWeight="400"
                                fontSize="24px"
                                lineHeight="28px"
                                color="white"
                                mb="12px"
                            >
                                Rp2.500.000+ ($170+)
                            </Center>
                        </Box>
                    </Flex>
                </Center>
            }
        </Box>
        <Box bgColor="#04040C" px="20%">
            <Center
                pt="120px"
                className="tertiaryFont"
                fontWeight="700"
                fontSize="36px"
                lineHeight="42px"
                color="#F8C800"
                textAlign="center"
            >
                Case Collaborator
            </Center>
            <Center mt="60px">
                <Image src="/images/nutrifood2.png" alt="" />
            </Center>
            <Text
                className="secondaryFont"
                fontWeight="400"
                fontSize="16px"
                lineHeight="150%"
                color="white"
                textAlign="center"
                mt="40px"
            >
                {`Nutrifood is a Fast Moving Consumer Goods (FMCG) company that has been established for 40 years that operates in healthy necesities. In accordance to their mission "Inspiring You a Nutritious Life", Nutrifood has been striving in accomodating everyone a healthy and joyful life through their public presence and also products including L-Men, Hilo, Tropicana Slim, W-Dank, Nutrisari and also newly established Lokalate products. Furthermore their implementation of eco-friendly business practices based on their commitment towards UN Sustainable Development Goals, Nutrifood present a chance for everyone to have a healthy, nutritious and joyful life.`}
            </Text>
        </Box>
        <Box bgColor="#04040C" px="20%">
            <Center 
                className="gradientOrange"
                fontSize="48px"
                lineHeight="52px"
                pt="120px"
                textAlign="center"
                >
                Buy Bundle Packs
            </Center>
            <Center
                mt="16px"
                className="secondaryFont"
                fontWeight="400"
                fontSize="16px"
                lineHeight="150%"
                color="white"
                textAlign="center"
            >
                Save some time and money by buying our bundle packs!
            </Center>
            <Center>
                <Flex mt="70px" direction={{base:"column", md:"row"}}>
                    <Box p="28px 24px" border="2px solid #0FA1DB" borderRadius="16px" w="100%" position="relative">
                        <Circle size="70px" bg="#FF6941" color="white" position="absolute" top="-35px" right="-35px">
                            <Flex direction="column">
                                <Text
                                    className="tertiaryFont"
                                    fontWeight="700"
                                    fontSize="24px"
                                    textAlign="center"
                                    position="relative"
                                    transform="translateY(6px)"
                                >
                                    
                                    <Text
                                        className="secondaryFont"
                                        fontWeight="400"
                                        fontSize="12px"
                                        textAlign="center"
                                        position="absolute"
                                        bottom="28px"
                                        left="20%"
                                    >
                                        Save
                                    </Text>
                                    60k
                                </Text>
                            </Flex>
                        </Circle>
                        <Text
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color="#F8C800"
                        >
                            All Package
                        </Text>
                        <UnorderedList 
                            mt="12px" 
                            color="white"
                            fontWeight="400"
                            fontSize="16px"
                            lineHeight="150%"
                            mb="120px"
                        >
                            <ListItem>Get Access to All Events</ListItem>
                            <ListItem>Applies to all team members</ListItem>
                            <ListItem>Indonesia region only</ListItem>
                        </UnorderedList>
                        <Text
                            bottom="80px"
                            mt="12px"
                            position="absolute"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="16px"
                            lineHeight="20px"
                            color="white"
                        >
                            Rp399.000,- <Text color="#FF6941">(Late Bird)</Text>
                        </Text>
                        <Button
                            color="black"
                            position="absolute"
                            bottom="20px"
                            onClick={() => router.push('/competition/register-bundle')}
                            bgColor="#F8C800"
                            p="10px 24px"
                            className="tertiaryFont"
                            fontWeight="bold"
                            fontSize="16px"
                            lineHeight="20px"
                            mt="12px"
                        >
                            Get Bundle
                        </Button>
                    </Box>
                    <Box p="28px 24px" border="2px solid #0FA1DB" borderRadius="16px" w="100%" mx={{base:"0", md:"48px"}} my={{base:"48px", md:"0"}} position="relative">
                    <Circle size="70px" bg="#FF6941" color="white" position="absolute" top="-35px" right="-35px">
                            <Flex direction="column">
                                <Text
                                    className="tertiaryFont"
                                    fontWeight="700"
                                    fontSize="24px"
                                    textAlign="center"
                                    position="relative"
                                    transform="translateY(6px)"
                                >
                                    
                                    <Text
                                        className="secondaryFont"
                                        fontWeight="400"
                                        fontSize="12px"
                                        textAlign="center"
                                        position="absolute"
                                        bottom="28px"
                                        left="20%"
                                    >
                                        Save
                                    </Text>
                                    20k
                                </Text>
                            </Flex>
                        </Circle>
                        <Text
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color="#F8C800"
                        >
                            Competition + Totebags
                        </Text>
                        <UnorderedList 
                            mt="12px" 
                            color="white"
                            fontWeight="400"
                            fontSize="16px"
                            lineHeight="150%"
                            mb="120px"
                        >
                            <ListItem>Competition Access</ListItem>
                            <ListItem>Also comes with a totebag for each member</ListItem>
                            <ListItem>Indonesia region only</ListItem>
                        </UnorderedList>
                        <Text
                            bottom="80px"
                            mt="12px"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="16px"
                            lineHeight="20px"
                            color="white"
                            position="absolute"
                        >
                            Rp449.000,- <Text color="#FF6941">(Late Bird)</Text>
                        </Text>
                        <Button
                            color="black"
                            position="absolute"
                            bottom="20px"
                            onClick={() => router.push('/competition/register-merch')}
                            bgColor="#F8C800"
                            p="10px 24px"
                            className="tertiaryFont"
                            fontWeight="bold"
                            fontSize="16px"
                            lineHeight="20px"
                            mt="12px"
                        >
                            Get Bundle
                        </Button>
                    </Box>
                    <Box p="28px 24px" border="2px solid #0FA1DB" borderRadius="16px" w="100%" position="relative">
                    {/* <Circle size="70px" bg="#FF6941" color="white" position="absolute" top="-35px" right="-35px">
                            <Flex direction="column">
                                <Text
                                    className="tertiaryFont"
                                    fontWeight="700"
                                    fontSize="24px"
                                    textAlign="center"
                                    position="relative"
                                    transform="translateY(6px)"
                                >
                                    
                                    <Text
                                        className="secondaryFont"
                                        fontWeight="400"
                                        fontSize="12px"
                                        textAlign="center"
                                        position="absolute"
                                        bottom="28px"
                                        left="20%"
                                    >
                                        Save
                                    </Text>
                                    50%
                                </Text>
                            </Flex>
                        </Circle> */}
                        <Text
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color="#F8C800"
                        >
                            Competition
                        </Text>
                        <UnorderedList 
                            mt="12px" 
                            color="white"
                            fontWeight="400"
                            fontSize="16px"
                            lineHeight="150%"
                            mb="120px"
                        >
                            <ListItem>Access to Pre-event webinar and conference (day 3)</ListItem>
                            <ListItem>Available for International and Indonesia</ListItem>
                        </UnorderedList>
                        <Text
                            mt="12px"
                            bottom="80px"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="16px"
                            lineHeight="20px"
                            color="white"
                            pos="absolute"
                        >
                            Rp319.000,- / 26 USD <Text color="#FF6941">(Late Bird)</Text>
                        </Text>
                        <Button
                            color="black"
                            position="absolute"
                            bottom="20px"
                            onClick={() => router.push('/competition/register-team')}
                            bgColor="#F8C800"
                            p="10px 24px"
                            className="tertiaryFont"
                            fontWeight="bold"
                            fontSize="16px"
                            lineHeight="20px"
                            mt="12px"
                        >
                            Get Bundle
                        </Button>
                    </Box>
                </Flex>
            </Center>
            
        </Box>
        
        <EventsHeld title="Competition Highlights" props={eventHeld}/>
        <Timeline type="Competition" events={timelines} />
        <EventList events={events} />
        <Faq faqList={faq} title={true} />
        <EventComponent />
        <Footer />
    </>
    )
}
export default CompetitionPage