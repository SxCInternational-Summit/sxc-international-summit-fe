/* eslint-disable react/no-children-prop */
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    FormControl,
    FormLabel,
    InputRightElement,
    Button,
    Box,
    Input,
    Text,
    Icon,
    FormHelperText
} from "@chakra-ui/react"
import { useState } from "react"
import styles from "../../styles/authentication.module.scss"
import {EmailIcon, LockIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons"
import { BsFillPersonFill } from "react-icons/bs"

const RegisterModal = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
        <Box href="/" cursor="pointer" bgColor="#F8C800" color="black" px="24px" borderRadius="4px" py="10px" onClick={onOpen}>
            Register
        </Box>
        <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        motionPreset='slideInBottom'
        size="2xl">
            <ModalOverlay />
            <ModalContent
            bgColor="transparent" 
            backdropFilter="blur(30px)"
            position="absolute"
            p="60px 72px"
            border="1px solid"
            border-image-source="linear-gradient(94.01deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 54.02%, rgba(255, 255, 255, 0.25) 100%)"
            borderRadius="24px">

                <ModalHeader>
                    <Text 
                    className={styles.authenticationHeader}
                    lineHeight="52px">
                        Create an account
                    </Text>
                </ModalHeader>
                <ModalBody pb={6}>
                    <Text 
                        className={styles.subtitle} 
                        lineHeight="150%"
                        mt="-24px">
                        Join us on this Summit
                    </Text>
                    <FormControl mt={4}>
                        <FormLabel 
                        className={styles.label}>
                            USERNAME
                        </FormLabel>
                        <InputGroup className={styles.input}>
                            <InputLeftElement children={<BsFillPersonFill color="gray.300" />} />
                            <Input 
                            type='text' 
                            id="username"
                            isRequired={true}
                            onChange={(e) => setusername(e.target.value)}
                            placeholder='New Username' />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel className={styles.label} >EMAIL</FormLabel>
                        <InputGroup className={styles.input} >
                            <InputLeftElement children={<EmailIcon color="gray.300" />} />
                            <Input 
                            type="email" 
                            id="email" 
                            isRequired={true}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder='New Email' />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4} >
                        <FormLabel className={styles.label}>PASSWORD</FormLabel>
                        <InputGroup className={styles.input} >
                            <InputLeftElement children={<LockIcon color="gray.300" />}/>
                            <Input 
                                id="password" 
                                isRequired={true}
                                onChange={(e) => setpassword(e.target.value)}
                                type={show ? 'text' : 'password' } 
                                placeholder='New Password' />
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
                        <FormHelperText 
                            fontSize="12px" 
                            color="#999999" 
                            className="secondaryFont" 
                            lineHeight="16px">
                            Max 16 characters, must include alphanumerical chars, dan case-sensitive
                        </FormHelperText>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel className={styles.label}>CONFIRM PASSWORD</FormLabel>
                        <InputGroup className={styles.input} >
                            <InputLeftElement children={<LockIcon color="gray.300" />} />
                            <Input 
                                type={show ? 'text' : 'password' } 
                                placeholder='Confirm Password'
                                id="confirmPassword" 
                                isDisabled={password === ""} 
                                isRequired={true}
                                onChange={(e) => setconfirmpassword(e.target.value)}/>
                            <InputRightElement>
                                <Box
                                mr={4}
                                onClick={handleClick}
                                cursor="pointer"
                                display={!confirmpassword ? "none" : ""}>
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
                    cursor={(username === "" || email === "" || password === "" || confirmpassword === "") ? "default" : "pointer"} 
                    bgColor="#F8C800" 
                    opacity={(username === "" || email === "" || password === "" || confirmpassword === "") ? "0.6" : "1"} 
                    color="black"
                    p="10px 24px" 
                    borderRadius="4px" 
                    className="yellowButtonFont"
                    border="none"
                    isDisabled={username === "" || email === "" || password === "" || confirmpassword === ""}
                    >
                        Register
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

export default RegisterModal