import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'

export const OtpPage = () => {
  return (
    <div>
        <HStack>
  <PinInput type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
    </div>
  )
}
