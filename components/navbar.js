import {
    Image,
    Link,
    Flex,
    Center,
    Button,
    Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
  useMediaQuery
} from "@chakra-ui/react";
import styles from "../styles/navbar.module.scss";
import { HamburgerIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useRef } from "react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isDesktop] = useMediaQuery("(min-width: 48em)")
    const btnRef = useRef()
    return(
        <Flex h="64px" bgColor="#080818" w="100%" justifyContent="space-between" top={0} pos="fixed" zIndex="2">
            <Link href="/">
                <Image src="/images/navbarLogo.svg" alt="logo" ml={{base: "36px", md:"120px"}} cursor="pointer" />
            </Link>
            
            <Center color="white" className={styles.headerFont} >
                {isDesktop ? <HStack spacing={16} mr="120px">
                    <Link color="#FF6941" href="/" cursor="pointer" alignSelf="center">
                        Home
                    </Link>
                    <Link href="/event" cursor="pointer" alignSelf="center">
                        Events
                    </Link>
                </HStack> : <Button onClick={onOpen} bgColor="transparent" color="white" mr="36px"><HamburgerIcon h="18px" /></Button>}
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent bgColor="#080818">
                    <DrawerCloseButton color="white" />

                    <DrawerBody  pt={12}>
                        <Center>
                            <VStack color="white" className={styles.headerFont} spacing={6}>
                            <Link color="#FF6941" href="/" cursor="pointer" alignSelf="center">
                                    Home
                                </Link>
                                <Link href="/event" cursor="pointer" alignSelf="center">
                                    Events
                                </Link>
                        </VStack>
                        </Center>
                        
                    
                    </DrawerBody>
                    <DrawerFooter>
                        <Center pb={12}>
                            <Button size="md" color="white" bgColor="#0070f3" onClick={onClose}>
                                <ChevronRightIcon fontSize="24px" />
                            </Button>
                        </Center>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                
            </Center>
            
        </Flex>
    );
}

export default Navbar;