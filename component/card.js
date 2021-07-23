import {
  Box,
  Text,
  Link,
  Image,
  Grid,
} from '@chakra-ui/react';

const Card = ({title, image, caption, type, date, fee, numOfPreEvent}) => {
  return (
    <Box borderRadius="16px" bgColor="#080818" overflow="hidden" h="fit-content">
        <Image src={image} alt="" w="100%"/>
        <Box m="36px">
            <Text 
                bgColor={type === "Pre-Event" ? 'white' : "#FF6941"} 
                p="8px 20px" 
                color={type === "Pre-Event" ? "black" : "white"}
                mt="12px"
                fontSize="12px"
                className="tertiaryFont"
                fontWeight="700"
                lineHeight="16px"
                borderRadius="20px"
                w="fit-content">
                {type}
            </Text>
            <Box color="white">
                {numOfPreEvent === 0 ? 
                    <Text
                    className="tertiaryFont"
                    fontSize="24px"
                    fontWeight="700"
                    >
                        {title}
                    </Text> : 
                    <Text
                    className="tertiaryFont"
                    fontSize="24px"
                    fontWeight="700"
                    >
                        {numOfPreEvent === 0 ? "" : "Pre-Event #" + numOfPreEvent}
                        <br></br>
                        {title}
                    </Text>
                }
                <Text
                fontWeight="900"
                className="primaryFont"
                fontSize="12px"
                lineHeight="16px">
                    {date + "  |  " + fee}
                </Text>
                <Text
                className="secondaryFont"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="400"
                mb="20px">
                    {caption}
                </Text>
            </Box>
            
            <Link 
                cursor="pointer" 
                bgColor="#F8C800" 
                p="10px 24px" 
                borderRadius="4px"
                className="yellowButtonFont"
                lineHeight="20px">
                Join Event
            </Link>
        </Box>
        
    </Box>
  );
}

const FlexCard = ({image, title, subtitle}) =>{
    return(
            <Grid
            templateColumns="repeat(2, 1fr)"
            mt="64px">
                <Image 
                src={image} 
                alt="" 
                borderRadius="12px" 
                textAlign="right" 
                w="100%" />
                <Box ml="16%" alignSelf="center">
                    <Text
                    className="tertiaryFont"
                    fontSize="36px"
                    lineHeight="42px"
                    fontWeight="700"
                    color="#0FA1DB">
                        {title}
                    </Text>
                    <Text
                    mt="16px"
                    fontSize="16px"
                    lineHeight="150%"
                    className="secondaryFont"
                    color="white"
                    fontWeight="400">
                        {subtitle}
                    </Text>
                </Box>
            </Grid>
        
    )
}

const RoundCard = ({image, title, subtitle}) => {
    return (
        <Grid
            templateColumns="repeat(2, 1fr)"
            mt="64px">
                <Image 
                src={image} 
                alt="" 
                borderRadius="full" 
                boxSize="150px"
                textAlign="right" 
                w="100%" />
                <Box ml="16%" alignSelf="center">
                    <Text
                    className="tertiaryFont"
                    fontSize="36px"
                    lineHeight="42px"
                    fontWeight="700"
                    color="#0FA1DB">
                        {title}
                    </Text>
                    <Text
                    mt="16px"
                    fontSize="16px"
                    lineHeight="150%"
                    className="secondaryFont"
                    color="white"
                    fontWeight="400">
                        {subtitle}
                    </Text>
                </Box>
        </Grid>
    )
}

export default Card;
export {FlexCard, RoundCard};