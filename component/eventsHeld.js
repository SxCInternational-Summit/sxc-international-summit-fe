import { Center, Text } from "@chakra-ui/react"
import { FlexCard } from "./card"

const EventsHeld = ({title, props}) => {
    return(
        <>
        <Center
        bgColor="#04040C"
        flexDirection="column"
        px={{base: "36px", md:"20%"}}
        >
            <Text
                color="#F8C800"
                className="tertiaryFont"
                fontSize={{base:"24px", md:"36px"}}
                lineHeight={{base:"28px", md:"42px"}}
                fontWeight="700"
                mt={{base:"24px", md:"80px"}}
            >
                {title}
            </Text>
            {props.map((prop, index) => {
                return(
                    <FlexCard 
                    key={index} 
                    image={prop.src} 
                    title={prop.speaker ? prop.speaker : prop.title}
                    subtitle={prop.subtitle} />
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