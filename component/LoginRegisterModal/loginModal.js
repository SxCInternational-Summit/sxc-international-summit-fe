import {
    FormControl,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Modal, 
    ModalBody, 
    ModalContent, 
    ModalHeader, 
    ModalOverlay,
    FormLabel,
    Input,
    Box,
    useDisclosure,
    Button,
    ModalFooter,
    Text
} from '@chakra-ui/react'
import { useState } from 'react'
import styles from "../../styles/authentication.module.scss"
import {EmailIcon, LockIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons"

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
        <Box href="/" cursor="pointer" alignSelf="center" onClick={onOpen}>
            Login
        </Box>
        <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        size="xl"
        motionPreset='slideInBottom' >
            <ModalOverlay />

            <ModalContent 
            bgColor="transparent" 
            backdropFilter="blur(30px)"
            position="absolute"
            top="10%"
            p="60px 72px"
            border="1px solid"
            border-image-source="linear-gradient(94.01deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 54.02%, rgba(255, 255, 255, 0.25) 100%)"
            borderRadius="24px">

                <ModalHeader>
                    <Text 
                    className={styles.authenticationHeader}
                    lineHeight="52px">
                        Log in
                    </Text>
                    
                </ModalHeader>

                <ModalBody 
                pb={6}  
                >
                    <FormControl>
                        <FormLabel 
                        className={styles.label}>
                            EMAIL
                        </FormLabel>
                        <InputGroup className={styles.input} >
                        <InputLeftElement
                            pointerEvents="none"
                            // eslint-disable-next-line react/no-children-prop
                            children={<EmailIcon color="gray.300" />}
                            />
                            <Input 
                            id="email" 
                            type='email' 
                            placeholder='Enter Email' 
                            isRequired={true}
                            onChange={(e) => setemail(e.target.value)}  />
                        </InputGroup>
                    </FormControl>

                    <FormControl
                    mt={6}>
                        <FormLabel className={styles.label}>PASSWORD</FormLabel>
                        <InputGroup className={styles.input} >
                            <InputLeftElement
                                pointerEvents="none"
                                // eslint-disable-next-line react/no-children-prop
                                children={<LockIcon color="gray.300" />}
                            />
                            <Input 
                            type={show ? "text" : "password" }
                            id="password" 
                            placeholder='Enter Password'
                            isRequired={true}
                            onChange={(e) => setpassword(e.target.value)}  />
                            <InputRightElement>
                                <Box
                                mr={4}
                                onClick={handleClick}
                                cursor="pointer"
                                display={!password ? "none" : ""}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Box>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                <Button
                    type='submit'
                    mr={3}
                    cursor={(email === "" || password === "") ? "default" : "pointer"} 
                    bgColor="#F8C800" 
                    opacity={(email === "" || password === "") ? "0.6" : "1"} 
                    color="black"
                    p="10px 24px" 
                    borderRadius="4px" 
                    className="yellowButtonFont"
                    border="none"
                    isDisabled={email === "" || password === ""}
                    >
                        Log In
                    </Button>
                    <Button 
                    variant='ghost' 
                    color="white" 
                    onClick={onClose}
                    _hover="none">
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
        
    )
}

export default Login