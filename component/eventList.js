import {
    Box,
    Text,
    Grid,
    Center
  } from '@chakra-ui/react';
import { useState } from 'react';
import Card from './card';
import { IoMdArrowDropdownCircle } from "react-icons/io"
import styles from "../styles/event.module.scss"
  
const EventList = ({events}) => {
    const [currentPage, setcurrentPage] = useState(1)
    let indexOfLastItems = currentPage * 6
    let indexOfFirstItems = (currentPage - 1) * 6
    const pages = Array.apply(null, Array(Math.ceil(events.length / 6))).map(function(currentValue, index) { return index;});
    console.log(pages);

    
    if(events.length < indexOfLastItems){
        indexOfLastItems = events.length
    }
    const currentItems = events.slice(indexOfFirstItems, indexOfLastItems)

    const handleClick = (pageNumber) => {
        setcurrentPage(pageNumber)
    }

    let numOfPreEvent = 0
    return(
        <Box p="120px" 
        bgColor="#04040C">

            <Text 
            color="white" 
            className="sectionHeader"
            mb={6}
            >
                Events List
            </Text>

            <Grid 
            templateColumns="repeat(3, 1fr)" 
            rowGap="72px" 
            columnGap="84px">
                {currentItems.map((el, index) => {
                    if(el.type === "Pre-Event"){
                        numOfPreEvent++
                        return(
                            <Card title={el.title} image={el.src} caption={el.caption} type={el.type} date={el.date} fee={el.fee} key={index} numOfPreEvent={numOfPreEvent}/>
                        )
                    }
                    return(
                        <Card title={el.title} image={el.src} caption={el.caption} type={el.type} date={el.date} fee={el.fee} key={index} numOfPreEvent={0} />
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