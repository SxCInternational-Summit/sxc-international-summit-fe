import {
    Box,
    Image,
    Center,
    Text
} from "@chakra-ui/react";
import styles from "../styles/carousel.module.scss"

const Carousel = () => {

    return(
        <Box className={styles.backgroundImage}>
                <Center pt="60px" className={styles.titleFont}>
                    Grand Summit Events
                </Center>
                <Center>
                    <Image src="/images/preEvent.svg" alt="" />
                    <Text color="white">
                        With a series of inspiring events, the Pre-Event aims to provide highly motivated individuals to gain insights from various renowned speakers covering a wide range of topics such as soft skills tips, in-depth information on SDGs and many more.
                    </Text>
                </Center>
                <Center className={styles.tab}>
                    <Text>With a series of inspiring events, the Pre-Event aims to provide highly motivated individuals to gain insights from various renowned speakers covering a wide range of topics such as soft skills tips, in-depth information on SDGs and many more.With a series of inspiring events, the Pre-Event aims to provide highly motivated individuals to gain insights from various renowned speakers covering a wide range of topics such as soft skills tips, in-depth information on SDGs and many more.</Text>
                </Center>
            
        </Box>
    )
}

export default Carousel;