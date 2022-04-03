import React from 'react';

import {
  Flex,
  Box
} from '@chakra-ui/react'

export const ProductPrice = ({ price, sign="$" }) => {
  return (
    <Flex justifyContent="space-between" alignContent="center">
      <Box fontSize="lg" >
        <Box as="span" color={'gray.600'} fontSize="md" px={1}>
          { sign }
        </Box>
        {parseFloat(price).toFixed(2)}
      </Box>
    </Flex>
  );
}
