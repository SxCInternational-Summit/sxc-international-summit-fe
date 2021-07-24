import {
    Image,
    Flex,
    Text,
    Stack,
    Center,
    useMediaQuery
} from "@chakra-ui/react";
import styles from "../styles/footer.module.scss"

const Footer = () => {
    const [isDesktop] = useMediaQuery("(min-width: 48em)")
    return(
        <Center w="100%" h="192px" bgColor="#080818">
            {isDesktop ? <Image src="/images/footerLogo.svg" className={styles.footerLogo} height={{base:"48px", sm: "92px", md: "128px"}} alt=""/> : <Image src="/images/footerLogo.svg" className={styles.footerLogo2} alt=""/>}
            {isDesktop ? <Stack alignItems="center" >
                <Flex>
                    <Image src="/images/instagram.svg" alt="instagram" cursor="pointer"/>
                    <Image src="/images/linkedIn.svg" alt="linkedIn" ml="16px" cursor="pointer"/>
                    <Image src="/images/twitter.svg" alt="twitter" ml="16px" cursor="pointer"/>
                </Flex>
                <Text fontSize="md" color="white" className={styles.footerFont}>
                        Copyright @2021 StudentsxCEOs 
                </Text>
            </Stack> : <Stack alignItems="center">
                <Flex>
                    <Image src="/images/instagram.svg" alt="instagram" cursor="pointer"/>
                    <Image src="/images/linkedIn.svg" alt="linkedIn" ml="16px" cursor="pointer"/>
                    <Image src="/images/twitter.svg" alt="twitter" ml="16px" cursor="pointer"/>
                </Flex>
                <Text color="white" className={styles.footerFont} fontSize={{base:"14px", md: "16px"}}>
                        Copyright @2021 StudentsxCEOs 
                </Text>
            </Stack>}
        </Center>
    )
}

export default Footer;