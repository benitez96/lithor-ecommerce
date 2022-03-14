import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { FiShoppingCart } from 'react-icons/fi';

import {
  Container,
  Spinner,
  Stack,
  Wrap,
} from '@chakra-ui/react'

import { ProductCard } from '../components/product'


export const Home = () => {

  const { data: products, loading } = useFetch( 'http://localhost:8000/api/products' );

  return (
    <Stack>
    {
      products
      ? 

      <Wrap
        p={0}
        spacing={0}
      >
        {
          products.map( product => (
            <ProductCard key={ product.id } product={ product }>
              <ProductCard.Image product={ product }/>
              <ProductCard.Footer>
                <ProductCard.Title title={ product.name } />
                <ProductCard.Price price={ product.price } />
                <ProductCard.Description description={`3 Cuotas sin interes de $ ${Math.round(product.price / 3 * 100) / 100}`}/>
              </ProductCard.Footer>
            </ProductCard>
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
