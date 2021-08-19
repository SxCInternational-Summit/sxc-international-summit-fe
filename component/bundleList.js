import { Box, Center, Flex } from "@chakra-ui/react"
import BundleItem from "./bundleItem"

const BundleList = ({list, bgColor, pt, px}) => {
    return(
        <Center pt={pt} px={px}>
            <Box bgColor={bgColor} p="32px 64px" w="100%">
                <Center 
                    className="gradientOrange"
                    fontSize={{base:"36px", md:"48px"}}
                    lineHeight={{base:"42px", md:"52px"}}
                    textAlign="center"
                    >
                    Buy Bundle Packs
                </Center>
                <Center
                    mt="16px"
                    className="secondaryFont"
                    fontWeight="400"
                    fontSize={{base:"12px", md:"16px"}}
                    lineHeight={{base:"16px", md:"150%"}}
                    color="white"
                    textAlign="center"
                >
                    Save some time and money by buying our bundle packs!
                </Center>
                <Center>
                    <Flex mt="70px" w="100%" direction={{base:"column", lg:"row"}}>
                        {list.map((el, index) => {
                            return(
                                <Center key={index} w="100%">
                                    <BundleItem 
                                        title={el.title}
                                        titleColor={el.titleColor}
                                        advantages={el.advantages}
                                        finalPrice={el.finalPrice}
                                        originalPrice={el.originalPrice}
                                        path={el.path}
                                        saving={el.saving}
                                        mx="32px" />
                                </Center>
                                
                            )
                        })}
                    </Flex>
                </Center>
            
            </Box>
        </Center>
        
    )
}

export default BundleList