import { Box, Center, Text, Button } from "@chakra-ui/react"
import { useRouter } from "next/router";

const EventComponent = () => {
    const router = useRouter()
    return(
        <Box w="100%" bgColor="#04040C" pb="133px"  >
            <Center
                borderRadius="20px"
                backgroundImage="url(/images/eventComponent.svg)" 
                h="216px" 
                mx="10%" 
                bgRepeat="no-repeat" 
                bgSize="cover"
                flexDirection="column"
                color="white">

                <Text
                    fontSize={{base: "20px", md:"36px"}}
                    lineHeight="42px"
                    className="tertiaryFont"
                    fontWeight="bold"
                    textAlign="center"
                >
                    Curious about other events?
                </Text>

                <Text
                    fontSize={{base: "0.7rem", md:"1rem"}}
                    lineHeight="24px"
                    className="secondaryFont"
                    fontWeight="400"
                    mt="16px"
                    textAlign="center"
                >
                    Let’s go back to the events page and look for other events!
                </Text>
                <Button 
                    onClick={() => router.push("/event")}
                    mt="16px"
                    color="black"
                    bgColor="#F8C800"
                    p="10px 24px"
                    className="tertiaryFont"
                    fontWeight="bold"
                    fontSize="16px"
                    lineHeight="20px"
                >
                    Events Page
                </Button>
            </Center>
        </Box>
    )
}
export default EventComponent