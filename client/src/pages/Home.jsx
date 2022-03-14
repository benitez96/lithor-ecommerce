import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { FiShoppingCart } from 'react-icons/fi';

import {
  Container,
  Spinner,
  Icon,
  Stack,
  Circle,
  Center,
  Box,
  Image,
  Badge,
  Text,
  Flex,
  Tooltip,
  Grid,
  GridItem,
  Wrap,
  WrapItem
} from '@chakra-ui/react'


export const Home = () => {

  const { data: products, loading } = useFetch( 'http://localhost:8000/api/products' );

  console.log(products)

  return (
    <Stack
    >
      {
        products
        ? 

      <Wrap
        direction="row"
        justify="center"
        
      >
      {
        products.map( product => (
          <WrapItem key={ product.id } >
            <Box boxShadow='2xl' h={400} w={300} mt={10}>
              <Center h='60%'>
              <Image
                src={product.image_url}
                alt={`Picture of ${product.name}`}
                roundedTop="lg"
                h="100%"
              />
              </Center>

              <Box p="6" h='40%'>
                <Box d="flex" alignItems="baseline">
          {
            product.categories.map( category => (
                  <Badge key={category.id} rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                {category.name} </Badge>)) }
                </Box>
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated>
                  {product.name.toUpperCase()}
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={'top'}
                  color={'gray.800'}
                  fontSize={'1.2em'}
                >
                  <Box href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                  </Box>
                </Tooltip>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                  <Box fontSize="2xl" >
                    <Box as="span" color={'gray.600'} fontSize="lg">
                    $
                    </Box>
                  {product.price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
          </Box>
          </WrapItem>
        ))
      }
      </Wrap>

        : 

        <Container bg={'gray.500'} minH="85%" alignSelf="center">
          <Spinner />
        </Container>

      }
    </Stack>
  );
}
