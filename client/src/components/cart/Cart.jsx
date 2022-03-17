import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Divider,
  Text,
  Button,
  Input,
  Image,
  Stack,
  HStack,
  Box,
  StackDivider,
  useNumberInput,

} from '@chakra-ui/react';

import { ProductCard } from './ProductCard'


export const Cart = ({ isOpen, onClose }) => {

  const { products, totalAmount } = useSelector(state => state.cart);

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
            <HStack justifyContent='space-between'> 
              <Text fontSize='sm' color='gray.600'>Subtotal:</Text>
              <Text fontSize='sm' color='gray.600'>${totalAmount}</Text>
            </HStack>
            <HStack justifyContent='space-between'> 
              <Text fontSize='sm' color='gray.600'>Envio:</Text>
              <Text fontSize='sm' color='gray.600'>Se calcula mas adelante</Text>
            </HStack>
            <HStack py={3} justifyContent='space-between'> 
              <Text fontWeight='semibold' fontSize='lg'>Total:</Text>
              <Text fontWeight='semibold' fontSize='lg'>${totalAmount}</Text>
            </HStack>
            <Button colorScheme='blue'>INICIAR COMPRA</Button>
            <Button variant='outline' mr={3} onClick={onClose}>
              Ver mas productos
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
