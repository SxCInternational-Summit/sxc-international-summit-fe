import {
    Image,
    Flex,
    Text,
    Stack,
    Center,
    Link,
    useMediaQuery
} from "@chakra-ui/react";
import styles from "../styles/footer.module.scss"

const Footer = () => {
    const [isDesktop] = useMediaQuery("(min-width: 48em)")
    return(
        <Center w="100%" h="192px" bgColor="#080818">
            {isDesktop ? <Image src="/images/footerLogo.svg" className={styles.footerLogo} height={{base:"48px", sm: "92px", md: "128px"}} alt=""/> : <></>}
            {isDesktop ? <Stack alignItems="center" >
                <Flex alignItems="center">
                    <Link href="https://www.instagram.com/sxcintersummit/" isExternal>
                        <Image src="/images/instagram.svg" alt="instagram" cursor="pointer"/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/studentsxceos-summit/" isExternal>
                        <Image src="/images/linkedIn.svg" alt="linkedIn" ml="16px" cursor="pointer"/>
                    </Link>
                    <Link href="https://www.tiktok.com/@sxcintersummit?lang=en" isExternal> 
                        <Image src="/images/tiktok.svg" alt="tiktok" ml="16px" cursor="pointer"/>
                    </Link>
                </Flex>
                <Text fontSize="md" color="white" className={styles.footerFont}>
                        Copyright @2021 StudentsxCEOs 
                </Text>
            </Stack> : <Stack alignItems="center">
            <Image src="/images/footerLogo.svg" alt=""/>
                <Flex alignItems="center">
                    <Link href="https://www.instagram.com/sxcintersummit/" isExternal>
                        <Image src="/images/instagram.svg" alt="instagram" cursor="pointer"/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/studentsxceos-summit/" isExternal>
                        <Image src="/images/linkedIn.svg" alt="linkedIn" ml="16px" cursor="pointer"/>
                    </Link>
                    <Link href="https://www.tiktok.com/@sxcintersummit?lang=en" isExternal> 
                        <Image src="/images/tiktok.svg" alt="tiktok" ml="16px" cursor="pointer"/>
                    </Link>
                </Flex>
                <Text color="white" className={styles.footerFont} fontSize={{base:"14px", md: "16px"}}>
                        Copyright @2021 StudentsxCEOs 
                </Text>
            </Stack>}
        </Center>
    )
}

export default Footer;