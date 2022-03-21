import { useSelector } from 'react-redux';
import {
  Stack,
  StackDivider,
  Box,
} from '@chakra-ui/react';

import { ProductCard } from '../cart/ProductCard';
import { CartDetail } from '../cart/CartDetail';

export const Confirmacion = () => {

  const { products, totalAmount } = useSelector(state => state.cart);

  return (
    <Stack 
      direction={{base:'column', md:'row'}} 
      spacing={4}
      justifyContent="space-between"
      alignItems="center"
      px={4}
      h='100%'
    >
      <Stack 
        direction="column" 
        spacing={1} 
        divider={ <StackDivider borderColor='gray.300' /> }
        overflowY="auto"
        h='100%'
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
