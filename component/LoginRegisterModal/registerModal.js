import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    InputGroup,
    Icon,
    InputLeftElement,
    FormControl,
    FormLabel,
    InputRightElement,
    Button,
    Box,
    Input
} from "@chakra-ui/react"
import { useState } from "react"

const RegisterModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
<<<<<<< HEAD
        <>
        <Box href="/" cursor="pointer" bgColor="#F8C800" color="black" px="24px" borderRadius="4px" py="10px" onClick={onOpen}>
            Register
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
=======
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            motionPreset='slideInBottom'
            >
>>>>>>> 251d58dee354f96db586e7f60d802b7765e7abf7
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create an account</ModalHeader>
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<Icon name='info' />} />
                            <Input type='text' placeholder='New Username' />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4} >
                        <FormLabel>Email</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<Icon name='email' />} />
                            <Input type='email' placeholder='New Email' />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4} >
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<Icon name='lock' />} />
                            <Input type={show ? 'text' : 'password' } placeholder='New Password' />
                            <InputRightElement>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4} >
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<Icon name='lock' />} />
                            <Input type={show ? 'text' : 'password' } placeholder='Confirm Password' />
                            <InputRightElement>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        type='submit'
                        variant='solid'
                        variantColor='green'
                        mr={3}
                        _hover={{ boxShadow: 'md' }}
                        >
                            Register
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
        
    )
}

export default RegisterModal