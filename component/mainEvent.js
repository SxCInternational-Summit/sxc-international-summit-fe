import { 
    Box,
    Center,
    Text,
    Flex,
    Grid,
    Image
 } from "@chakra-ui/react"

export const ProfileCard = ({path, name, achievement}) => {
    return(
        <Flex>
            <Image
                borderRadius="full"
                boxSize="150px"
                src={path}
                alt="Segun Adebayo"
                border="4.58px solid #0FA1DB"
                w={{base:"64px", md:"105px"}}
                h={{base:"64px", md:"105px"}}
            />
            <Flex ml="24px" color="white" direction="column" justify="center">
                <Text
                    className="tertiaryFont"
                    fontSize={{base:"12px", md:"24px"}}
                    lineHeight={{base:"16px", md:"28px"}}
                    fontWeight="700"
                >
                    {name}
                </Text>
                <Text
                    className="secondaryFont"
                    fontSize={{base:"12px", md:"16px"}}
                    lineHeight={{base:"16px", md:"24px"}}
                    fontWeight="400"
                    mt="4px"
                >
                    {achievement}
                </Text>
            </Flex>
        </Flex>
    )
}

export const MainEventCard = ({session, color, dayCount}) => {
    return(
        <Flex
            bgColor="#080818"
            borderRadius="20px"
            mb="80px"
            direction={{base: "column", md: "row"}}
        >
            <Box 
            w={{base:"100%", md:"114px"}} 
            h={{base: "48px", md:"100%"}} 
            borderRadius={{base:"20px 20px 0 0", md:"20px 0px 0px 20px"}} 
            background={color}>
                <Center w="100%" h="100%">
                    <Flex 
                        direction={{base: "row", md: "column"}} 
                        align="center" 
                        color="white"
                        className="tertiaryFont"
                        fontWeight="700"
                    >
                        <Text
                            fontSize="24px"
                            lineHeight="28px"
                        >
                            Day
                        </Text>
                        <Text
                            fontSize={{base:"24px", md:"64px"}}
                            lineHeight={{base:"28px", md:"68px"}}
                            mt={{base:"", md:"32px"}}
                            ml={{base:"8px", md:""}}
                        >
                            {dayCount}
                        </Text>
                    </Flex>
                    
                </Center>
            </Box>
            <Box w="100%">
                <Box p={{base:"16px",md:"50px 70px 50px 86px"}}>
                    {session.map((el, index) => {
                        return(
                            <Box key={index} mb={{base:"16px", md:"80px"}}>
                                <Text
                                    className="tertiaryFont"
                                    fontSize={{base:"12px", md:"16px"}}
                                    lineHeight={{base:"16px", md:"20px"}}
                                    fontWeight="700"
                                    color="#0FA1DB"
                                    textAlign={{base:"center", md:"left"}}
                                >
                                    {el.date}
                                </Text>
                                <Text
                                    className="tertiaryFont"
                                    fontSize={{base:"16px", md:"36px"}}
                                    lineHeight={{base:"20px", md:"42px"}}
                                    fontWeight="700"
                                    color="#F8C800"
                                    mt={{base:"8px", md:"12px"}}
                                    textAlign={{base:"center", md:"left"}}
                                >
                                    {el.title}
                                </Text>
                                <Text
                                    className="secondaryFont"
                                    fontSize={{base:"12px", md:"16px"}}
                                    lineHeight={{base:"16px", md:"24px"}}
                                    fontWeight="400"
                                    mt="12px"
                                    color="white"
                                    textAlign={{base:"center", md:"left"}}
                                >
                                    {el.subtitle}
                                </Text>
                                <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}} mt="40px" columnGap="90px" rowGap="36px">
                                    {el.speakers.map((speaker, index) => {
                                        return(
                                            <ProfileCard key={index} path={speaker.src} name={speaker.name} achievement={speaker.achievement} />
                                        )
                                    })}
                                </Grid>
                            </Box>
                        )
                    })}
                    
                </Box>
            </Box>
        </Flex>
    )
}

const MainEventList = ({days}) => {
    return(
        <Box mt="64px">
            <Center>
                <Text
                    fontSize={{base:"24px", md:"36px"}}
                    lineHeight={{base:"28px", md:"42px"}}
                    className="tertiaryFont"
                    fontWeight="700"
                    color="#F8C800"
                    >
                        The Events
                </Text>
            </Center>
            <Box mt="64px" mx={{base:"16px",md:"120px"}}>
                {days.map((el, index) => {
                    return(
                        <MainEventCard key={index} session={el.session} color={el.color} dayCount={el.dayCount} />
                    )
                })}
            </Box>
        </Box>
    )
}
export default MainEventList