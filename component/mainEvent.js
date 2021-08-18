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
            />
            <Flex ml="24px" color="white" direction="column" justify="center">
                <Text
                    className="tertiaryFont"
                    fontSize="24px"
                    lineHeight="28px"
                    fontWeight="700"
                >
                    {name}
                </Text>
                <Text
                    className="secondaryFont"
                    fontSize="1rem"
                    lineHeight="150%"
                    fontWeight="400"
                    mt="4px"
                >
                    {achievement}
                </Text>
            </Flex>
        </Flex>
    )
}

export const MainEventCard = ({session, color}) => {
    return(
        <Flex
            bgColor="#080818"
            borderRadius="20px"
            mb="80px"
        >
            <Box w="114px" borderRadius="20px 0px 0px 20px" background={color}>
                <Center w="100%" h="100%">
                    <Flex 
                        direction="column" 
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
                            fontSize="64px"
                            lineHeight="68px"
                            mt="32px"
                        >
                            1
                        </Text>
                    </Flex>
                    
                </Center>
            </Box>
            <Box w="100%">
                <Box p="50px 70px 50px 86px">
                    {session.map((el, index) => {
                        return(
                            <Box key={index} mb="80px">
                                <Text
                                    className="tertiaryFont"
                                    fontSize="16px"
                                    lineHeight="20px"
                                    fontWeight="700"
                                    color="#0FA1DB"
                                >
                                    {el.date}
                                </Text>
                                <Text
                                    className="tertiaryFont"
                                    fontSize="36px"
                                    lineHeight="42px"
                                    fontWeight="700"
                                    color="#F8C800"
                                    mt="12px"
                                >
                                    {el.title}
                                </Text>
                                <Text
                                    className="secondaryFont"
                                    fontSize="1rem"
                                    lineHeight="150%"
                                    fontWeight="400"
                                    mt="12px"
                                    color="white"
                                >
                                    {el.subtitle}
                                </Text>
                                <Grid templateColumns="repeat(2, 1fr)" mt="40px" columnGap="90px" rowGap="36px">
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
            <Box mt="64px" mx="120px">
                {days.map((el, index) => {
                    return(
                        <MainEventCard key={index} session={el.session} color={el.color} />
                    )
                })}
            </Box>
        </Box>
    )
}
export default MainEventList