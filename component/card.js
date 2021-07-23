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
        <Box m="36px" p="12px 36px">
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
                    mt="12px"
                    fontSize="24px"
                    lineHeight="28px"
                    fontWeight="700"
                    >
                        {title}
                    </Text> : 
                    <Text
                    className="tertiaryFont"
                    mt="12px"
                    fontSize="24px"
                    lineHeight="28px"
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
                mt="12px"
                lineHeight="16px">
                    {date + "  |  " + fee}
                </Text>
                <Text
                mt="12px"
                className="secondaryFont"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="400"
                mb="12px">
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
            templateColumns={{base: "repeat(1, 1fr)", md:"repeat(2, 1fr)"}}
            mt={{base:"24px", md:"64px"}}
            w={{base:"60%", md:""}}>
                <Image 
                src={image} 
                alt="" 
                borderRadius="12px" 
                textAlign="right" 
                w="100%" />
                <Box ml={{base: "", md:"16%"}} mt={{base: "12px", md:""}} alignSelf="center" textAlign={{base: "center", md: ""}}>
                    <Text
                    className="tertiaryFont"
                    fontSize={{base:"24px", md:"36px"}}
                    lineHeight={{base:"28px", md:"42px"}}
                    fontWeight="700"
                    color="#0FA1DB">
                        {title}
                    </Text>
                    <Text
                    mt={{base:"8px", md:"16px"}}
                    fontSize={{base:"0.75rem", md:"1rem"}}
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
export {FlexCard};