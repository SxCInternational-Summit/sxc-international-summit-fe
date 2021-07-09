import {
    Box,
    Center,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Flex,
    Link
  } from "@chakra-ui/react";
import { useState } from "react";

import { useRouter } from "next/router";

import Navbar from "../../component/navbar"


import styles from "../../styles/authentication.module.scss"

const RegisterPage = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const router = useRouter()
    

    const handleSubmit = () => {
        if(password.length > 16){
            alert("panjang password tidak boleh lebih dari 16 karakter")
        } else if(password !== confirmpassword){
            alert("password tidak sama")
        } else {
            router.push("/register/success")
        }
    }

    return(
        <Box className={styles.backgroundImage}>
            <Navbar />
            <Center h="100%">
                <Box 
                w="50%" 
                h="70%" 
                className={styles.glassBackground} 
                color="white">
                    <Box ml="15%" color="white">
                        <Text 
                        className={styles.authenticationHeader} 
                        lineHeight="52px">
                            Register
                        </Text>
                        <Text 
                        className={styles.subtitle} 
                        mt="-40px" 
                        lineHeight="150%">
                            Join us on this Summit
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
                            <FormHelperText 
                            fontSize="12px" 
                            color="#999999" 
                            className="secondaryFont" 
                            lineHeight="16px">
                                Max 16 characters, must include alphanumerical chars, dan case-sensitive
                            </FormHelperText>

                            <FormLabel 
                            mt="16px" 
                            className={styles.label}>
                                CONFIRM PASSWORD
                            </FormLabel>
                            <Input 
                            type="password" 
                            id="confirmPassword" 
                            isDisabled={password === ""} 
                            className={styles.input} 
                            isRequired="true" 
                            onChange={(e) => setconfirmpassword(e.target.value)} />
                        </FormControl>
                    </Box>
                    <Center>
                            <Button
                            mt="64px" 
                            type="submit"
                            cursor={(email === "" || password === "" || confirmpassword === "") ? "default" : "pointer"} 
                            bgColor="#F8C800" 
                            opacity={(email === "" || password === "" || confirmpassword === "") ? "0.6" : "1"} 
                            color="black"
                            p="10px 24px" 
                            borderRadius="4px" 
                            className="yellowButtonFont"
                            border="none"
                            onClick={handleSubmit}
                            isDisabled={email === "" || password === "" || confirmpassword === ""}>
                                Register
                            </Button>
                        </Center>
                        <Center>
                            <Flex>
                                <Text>
                                    Already have an account? 
                                    <Link href="/login">
                                        {" Log in"}
                                    </Link>
                                </Text>
                                
                            </Flex>
                        </Center>
                </Box>
            </Center>
        </Box>
    )
}

export default RegisterPage