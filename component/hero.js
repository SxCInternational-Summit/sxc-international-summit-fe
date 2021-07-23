import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Button, Center, Text, Flex, useMediaQuery } from "@chakra-ui/react"
import { useRouter } from "next/router"
const Hero = ({title, subtitle, image}) => {
    const [isMobile] = useMediaQuery("(max-width: 48em)")
    const router = useRouter()
    return(
        <Center
            backgroundImage={`url(${image})`}
            mt="64px"
            h={{base: "242px", md:"488px"}}
            bgRepeat="no-repeat" 
            bgSize="cover"
            flexDirection="column">

            {isMobile ? <></> :
                <Button
                    pos="absolute"
                    top="20px"
                    left="120px"
                    color="white"
                    bgColor="transparent"
                    fontSize="1rem"
                    lineHeight="150%"
                    fontFamily="primaryFont"
                    fontWeight="900"
                    p="10px 12px"
                    onClick={() => router.push("/event")}
                    >
                    <Flex lineHeight="100%">
                        <ChevronLeftIcon />
                        <Text ml="6px">Back to Events Page</Text>
                    </Flex>
                </Button>
            }

            <Text 
                className="gradientFont"
                fontSize={{base: "24px", md:"64px"}}
                lineHeight={{base:"28px", md:"68px"}}
                w="40%"
                textAlign="center"
                >
                {title}
            </Text>

            <Text
                w="40%"
                className="secondaryFont"
                color="white"
                fontSize={{base: "0.75rem", md:"1rem"}}
                lineHeight="150%"
                fontWeight="400"
                textAlign="center"
                mt={{base: "0.75rem", md:"2rem"}}
                >
                {subtitle}
            </Text>
        </Center>
    )
}

export default Hero