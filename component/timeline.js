import { 
    Center,
    Text,
    Box,
    HStack,
    Stack,
    Circle,
    StackDivider
} from "@chakra-ui/react"

const Timeline = ({type, events}) => {

    return(
        <Box bgColor="#04040C" pt="120px">
            <Center>
                <Text
                    fontSize={{base:"24px", md:"36px"}}
                    lineHeight={{base:"28px", md:"42px"}}
                    className="tertiaryFont"
                    fontWeight="700"
                    color="#F8C800"
                    >
                    {`${type} Timeline`}
                </Text>
            </Center>
            <HStack 
                ml={{base:"0", md:"187px"}} 
                mt="96px" 
                overflowX="auto"
                alignItems="flex-start"
                pb="60px"
                >
                {events.map((el, index) => {
                    return(
                        <Stack key={index} minW="210px">
                            <Circle size="24px" bg="#0FA1DB" transform="translateX(30px)" mb="24px"></Circle>
                            <Text
                                className="primaryFont"
                                fontWeight="800"
                                color="white"
                                fontSize="1rem"
                                lineHeight="20px"
                                w="100%"
                            >
                                {el.date}
                            </Text>
                            <Text
                                className="secondaryFont"
                                fontSize="1rem"
                                lineHeight="150%"
                                color="white"
                                fontWeight="400"
                                mt="12px"
                                w="50%"
                            >
                                {el.title}
                            </Text>
                        </Stack>
                    )
                })}
            </HStack>
        </Box>
    )
}

export default Timeline