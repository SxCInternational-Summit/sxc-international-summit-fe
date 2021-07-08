import {
    Image,
    Link,
    Flex,
    Center
} from "@chakra-ui/react";
import styles from "styles/footer.scss"

const Footer = () => {
    return(
        <Flex h="192px" bgColor="#080818" w="100%" justifyContent="space-between" top={0}>
            <Link href="/">
                <Image src="/images/footerLogo.svg" alt="logo" ml="120px" cursor="pointer" />
            </Link>

            <Stack>
                <Flex justifyContent="space-evenly" w="640px">
                    <Image src="/images/instagram.svg" alt="instagram" cursor="pointer"/>
                    <Image src="/images/linkedIn.svg" alt="linkedIn" ml="30px" cursor="pointer"/>
                    <Image src="/images/twitter.svg" alt="twitter" ml="30px" cursor="pointer"/>
                </Flex>
                <Center color="white" className={styles.footerFont} >
                    <Text fontSize="md">
                        (md) Copyright @2021 StudentsxCEOs 
                    </Text>
                </Center>
            </Stack>
        </Flex>
    )
}

export default Footer;