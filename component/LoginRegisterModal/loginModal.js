import {
    FormControl,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Modal, 
    Icon,
    ModalBody, 
    ModalContent, 
    ModalHeader, 
    ModalOverlay,
    FormLabel,
    Input,
} from '@chakra-ui/react'

const login = ({ onOpen }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            motionPreset='slideInBottom' 
            >
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Login to Your Account</ModalHeader>
                <ModalBody pb={6} >
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<Icon name='email' />} />
                            <Input type='email' placeholder='Enter Email' />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4} >
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<Icon name='lock' />} />
                            <Input type='password' placeholder='Enter Password' />
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
                        Login
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default login