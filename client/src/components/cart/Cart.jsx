import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Drawer,
  Divider,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Stack,
  StackDivider,

} from '@chakra-ui/react';

import { ProductCard } from './ProductCard'
import { CartDetail } from './CartDetail';
import { addItem } from '../../reducers/cartReducer'


export const Cart = ({ isOpen, onClose }) => {

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
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      size='sm'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Carrito de compras</DrawerHeader>

        <DrawerBody>
          <Stack direction="column" spacing={1} divider={ <StackDivider borderColor='gray.300' /> }>
            {
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))

            }
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Stack justifyContent='center' w='100%'>
            <Divider orientation='horizontal' borderColor='gray.400'/> 
            <CartDetail totalAmount={ totalAmount } />
            <Button colorScheme='blue' as={Link} to='/payment'>INICIAR COMPRA</Button>
            <Button variant='outline' mr={3} onClick={onClose}>
              Ver mas productos
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
