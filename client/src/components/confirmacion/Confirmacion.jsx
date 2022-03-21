import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Stack,
  StackDivider,
  Box,
} from '@chakra-ui/react';

import { ProductCard } from '../cart/ProductCard';
import { CartDetail } from '../cart/CartDetail';

export const Confirmacion = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      for ( let product of cart) {
        dispatch(addItem(product));
      }
    }
    
  }, []);

  const { products, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products])

  return (
    <Stack 
      direction={{base:'column', md:'row'}} 
      spacing={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack 
        direction="column" 
        spacing={1} 
        divider={ <StackDivider borderColor='gray.300' /> }
        overflowY="auto"
        maxH="50vh"
        p={1}
      >
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      </Stack>
        <Box w={{base: '100%', md:'40%'}}>
          <CartDetail totalAmount={totalAmount} />
        </Box>
    </Stack>
  );
}
