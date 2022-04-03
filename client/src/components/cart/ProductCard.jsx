import { useDispatch } from 'react-redux';
import { IoTrashOutline } from 'react-icons/io5';

import {
  useNumberInput,
  HStack,
  Button,
  Input,
  Text,
  Box,
  Image,
  Stack,

} from '@chakra-ui/react';

import { decreaseByOne, increaseByOne, removeItem } from '../../reducers/cartReducer';

export const ProductCard = ({ product, min=0, max=20 }) => {

  const dispatch = useDispatch();

  const handleDecrease = () => {
    if ( product.quantity > 1 ) {
      dispatch(decreaseByOne(product));
    }else{
      dispatch(removeItem(product));
    }
  }


  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Image src={product.image} alt={product.name} maxH='100px'/>
        <Stack spacing={1} pt={4}>
          <HStack>
            <Text fontWeight='semibold'>{product.name}</Text>
            <Text fontSize={12} color="gray.700">({ product.size })</Text>
          </HStack>
          <Text>{product.price}</Text>
          <HStack maxW='100px' spacing={0}>
            <Button size='xs' onClick={ handleDecrease }> - </Button>
            <Input size='xs' readOnly value={ product.quantity } px={0} textAlign='center'/>
            <Button size='xs' onClick={ () => dispatch(increaseByOne(product)) }> + </Button>
          </HStack>
        </Stack>
        <Stack w="100%"  alignItems="end" p={4}>
          <Button size='sm' variant="ghost" onClick={ () => dispatch(removeItem(product)) }>
            <IoTrashOutline size='1.5em'/>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
