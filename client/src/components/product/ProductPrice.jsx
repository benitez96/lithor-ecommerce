import React from 'react';

import {
  Flex,
  Box
} from '@chakra-ui/react'

export const ProductPrice = ({ price, sign="$" }) => {
  return (
    <Flex justifyContent="space-between" alignContent="center">
      <Box fontSize="md" >
        <Box as="span" color={'gray.600'} fontSize="md" px={1}>
          { sign }
        </Box>
        {price.toFixed(2)}
      </Box>
    </Flex>
  );
}
