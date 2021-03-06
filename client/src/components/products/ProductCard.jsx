import React from 'react';

import {
  WrapItem,
  Box
} from '@chakra-ui/react'

import { FiShoppingCart } from 'react-icons/fi';


export const ProductCard = ({ children, product }) => {
  return (
    <WrapItem
      w={{base: '100%', sm: '33%', md: '25%'}} 
      h={{base: '400px', sm: '300px'}} 
      p={0}
      mb={10}
    >
      <Box w="100%" h="100%">
        { children }
      </Box>
    </WrapItem>
  );
}
