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

const Faq = ({faqList, title}) => {

    const rotateIcon = (el) => {
        el.classList.toggle(styles.rotate)
    }

    return (
        <Box p={{base: "20px", md:"100px"}} bgColor="#04040C">
            {title ? <Text 
                color="white" 
                className="sectionHeader"
                fontSize={{base: "16px", md:"36px"}}
                lineHeight={{base:"20px", md:"42px"}}
                >
                    Frequently Asked Questions
            </Text> : <></>}
            
            {faqList.map((list, index) => {
                return (
                    <Accordion allowToggle allowMultiple borderColor="transparent" key={index}>
                        <AccordionItem>
                            <AccordionButton
                            key={index}
                            bgColor="#080818"
                            p="56px 36px 36px" 
                            onClick={() => rotateIcon(arrow1)} 
                            border="3px solid #04040C"
                            borderRadius={(() => {
                                if (index == 0) {
                                    return(
                                        "20px 20px 0px 0px"
                                    )
                                } else if(index == faqList.length - 1) {
                                    return(
                                        "0px 0px 20px 20px"
                                    )
                                }
                            })}>
                                <IoMdArrowDropdownCircle id={`arrow${index}`} fontSize="24px" color="#0FA1DB" />
                                <Box 
                                    flex="1" 
                                    textAlign="left" 
                                    color="#0FA1DB" 
                                    fontSize={{base:"16px", md:"24px"}} 
                                    lineHeight={{base:"20px", md:"28px" }}
                                    className="tertiaryFont" 
                                    fontWeight="700"
                                    ml="16px">
                                    {list.question}
                                </Box>
                            </AccordionButton>
                            <AccordionPanel
                                p="8px 36px 24px 36px" 
                                color="white">
                                    {list.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                )
            })}
        </Box>
                

                // {/* <AccordionItem>
                //     <AccordionButton 
                //     bgColor="#080818" 
                //     p="36px" 
                //     onClick={() => rotateIcon(arrow2)} 
                //     border="3px solid #04040C">
                //         <IoMdArrowDropdownCircle id="arrow2" fontSize="24px" color="#0FA1DB" />
                //         <Box 
                //         flex="1" 
                //         textAlign="left" 
                //         color="#0FA1DB" 
                //         fontSize={{base:"16px", md:"24px"}} 
                //         lineHeight={{base:"20px", md:"28px" }}
                //         className="tertiaryFont" 
                //         fontWeight="700" 
                //         ml="16px">
                //         {faqList[1].question}
                //         </Box>
                //     </AccordionButton>
                //     <AccordionPanel 
                //     p="8px 36px 24px 36px" 
                //     color="white">
                //     {faqList[1].answer}
                //     </AccordionPanel>
                // </AccordionItem>
                
                // <AccordionItem>
                //     <AccordionButton 
                //     bgColor="#080818" 
                //     p="36px 36px 56px"  
                //     onClick={() => rotateIcon(arrow3)} 
                //     border="3px solid #04040C" 
                //     borderRadius="0px 0px 20px 20px">
                //         <IoMdArrowDropdownCircle id="arrow3" fontSize="24px" color="#0FA1DB" />
                //         <Box 
                //         flex="1" 
                //         textAlign="left" 
                //         color="#0FA1DB" 
                //         fontSize={{base:"16px", md:"24px"}} 
                //         lineHeight={{base:"20px", md:"28px" }}
                //         className="tertiaryFont" 
                //         fontWeight="700" ml="16px">
                //         {faqList[1].question}
                //         </Box>
                //     </AccordionButton>
                //     <AccordionPanel 
                //     p="8px 36px 24px 36px" 
                //     color="white">
                //     {faqList[1].answer}
                //     </AccordionPanel>
                // </AccordionItem> */}
                
    )
}

export default Faq;