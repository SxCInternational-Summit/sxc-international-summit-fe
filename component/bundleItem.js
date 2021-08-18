import { 
    Box,
    Circle,
    Flex,
    Text,
    UnorderedList, 
    ListItem,
    Button
} from "@chakra-ui/react"


const BundleItem =({title, titleColor, advantages, finalPrice, originalPrice, path, saving, priceDescription}) => {
    return(
        <Box p="28px 24px" border="2px solid #0FA1DB" borderRadius="16px" maxW="fit-content" position="relative">
            {saving ? <Circle size="70px" bg="#FF6941" color="white" position="absolute" top="-35px" right="-35px">
                            <Flex direction="column">
                                <Text
                                    className="tertiaryFont"
                                    fontWeight="700"
                                    fontSize="24px"
                                    textAlign="center"
                                    position="relative"
                                    transform="translateY(6px)"
                                >
                                    
                                    <Text
                                        className="secondaryFont"
                                        fontWeight="400"
                                        fontSize="12px"
                                        textAlign="center"
                                        position="absolute"
                                        bottom="28px"
                                        left="20%"
                                    >
                                        Save
                                    </Text>
                                    {saving}
                                </Text>
                            </Flex>
                        </Circle> : <></>}
                        
                        <Text
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="28px"
                            color={titleColor}
                        >
                            {title}
                        </Text>
                        <UnorderedList 
                            mt="12px" 
                            color="white"
                            fontWeight="400"
                            fontSize="16px"
                            lineHeight="150%"
                            mb="120px"
                        >
                            {advantages.map((el, index) => {
                                return(
                                    <ListItem key={index}>{el}</ListItem>
                                )
                            })}
                        </UnorderedList>
                        <Text
                            bottom={originalPrice ? "90px" : "80px"}
                            mt="12px"
                            position="absolute"
                            className="tertiaryFont"
                            fontWeight="700"
                            fontSize="16px"
                            lineHeight="20px"
                            color="white"
                        >
                            {finalPrice} {priceDescription ? <Text color="#FF6941">(priceDescription)</Text> : <></>}
                        </Text>
                        {originalPrice ? <Text
                            bottom="70px"
                            position="absolute"
                            fontSize="0.75rem"
                            lineHeight="1rem"
                            color="#999999"
                        >
                            {originalPrice}
                        </Text> : <></> }
                        
                        <Button
                            color="black"
                            position="absolute"
                            bottom="20px"
                            onClick={() => router.push(path)}
                            bgColor="#F8C800"
                            p="10px 24px"
                            className="tertiaryFont"
                            fontWeight="bold"
                            fontSize="16px"
                            lineHeight="20px"
                            mt="12px"
                        >
                            Get Bundle
                        </Button>
                    </Box>
    )
}
export default BundleItem