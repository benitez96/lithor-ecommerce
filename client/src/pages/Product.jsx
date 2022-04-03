import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Stack,
  Box,
  AspectRatio,
  Image,
} from '@chakra-ui/react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import { fetchProductById, setProduct } from '../reducers/currentProductReducer';
import { ProductLoad } from '../components/productLoad/ProductLoad'
import { ProductLoadSkeleton } from '../components/productLoad/ProductLoadSkeleton'
import {setCheckOutPage} from '../reducers/pagesReducer';

export const Product = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(setCheckOutPage(false))
  }, []);

  useEffect(() => {
    const aux = products?.find(product => product.id == id)
    aux ? dispatch(setProduct(aux)) : dispatch(fetchProductById({ id }))
    
  }, [dispatch, id]);

  const { product, status } = useSelector(state => state.currentProduct)

  return (
    
      <Stack 
        spacing={0} 
        h="full"
        direction={{ base: 'column', sm: 'row' }}
        mx={-4}
      >
        {
        status === 'succeeded' 
        ?
          <>
            <Box
              bg="gray.200"
              w={{ base: 'full', sm: '65%' }}
              h="full"
            >
              <Carousel
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
                swipeable={true}
              >
                {
                  product.variants[0].images.map((image, i) => (
                    <AspectRatio ratio={ 1 } maxH="full" key={i}>
                      <Image
                        src={image.url}
                        objectFit="cover"
                      />
                    </AspectRatio>
                  ))
                }
              </Carousel>
            </Box>
            <ProductLoad product={ product } />
          </>

        :
          <ProductLoadSkeleton />
        }
      </Stack>

    )
}
