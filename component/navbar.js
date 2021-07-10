import {
    Image,
    Link,
    Flex,
    Center
} from "@chakra-ui/react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
    return(
        <Flex h="64px" bgColor="#080818" w="100%" justifyContent="space-between" top={0} pos="fixed">
            <Link href="/">
                <Image src="/images/navbarLogo.svg" alt="logo" ml="120px" cursor="pointer" />
            </Link>
            
            <Center color="white" className={styles.headerFont} >
                <Flex justifyContent="space-evenly" w="640px">
                    <Link color="#FF6941" href="/" cursor="pointer" alignSelf="center">
                        Home
                    </Link>
                    <Link href="/" cursor="pointer" alignSelf="center">
                        Events
                    </Link>
                    <Link href="/" cursor="pointer" alignSelf="center">
                        Login
                    </Link>
                    <Link href="/" cursor="pointer" bgColor="#F8C800" color="black" px="24px" borderRadius="4px" py="10px">
                            Register
                    </Link>
                </Flex>
                
            </Center>
        </Flex>
    );
}

export default Navbar;