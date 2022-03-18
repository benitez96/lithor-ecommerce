import React from 'react';
import { Text } from '@chakra-ui/react'

export const ProductDescription = ({ description }) => {
  return (
    <Text ps={1} fontSize="xs">
      { description }
    </Text>
  );
}
