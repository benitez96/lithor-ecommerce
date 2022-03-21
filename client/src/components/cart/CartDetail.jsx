import React from 'react';
import {
  Divider,
  HStack,
  Text
} from '@chakra-ui/react'

export const CartDetail = ( { totalAmount } ) => {
  return (
    <>
      <HStack justifyContent='space-between'> 
        <Text fontSize='sm' color='gray.600'>Subtotal:</Text>
        <Text fontSize='sm' color='gray.600'>${totalAmount}</Text>
      </HStack>
        <HStack justifyContent='space-between'> 
        <Text fontSize='sm' color='gray.600'>Envio:</Text>
        <Text fontSize='sm' color='gray.600'>Se calcula mas adelante</Text>
      </HStack>
      <HStack py={3} justifyContent='space-between'> 
        <Text fontWeight='semibold' fontSize='lg'>Total:</Text>
        <Text fontWeight='semibold' fontSize='lg'>${totalAmount}</Text>
      </HStack>
    </>
  );
}
