import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
  } from '@chakra-ui/react';

import { IoMdArrowDropdownCircle } from "react-icons/io"
import styles from "../styles/event.module.scss"

const Faq = () => {
    const rotateIcon = (el) => {
        el.classList.toggle(styles.rotate)
    }
    return (
        <Box p={{base: "20px", md:"120px"}} bgColor="#04040C">
            <Text 
                color="white" 
                className="sectionHeader"
                fontSize={{base: "16px", md:""}}
                lineHeight={{base:"20px", md:""}}
                >
                    Frequently Asked Questions
            </Text>
            <Accordion allowToggle allowMultiple borderColor="transparent">
                <AccordionItem>
                    <AccordionButton 
                    bgColor="#080818" 
                    p="56px 36px 36px" 
                    onClick={() => rotateIcon(arrow1)} 
                    border="3px solid #04040C"
                    borderRadius="20px 20px 0px 0px">
                        <IoMdArrowDropdownCircle id="arrow1" fontSize="24px" color="#0FA1DB" />
                        <Box 
                        flex="1" 
                        textAlign="left" 
                        color="#0FA1DB" 
                        fontSize={{base:"16px", md:"24px"}} 
                        lineHeight={{base:"20px", md:"28px" }}
                        className="tertiaryFont" 
                        fontWeight="700" 
                        ml="16px">
                        What are the series of StudentsxCEOs 10th Grand Summit Pre-Event?
                        </Box>
                    </AccordionButton>
                    <AccordionPanel 
                    p="8px 36px 24px 36px" 
                    color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton 
                    bgColor="#080818" 
                    p="36px" 
                    onClick={() => rotateIcon(arrow2)} 
                    border="3px solid #04040C">
                        <IoMdArrowDropdownCircle id="arrow2" fontSize="24px" color="#0FA1DB" />
                        <Box 
                        flex="1" 
                        textAlign="left" 
                        color="#0FA1DB" 
                        fontSize={{base:"16px", md:"24px"}} 
                        lineHeight={{base:"20px", md:"28px" }}
                        className="tertiaryFont" 
                        fontWeight="700" 
                        ml="16px">
                        What are the series of StudentsxCEOs 10th Grand Summit Pre-Event?
                        </Box>
                    </AccordionButton>
                    <AccordionPanel 
                    p="8px 36px 24px 36px" 
                    color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <AccordionButton 
                    bgColor="#080818" 
                    p="36px 36px 56px"  
                    onClick={() => rotateIcon(arrow3)} 
                    border="3px solid #04040C" 
                    borderRadius="0px 0px 20px 20px">
                        <IoMdArrowDropdownCircle id="arrow3" fontSize="24px" color="#0FA1DB" />
                        <Box 
                        flex="1" 
                        textAlign="left" 
                        color="#0FA1DB" 
                        fontSize={{base:"16px", md:"24px"}} 
                        lineHeight={{base:"20px", md:"28px" }}
                        className="tertiaryFont" 
                        fontWeight="700" ml="16px">
                        What are the series of StudentsxCEOs 10th Grand Summit Pre-Event?
                        </Box>
                    </AccordionButton>
                    <AccordionPanel 
                    p="8px 36px 24px 36px" 
                    color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
        </Box>
    )
}

export default Faq;