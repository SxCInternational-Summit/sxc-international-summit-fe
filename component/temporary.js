import {
    Box,
    Center,
    Image,
    Stack,
    Text,
    AspectRatio
  } from "@chakra-ui/react";

import styles from "../styles/temporary.module.scss";

const Temporary = () => {
    return(
        <Center className={styles.backgroundImage} mt="4rem">
            <Stack pt="64px">
                <Image src="/images/temporaryLogo.svg" alt="title logo" height="128px" />
                <Text className={styles.titleFont} mt="64px">Website Under Construction</Text>
                <Center mt="16px">
                    <Text className={styles.subtitleFont}>While waiting for us, why not check out this trailer?</Text>
                </Center>
                <Box>
                    <AspectRatio maxW="80%" ratio={16/9} className={styles.video}>
                        <iframe
                            title="temporary video"
                            src="https://www.youtube.com/embed/34D5DC_EhOI"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
            </Stack>
            
        </Center>
    )
}
export default Temporary;