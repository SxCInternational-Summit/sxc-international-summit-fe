import {
    Box,
    Text,
    Grid,
    Center
  } from '@chakra-ui/react';
import { useState } from 'react';
import Card from './card';
  
const EventList = ({events}) => {
    const [currentPage, setcurrentPage] = useState(1)
    let indexOfLastItems = currentPage * 6
    let indexOfFirstItems = (currentPage - 1) * 6
    const pages = [...Array(0, Math.ceil(events.length) / 6).keys()]

    
    if(events.length < indexOfLastItems){
        indexOfLastItems = events.length
    }
    const currentItems = events.slice(indexOfFirstItems, indexOfLastItems)


    let numOfPreEvent = 0
    return(
        <Box p="120px" bgColor="#04040C">
            <Text color="white" className="sectionHeader">Our Event List</Text>
            <Grid templateColumns="repeat(3, 1fr)" rowGap="72px" columnGap="84px">
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
            <Center>
                {pages.map((el, index) => {
                    return(
                    <Text key={index} color="white">{el + 1}</Text>
                    )
                })}
            </Center>
        </Box>
        
    )
}

export default EventList;