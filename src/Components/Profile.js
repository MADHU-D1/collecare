import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Gallery from './Gallery'
import Footer from './Footer'

export default function Profile() {
  return (
   <Box textAlign='center'>
     <Text fontSize='30px'  fontFamily='poppins' bg='red'>SATISH COOL CARE OF AC Services & Repair</Text>
      <Box >
       <Gallery/>
       <Footer/>
       </Box>
   </Box>   
  )
}
