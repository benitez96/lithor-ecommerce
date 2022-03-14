import React from 'react';

import {
  Box,
} from '@chakra-ui/react'

export const ProductFooter = ({ children }) => {
  return (
    <Box p='5px' h='120px'>
      { children }
    </Box>
  );
}
