import React from 'react';

import {
  Center,
  Image,
  Box,
  AspectRatio,
} from '@chakra-ui/react'

import { ProductCategories } from './ProductCategories.jsx'


export const ProductImage = ({ product }) => {
  return (
    <Center 
      mb={2} 
      bg="white" 
      h="calc(100% - 130px)" 
      overflow="hidden"
      position="relative"
    >
      <Image
        src={product.image_url}
        alt={`Picture of ${product.name}`}
        h="100%"
      />
      <Box position="absolute" left={3} bottom={3}>
        <ProductCategories categories={ product.categories } />
      </Box>
    </Center>
  );
}
