import React from 'react';

import {
  Center,
  Image,
  Box,
} from '@chakra-ui/react'

import { ProductCategories } from './ProductCategories.jsx'


export const ProductImage = ({ product }) => {
  return (
    <Center 
      mb={2} 
      bg="white" 
      h={{ base: '270px', sm: '170px' }} 
      overflow="hidden"
      position="relative"
      objectFit="cover"
    >
      <Image
        src={product.image}
        alt={`Picture of ${product.name}`}
        h="100%"
      />
      <Box position="absolute" left={3} bottom={3}>
        <ProductCategories categories={ product.categories } />
      </Box>
    </Center>
  );
}
