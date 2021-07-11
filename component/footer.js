import {
    Image,
    Link,
    Flex,
    Text,
    Stack,
    HStack
} from "@chakra-ui/react";
import styles from "../styles/footer.module.scss"

const Footer = ({isDesktop}) => {
    return(
        <HStack h="192px" bgColor="#080818" w="100%" justifyContent="space-between" top={0}>
            <Link href="/">
                <Image src="/images/footerLogo.svg" alt="logo" ml="120px" cursor="pointer"/>
            </Link>            
            <Stack w="100%" alignItems="center" pr="300px" top={0}>
                <Flex>
                    <Image src="/images/instagram.svg" alt="instagram" cursor="pointer"/>
                    <Image src="/images/linkedIn.svg" alt="linkedIn" ml="16px" cursor="pointer"/>
                    <Image src="/images/twitter.svg" alt="twitter" ml="16px" cursor="pointer"/>
                </Flex>
                <Text fontSize="md" color="white" className={styles.footerFont}>
                        Copyright @2021 StudentsxCEOs 
                </Text>
            </Stack>
        </HStack>
    )
}

export default Footer;