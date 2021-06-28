import {
    Box
  } from "@chakra-ui/react";
  import Carousel from "../../component/carousel";
  import Navbar from "../../component/navbar";
  
  export default function Home() {
    return (
      <Box>
        <Navbar />
        <Carousel />
      </Box>
      
    )
  }
  