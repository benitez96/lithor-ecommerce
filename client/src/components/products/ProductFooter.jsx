import React from 'react';

import {
  VStack,
} from '@chakra-ui/react'

export const ProductFooter = ({ children }) => {
  return (
    <VStack spacing={1} p='10px' h='120px' justifyContent='start' alignItems='start'>
      { children }
    </VStack>
  );
}
