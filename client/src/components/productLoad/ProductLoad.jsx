import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../reducers/cartReducer'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  FormControl,
  Select,
  Text,
  HStack,
} from '@chakra-ui/react';

import { QuantityButtons } from './QuantityButtons'


export const ProductLoad = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('XL');

  const dispatch = useDispatch();

  const handleSize = (e) => {
    setSize(e.target.value);
  }

  const handleAddToCart = () => {
    const cartProduct = Object.assign({}, product, { quantity, size })
    cartProduct.id = `${cartProduct.id}-${cartProduct.size}`
    dispatch(addItem(cartProduct));
  }


  return (
    <Flex
      as="aside"
      w={{ base: 'full', sm: '35%' }}
      p={6}
      pt={4}
      h="full"
      direction="column"
    >
      <Text
        as="h2"
        fontSize="5xl"
        fontWeight="semibold"
        color="gray.900"
        mb={4}
      >
        { product.name }
      </Text>
      <Text
        fontSize="2xl"
        color="gray.800"
        mb={4}
      >
        $ { product.price }
      </Text>
      <HStack spacing='10%' mb={8} wrap="wrap">

        <FormControl w='35%' minW='80px' display='inline-block'>
          <FormLabel htmlFor='talle'>Talle</FormLabel>
          <Select onChange={ handleSize } id='talle' defaultValue={'XL'} >
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
          </Select>
        </FormControl>

        <QuantityButtons onChangeQty={ setQuantity } />
      </HStack>
      <Button onClick={ () => handleAddToCart() } colorScheme='teal' size='lg'>
        Agregar al carrito
      </Button>
    </Flex>
  );
}
