import {
  Box
} from "@chakra-ui/react";

import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from "../component/navbar";
import Slideshow from "../component/slideshow";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Slideshow />
    </Box>
    
  )
}
