import {
    Box,
    Text,
    Grid,
    Center,
    useMediaQuery
  } from '@chakra-ui/react';
import { useState } from 'react';
import Card from './card';
import { IoMdArrowDropdownCircle } from "react-icons/io"
import styles from "../styles/event.module.scss"
  
const EventList = ({events}) => {
    const [isMobile] = useMediaQuery("(max-width: 48em)")
    let numOfEvents = isMobile ? 3 : 6
    const [currentPage, setcurrentPage] = useState(1)
    let indexOfLastItems = currentPage * numOfEvents
    let indexOfFirstItems = (currentPage - 1) * numOfEvents
    const pages = Array.apply(null, Array(Math.ceil(events.length / numOfEvents ))).map(function(currentValue, index) { return index;});
    
    if(events.length < indexOfLastItems){
        indexOfLastItems = events.length
    }
    const currentItems = events.slice(indexOfFirstItems, indexOfLastItems)

    const handleClick = (pageNumber) => {
        if (pageNumber >= pages.length) {
            setcurrentPage(pages.length)
        } else {
            setcurrentPage(pageNumber)
        }
        console.log(pageNumber);
    }

    let numOfPreEvent = 0
    return(
        <Box 
        p={{base: "20px", md:"120px"}} 
        bgColor="#04040C"
        pt={{base: "60px", md:""}}>

            <Text 
            color="white" 
            className="sectionHeader"
            fontSize={{base: "30px", md:"36px"}}
            lineHeight={{base:"20px", md:"42px"}}
            mb={6}
            mt={{base: "30px"}}
            textAlign="center"
            color="#F8C800"
            >
                Events List
            </Text>

            <Grid 
            templateColumns={{base:"repeat(1, 1fr)", lg:"repeat(2, 1fr)", "2xl":"repeat(3, 1fr)" }}
            rowGap="72px" 
            columnGap="84px"
            mt={{base:"40px", md:"72px"}}>
                {currentItems.map((el, index) => {
                    if(el.type === "Pre-Event"){
                        numOfPreEvent++
                        return(
                            <Card title={el.title} image={el.src} subtitle={el.subtitle} type={el.type} date={el.date} fee={el.fee} key={index} numOfPreEvent={numOfPreEvent} linkTo={el.linkTo} />
                        )
                    }
                    return(
                        <Card title={el.title} image={el.src} subtitle={el.subtitle} type={el.type} date={el.date} fee={el.fee} key={index} numOfPreEvent={0} linkTo={el.linkTo} />
                    )
                })}
            </Grid>

            <Center 
            fontSize="24px"
            fontWeight="bold"
            className="tertiaryFont"
            mt="160px">

                <IoMdArrowDropdownCircle 
                color={currentPage === 1 ? "#333333" : "#F8C800"} 
                className={styles.leftArrow}
                onClick={currentPage !== 1 ? () => handleClick(currentPage - 1) : () => handleClick(1)}
                cursor="pointer"/>
                {pages.map((el, index) => {
                    if (Math.abs(currentPage - (el + 1)) < 2) {
                        return(
                            <Text 
                            key={index} 
                            color="white" 
                            onClick={() => handleClick(index + 1)} 
                            cursor="pointer" 
                            mr="24px">
                                {el + 1}
                            </Text>
                        )
                    } else if(index + 1 === pages.length){
                        return(
                            <Text 
                            key={index} 
                            color="white" 
                            onClick={() => handleClick(index + 1)} 
                            cursor="pointer" 
                            mr="24px">
                                {el + 1}
                            </Text>
                        )
                    } else if(el === 0){
                        return(
                            <Text 
                            key={index} 
                            color="white" 
                            onClick={() => handleClick(index + 1)} 
                            cursor="pointer" 
                            mr="24px">
                                {el + 1}
                            </Text>
                        )
                    } else if(Math.abs(currentPage - (el + 1)) === 2) {
                        return(
                            <Text color="white" mr="24px">...</Text>
                        )
                    }
                })}
                <IoMdArrowDropdownCircle 
                color={currentPage === pages.length ? "#333333" : "#F8C800"} 
                className={styles.rightArrow}
                cursor="pointer"
                onClick={() => handleClick(currentPage + 1)} />
            </Center>
                        
        </Box>
        
    )
}

export default EventList;