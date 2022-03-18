import React from 'react';

import {
  Stack,
  Box,
  Button,
  Skeleton,
  Flex,
  HStack,
} from '@chakra-ui/react';

export const ProductLoadSkeleton = ({ props }) => {
  return (
    <>
      <Skeleton mx={4} mt={1}>
        <Box
          bg="gray.200"
          w={{ base: 'full', sm: '65%' }}
          h="full"
        >
          <Box h='100vw' w={{base: '300px', sm: '600px'}} objectFit='cover'></Box>
        </Box>
      </Skeleton>
      <Flex
        as="aside"
        w={{ base: 'full', sm: '35%' }}
        p={6}
        pt={4}
        h="full"
        direction="column"
      >
        <Skeleton mb={3} w='90%'>
          <Box h={16} w={10}>
          </Box>
        </Skeleton>
        <Skeleton mb={4} w='40%'>
          <Box h={10} w={6}>
          </Box>
        </Skeleton>
        <HStack mb={8} wrap="wrap">

          <Skeleton w='35%' display='inline'>
            <Box minW='80px' h={16} w={6}>
            </Box>
          </Skeleton>

          <Skeleton w='62%'>
            <Box minW='135px' h={16} w={6}>
            </Box>
          </Skeleton>
        </HStack>
        <Skeleton>
          <Button colorScheme='teal' size='lg'>
            Agregar al carrito
          </Button>
        </Skeleton>
      </Flex>
    </>
  );
}
