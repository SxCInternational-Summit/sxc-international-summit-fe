import { Center, Text } from "@chakra-ui/react"
import { FlexCard } from "./card"

const EventsHeld = ({events}) => {
    return(
        <Center
        bgColor="#04040C"
        flexDirection="column"
        px="20%"
        >
            <Text
            color="yellow"
            className="tertiaryFont"
            fontSize="36px"
            lineHeight="42px"
            fontWeight="700"
            mt="80px"
            >
                What are the held events?
            </Text>
            {events.map((event, index) => {
                return(
                    <FlexCard 
                    key={index} 
                    image={event.src} 
                    title={event.title}
                    subtitle={event.caption} />
                )
            })}
        </Center>
    )
}
export default EventsHeld