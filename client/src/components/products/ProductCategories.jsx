import React from 'react';

import {
  Box,
  Badge,
} from '@chakra-ui/react'

export const ProductCategories = ({ categories }) => {
  return (
    <Box d="flex" alignItems="baseline">
      {
        categories?.map( category => (
          <Badge 
            key={category.id} 
            px={2} 
            fontSize={10} 
            bg="purple"
            color="white"
          >
            {category.name} 
          </Badge>
        )) 
      }
    </Box>
  );
}
