import {
    Box,
    Flex,
    Image,
    Text,
    Center,
    Circle,
    Stack,
    useMediaQuery
  } from "@chakra-ui/react";
  
import styles from "../styles/landing.module.scss";

const Partner = () => {
    const [isDesktop] = useMediaQuery("(min-width: 48em)")
    return(
        <Center bgColor="black" flexDirection="column" pt="200px">
            <Center>
                <Text className={styles.sectionFont}>What is StudentxCEOs International Summit?</Text>
            </Center>
            <Stack ml="10%" mr="10%" fontSize="64px" w="80%" justifyContent="space-between" mt="24px" direction={{base:"column", md:"row"}} spacing="72px">
                <Box pos="relative">
                    <Circle bgColor="#FF6941" size="80px" pos="absolute" top="-20px" left="-40px">
                        <Image src="/images/bookIcon.svg" alt="" />
                    </Circle>
                    <Box w="90%">
                        <Text color="white" className={[styles.descriptionBox, styles.firstBox].join(" ")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant. Facilisi nullam vehicula ipsum a arcu. Malesuada proin libero nunc consequat interdum varius sit amet. Id velit ut tortor pretium viverra. Nibh cras pulvinar mattis nunc sed blandit. Nunc pulvinar sapien et ligula ullamcorper
                        </Text>
                    </Box>
                </Box>
                <Box pos="relative">
                    <Circle className={styles.orangeGradient} size="80px" pos="absolute" top="-20px" left="-40px">
                        <Image src="/images/paintIcon.svg" alt="" />
                    </Circle>
                    <Box w="90%" h="90%">
                        <Text color="white" className={[styles.descriptionBox, styles.secondBox].join(" ")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant. Facilisi nullam vehicula ipsum a arcu. Malesuada proin libero nunc consequat interdum varius sit amet. Id velit ut tortor pretium viverra. Nibh cras pulvinar mattis nunc sed blandit. Nunc pulvinar sapien et ligula ullamcorper
                        </Text>
                    </Box>
                </Box>
                <Box pos="relative">
                    <Circle bgColor="#F8C800" size="80px" pos="absolute" top="-20px" left="-40px">
                        <Image src="/images/messageIcon.svg" alt="" />
                    </Circle>
                    <Box w="90%" h="90%">
                        <Text color="white" className={[styles.descriptionBox, styles.thirdBox].join(" ")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant. Facilisi nullam vehicula ipsum a arcu. Malesuada proin libero nunc consequat interdum varius sit amet. Id velit ut tortor pretium viverra. Nibh cras pulvinar mattis nunc sed blandit. Nunc pulvinar sapien et ligula ullamcorper
                        </Text>
                    </Box>
                </Box>
            </Stack>
            
            <Center mt="86px">
                <Text className={styles.sectionFont}>Our Partners and Sponsors</Text>
            </Center>
            
            <Flex mx="10%" fontSize="64px" w="80%" justifyContent="space-between">
                <Image src="/images/sponsor1.svg" alt="sponsor 1" />
                <Image src="/images/sponsor2.svg" alt="sponsor 2" />
                <Image src="/images/sponsor3.svg" alt="sponsor 3" />
                <Image src="/images/sponsor4.svg" alt="sponsor 4" />
                {isDesktop ? <Image src="/images/sponsor5.svg" alt="sponsor 5" /> : <></>}
            </Flex>
            {isDesktop ? <></> : 
                <Flex>
                    <Image src="/images/sponsor5.svg" alt="sponsor 5" />
                </Flex>
            }
        </Center>
            
    )
}

export default Partner;