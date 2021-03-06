import { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setCheckOutPage } from '../reducers/pagesReducer';

import {
  Container,
  Stack,
  Wrap,
  Text,
  Skeleton,
  Box,
} from '@chakra-ui/react'

import { ProductCard } from '../components/products'
import { sample } from '../data/sampleProducts'
import { fetchProducts } from '../reducers/productsReducer'
import { cleanProduct } from '../reducers/currentProductReducer'

export const Home = () => {

  const dispatch = useDispatch()

  const { products, status } = useSelector(state => state.products)

  useEffect(() => {

    dispatch(setCheckOutPage(false))

    !products.length && dispatch(fetchProducts());
    dispatch(cleanProduct())

  }, [dispatch]);

  return (
    <Stack>
    {
      status === 'succeeded'
      ? 
      <Wrap
        p={0}
        spacing={0}
      >
        {
          products.map( product => (
            <ProductCard 
              key={ product.id } 
              product={ product }
            >
              <Link
                to={ `/product/${product.id}` }
              >
                <ProductCard.Image product={ product }/>
                <ProductCard.Footer>
                  <ProductCard.Title title={ product.name } />
                  <ProductCard.Price price={ product.variants[0].price } />
                  <ProductCard.Description description={product.description}/>
                </ProductCard.Footer>
              </Link>
            </ProductCard>
          ))
        }
      </Wrap>
      : status === 'loading' 
      ?
      <Wrap
        m={1}
        spacing={0}
      >
        {
          sample.map( product => (
            <ProductCard 
              key={ product.id } 
              product={ product }
            >
              <Box p={1}>
                <Skeleton >
                  <Box
                    h={{ base: '270px', sm: '170px' }} 
                    w={{base: '100%', sm: '33%', md: '25%'}} 
                    pb={1}
                  ></Box>
                </Skeleton>
              </Box>
              <Stack direction="column" spacing={1} p={1}>
                <Box>
                  <Skeleton w="80%">
                    <ProductCard.Title title={ product.name } />
                  </Skeleton>
                </Box>
                <Box w="30%">
                  <Skeleton>
                    {/* <ProductCard.Price price={ product.price } /> */}
                  </Skeleton>
                </Box>
                <Skeleton w="75%">
                  <Box h={5}></Box>
                </Skeleton>
              </Stack>
            </ProductCard>
          ))
        }
      </Wrap>

      :
      <Container bg={'gray.500'} minH="85%" alignSelf="center">
        <Text>Error al cargar los productos</Text>
      </Container>
    }
    </Stack>
  );
}
