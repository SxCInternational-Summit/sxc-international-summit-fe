import { Box, Center, Flex } from "@chakra-ui/react"
import BundleItem from "./bundleItem"

const BundleList = ({list, bgColor}) => {
    return(
        <Box bgColor={bgColor}py="64px">
            <Center 
                className="gradientOrange"
                fontSize="48px"
                lineHeight="52px"
                textAlign="center"
                >
                Buy Bundle Packs
            </Center>
            <Center
                mt="16px"
                className="secondaryFont"
                fontWeight="400"
                fontSize="16px"
                lineHeight="150%"
                color="white"
                textAlign="center"
            >
                Save some time and money by buying our bundle packs!
            </Center>
            <Center>
                <Flex mt="70px" direction={{base:"column", md:"row"}} justify="space-evenly" w="100%">
                    {list.map((el, index) => {
                        return(
                            <BundleItem 
                            key={index}
                            title={el.title}
                            titleColor={el.titleColor}
                            advantages={el.advantages}
                            finalPrice={el.finalPrice}
                            originalPrice={el.originalPrice}
                            path={el.path}
                            saving={el.saving} />
                        )
                    })}
                </Flex>
            </Center>
        
        </Box>
    )
}

export default BundleList