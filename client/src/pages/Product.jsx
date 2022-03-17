import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Stack,
  Box,
  AspectRatio,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';

import { fetchProductById, setProduct } from '../reducers/currentProductReducer';
import { ProductLoad } from '../components/productLoad/ProductLoad'

export const Product = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    const aux = products?.find(product => product.id == id)
    aux ? dispatch(setProduct(aux)) : dispatch(fetchProductById({ id }))
    
  }, [dispatch, id]);

  const { product, status } = useSelector(state => state.currentProduct)

  return (
    status === 'succeeded' && (
      <Stack 
        spacing={0} 
        h="full"
        direction={{ base: 'column', sm: 'row' }}
        mx={-4}
      >
        <Box
          bg="gray.200"
          w={{ base: 'full', sm: '65%' }}
          h="full"
        >
          <AspectRatio ratio={ 1 } maxH="full">
            <Image
              src={product.image_url}
              alt={product.name}
              objectFit="cover"
            />
          </AspectRatio>
        </Box>
        <ProductLoad product={ product } />
      </Stack>

    )
  );
}
