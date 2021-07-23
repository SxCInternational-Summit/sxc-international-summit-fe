import { Center, Text } from "@chakra-ui/react"
import { FlexCard } from "./card"

const EventsHeld = ({props}) => {
    return(
        <>
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
                Meet The Speakers
            </Text>
            {props.map((prop, index) => {
                return(
                    <FlexCard 
                    key={index} 
                    image={prop.src} 
                    title={prop.speaker}
                    subtitle={prop.title} />
                )
            })}
        </Center>
        {/* <Center
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
                Webinar Brought By
            </Text>
            {props.map((prop, index) => {
                return(
                    <FlexCard 
                    key={index} 
                    image={prop.src} 
                    title={prop.speaker}
                    subtitle={prop.title} />
                )
            })}
        </Center> */}
        </>
    )
}
export default EventsHeld