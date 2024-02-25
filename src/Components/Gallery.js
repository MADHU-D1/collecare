import { Box, Grid, Img } from '@chakra-ui/react'
import React from 'react'

export default function Gallery() {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} m='30px'>
        <Img src='/washproductimg1.jpg' w='600px' h='300px' />
        <Img src='/productimg2.jpg' w='600px' h='300px' />
        <Img src='/productimg3.jpg' w='500px' h='300px' />
        <Img src='/productimg4.jpg' w='500px' h='300px' />
      </Grid>
    </Box>
  )
}
