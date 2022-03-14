import { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi';

import {
  Container,
  Spinner,
  Stack,
  Wrap,
  Text,
} from '@chakra-ui/react'

import { ProductCard } from '../components/product'
import { fetchProducts } from '../reducers/productsReducer'

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const isMounted = useRef(false)
  const { products, status } = useSelector(state => state.products)



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
      : status === 'loading' 
      ?
        <Container bg={'gray.500'} minH="85%" alignSelf="center">
          <Spinner />
        </Container>

      :
      <Container bg={'gray.500'} minH="85%" alignSelf="center">
        <Text>Error al cargar los productos</Text>
      </Container>
    }
    </Stack>
  );
}
