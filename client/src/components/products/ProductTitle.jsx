import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react'

export const ProductTitle = ({ title }) => {
  return (
    <Flex mt="1" justifyContent="space-between" alignContent="center">
      <Box
        fontSize="xl"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated>
        {title.toUpperCase()}
      </Box>
    </Flex>
  );
}
