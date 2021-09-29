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
    return (
        <>
            <Center bgColor="black" flexDirection="column" pt="89px" px="30px">
                <Center>
                    <Text className={styles.sectionFont} textAlign="center">What is StudentxCEOs International Summit?</Text>
                </Center>
                <Stack ml="10%" mr="10%" fontSize="64px" w="80%" justifyContent="space-between" mt={{ base: "70px", lg: "32px" }} direction={{ base: "column", lg: "row" }} spacing="72px">
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
                    <Text className={styles.sectionFont} textAlign="center">Our Partners and Sponsors</Text>
                </Center>
                <Flex direction="row" align="center" flexWrap="wrap" mt={{base:"30px", md:"120px"}} justifyContent="space-between" w={{base:"90%", md:"80%"}}>
                    <Box w="17%">
                        <Flex justifyContent="space-between">
                            <Image src="/images/sponsors/Prodia.png" alt="Prodia" w="55%" />
                            <Image src="/images/sponsors/KopiSoe.png" alt="KopiSoe" w="35%"/>
                        </Flex>
                        <Image src="/images/sponsors/LingoTalk.jpeg" alt="LingoTalk" mt="20px" maxW="65%" />
                    </Box>
                    <Image src="/images/sponsors/Lokalate.png" alt="Lokalate" w="14.5%" />
                    <Image src="/images/sponsors/Paragon.png" alt="Paragon" w="32%" />
                    <Image src="/images/sponsors/Natur.png" alt="Natur" w="9.5%" />
                    <Image src="/images/sponsors/Hangry.png" alt="Hangry" w="12%" />
                </Flex>
                <Image src="/images/sponsors/Medpar.png" alt="Media Partner" w={{base:"90%", md:"80%"}} h="fit-content" my="-25%" />
            </Center>
        </>
    )
}

export default Partner;