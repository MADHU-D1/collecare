import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const phoneNumber = "6305958099"; // Replace this with your desired phone number

  return (
    <Box>
      <Text>Click the number to call:</Text>
      <a href={`tel:${phoneNumber}`}>
        <Input value={phoneNumber} readOnly />
      </a>
    </Box>
  )
}
