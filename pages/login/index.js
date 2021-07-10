import {
    Box,
    Center,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Link
  } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../component/navbar"
import styles from "../../styles/authentication.module.scss"

const LoginPage = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    return(
        <Box className={styles.backgroundImage}>
            <Navbar />
            <Center h="100%">
                <Box 
                w="50%" 
                h="55%" 
                className={styles.glassBackground} 
                color="white">
                    <Box ml="15%" color="white">
                        <Text 
                        className={styles.authenticationHeader} 
                        lineHeight="52px">
                            Log in
                        </Text>
                        <FormControl>
                            <FormLabel 
                            className={styles.label}>
                                EMAIL
                            </FormLabel>
                            <Input 
                            type="email" 
                            id="email" 
                            className={styles.input} 
                            isRequired="true" 
                            onChange={(e) => setemail(e.target.value)} />

                            <FormLabel 
                            mt="16px" 
                            className={styles.label}>
                                PASSWORD
                            </FormLabel>
                            <Input 
                            type="password" 
                            id="password" 
                            className={styles.input} 
                            isRequired="true" 
                            onChange={(e) => setpassword(e.target.value)} />
                        </FormControl>
                    </Box>
                    <Center>
                            <Button
                            mt="40px" 
                            type="submit"
                            cursor={(email === "" || password === "") ? "default" : "pointer"} 
                            bgColor="#F8C800" 
                            opacity={(email === "" || password === "") ? "0.6" : "1"} 
                            color="black"
                            p="10px 24px" 
                            borderRadius="4px" 
                            className="yellowButtonFont"
                            border="none"
                            isDisabled={email === "" || password === ""}>
                                Log In
                            </Button>
                        </Center>
                        <Center>
                            <Link href="/" mt="8px">
                                Forgot Password 
                            </Link>
                        </Center>
                </Box>
            </Center>
        </Box>
    )
}

export default LoginPage