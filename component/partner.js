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
        <>
        <Center bgColor="black" flexDirection="column" pt="89px" px="30px">
            <Center>
                <Text className={styles.sectionFont} textAlign="center">What is StudentxCEOs International Summit?</Text>
            </Center>
            <Stack ml="10%" mr="10%" fontSize="64px" w="80%" justifyContent="space-between" mt={{base:"70px", lg:"32px"}} direction={{base:"column", lg:"row"}} spacing="72px">
                <Box pos="relative" w="100%">
                    <Circle bgColor="#FF6941" size="80px" pos="absolute" top="-20px" left="-40px">
                        <Image src="/images/bookIcon.svg" alt="" />
                    </Circle>
                    <Box w="90%">
                        <Text color="white" className={[styles.descriptionBox, styles.firstBox].join(" ")}>
                            A grand event organized by StudentsxCEOs Jakarta that will be held in October 2021. Aiming to be a catalyst for students all across the globe to help prepare themselves to enter the work environment and distinct themselves from their competitors. Hoping participants can learn necessary qualities needed to excel in the work environment by holding meaningful events and inviting insightful speakers, especially during post-pandemic recovery.
                        </Text>
                    </Box>
                </Box>
                <Box pos="relative" w="100%">
                    <Circle className={styles.orangeGradient} size="80px" pos="absolute" top="-20px" left="-40px">
                        <Image src="/images/paintIcon.svg" alt="" />
                    </Circle>
                    <Box w="90%" h="90%">
                        <Text color="white" className={[styles.descriptionBox, styles.secondBox].join(" ")}>
                            Aiming to offer a place for our committees, volunteers, and participants to develop and prepare themselves to enter the work environment. StudentsxCEOs Summit invited the participants to see the continuous changes of the business world and showed them how to respond appropriately.
                        </Text>
                    </Box>
                </Box>
                <Box pos="relative" w="100%">
                    <Circle bgColor="#F8C800" size="80px" pos="absolute" top="-20px" left="-40px">
                        <Image src="/images/messageIcon.svg" alt="" />
                    </Circle>
                    <Box w="90%" h="90%">
                        <Text color="white" className={[styles.descriptionBox, styles.thirdBox].join(" ")}>
                            Organize events that are meaningful and insightful to prepare us to enter the work environment, Provide networking sessions between committees, between participants, and between committees and participants, Facilitate and maintain a conducive, harmonious, disciplined, and responsible committee situation.
                        </Text>
                    </Box>
                </Box>
            </Stack>
            
            <Center mt="86px">
                <Text className={styles.sectionFont}>Our Partners and Sponsors</Text>
            </Center>
            <Center>
                <Text
                    className={styles.sectionFont}
                    textAlign="center"
                    fontSize="2xl"
                    color="#5e5858"
                    mt="64px"
                >
                    - No Partners Yet -
                </Text>
            </Center>
            {/* <Flex mx="10%" fontSize="64px" w="80%" justifyContent="space-between" mt="87px">
                <Image src="/images/sponsor1.svg" alt="sponsor 1" />
                <Image src="/images/sponsor2.svg" alt="sponsor 2" />
                <Image src="/images/sponsor3.svg" alt="sponsor 3" />
                <Image src="/images/sponsor4.svg" alt="sponsor 4" />
                {isDesktop ? <Image src="/images/sponsor5.svg" alt="sponsor 5" /> : <></>}
            </Flex> */}
            {/* {isDesktop ? <></> : 
                <Flex>
                    <Image src="/images/sponsor5.svg" alt="sponsor 5" />
                </Flex>
            } */}
        </Center>
        </>
    )
}

export default Partner;