import {
  Box,
  Text,
  Link,
  Image
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

export default Card;