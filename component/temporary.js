import {
    Box,
    Center,
    Image,
    Stack,
    Text,
    AspectRatio
  } from "@chakra-ui/react";

import styles from "../styles/temporary.module.scss";

const Temporary = ({isDesktop}) => {
    return(
        <Center className={styles.backgroundImage} mt="4rem" h="100vh">
            <Stack pt="2rem" pb="32px">
                <Image src="./images/temporaryLogo.svg" alt="title logo" height={{base:"48px", sm: "84px", md: "128px"}} />
                <Text className={styles.titleFont} fontSize={{base: "22px", sm:"35px", md:"56px"}} mt="64px">Website Under Construction</Text>
                <Center>
                    <Text className={styles.subtitleFont} fontSize={{base:"12px", md: "16px"}}>While waiting for us, why not check out this trailer?</Text>
                </Center>
                <Box>
                    <AspectRatio maxW="80%" ratio={16/9} className={styles.video}>
                        <iframe
                            title="temporary video"
                            src="https://www.youtube.com/embed/jgjNSMwZMnk"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
            </Stack>
            
        </Center>
    )
}
export default Temporary;