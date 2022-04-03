import { FC, useCallback, useState } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  Box,
  Text, } from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

import { ImageFileCard } from './ImageFileCard';
import { Product, Variant } from '../../../types/Product';
import {SizeVariant} from './SizeVariant';
import { useVariants } from '../../../hooks/useVariants'
import {uploadImage} from '../../../utils/imageUpload';


interface Image{
  file: File;
  is_primary: boolean;
}

interface Form {
  cost: number
  price: number
  description: string
  name: string
}

export const ProductAddForm: FC = () => {

  const [images, setImages] = useState<Image[]>([]);
  const [ form, setForm ] = useState<Form>({} as Form)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { 
    variants,
    incrementVariantBy,
  } = useVariants(['XS', 'S', 'M', 'L', 'XL'])

  const handleVariantQty = useCallback((s: string, n: number) => {
    incrementVariantBy(s, n)
  }, [incrementVariantBy ])


  const handleInputChange = (e) => {
    const file = e.target.files[0];

    const is_repeated = images.some(image => image.file.name === file?.name);

    if ( !file || is_repeated ) return;

    const is_primary = false;
    const aux_images = [...images, { file, is_primary }]
    aux_images[0].is_primary = true;
    setImages(aux_images);


  }

  const handleAddImage = () => {
    document.getElementById('image-input')?.click();
  }

  const handleRemoveImage = (file: File) => {
    const aux_images = images.filter((image) => image.file.name !== file.name);
    setImages(aux_images);
  }

  const handleSubmit = async() => {

    setIsLoading(true);
    const images_call = images.map( image => uploadImage(image.file));

    const imageUrls: {url: string}[] = []
    await Promise.all(images_call).then( res => imageUrls.push(...res.map( url => ({ url }) )));

    const current_product: any = { 
        name: form.name,
        image: imageUrls[0].url,
        description: form.description,
        variants: variants.map( v => (
          {
            size: v.size,
            quantity: v.quantity,
            cost: form.cost,
            price: form.price,
            images: imageUrls
          }
        ))
    }
    const response = await fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(current_product)
    })

    setIsLoading(false);
    Swal.fire({
      title: 'Producto agregado',
      text: 'El producto ha sido agregado exitosamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    })

  }

  const handleFormChange = (e) => {

    setForm(
      { ...form, [ e.target.name ]: e.target.value }
    )
  }


  return (
    <Container maxW='container.sm'>
      <Stack p={10}> 
        <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input onChange={handleFormChange} name="name" placeholder="Name" autoComplete='off' />
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Input onChange={handleFormChange} name="description" placeholder="Description" autoComplete='off' />
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="cost">Cost</FormLabel>
        <Input onChange={handleFormChange} name="cost" placeholder="Cost" autoComplete='off'/>
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="price">Price</FormLabel>
        <Input onChange={handleFormChange} type='tel' name="price" placeholder="Price" autoComplete='off' />
        </FormControl>

        <FormControl>
          <Input onChange={ handleInputChange } id="image-input" placeholder="Image" type='file' hidden />
        </FormControl>
      <Stack 
        direction="row"
        justifyContent='space-between'
      >
        <Box>
          Imagenes
        </Box>
          <Box>
            <Button onClick={ handleAddImage }>
            <AddIcon />
            </Button>
          </Box>
      </Stack>
      <Stack 
      >
      {

        images.map((image) => (
          <ImageFileCard 
            key={image.file.name}
            onDelete={ handleRemoveImage } 
            {...image} 
            />
        ))
        }
          </Stack>
        <Text>
        Variantes
        </Text>
        {
          variants?.map( variant => ( 
            <SizeVariant 
              key={variant.size}
              size={variant.size}
              quantity={variant.quantity || 0}
              onChangeQuantity={ handleVariantQty } 
              />
                                    )
                       )

      }

      <Button 
        isLoading={ isLoading }
        loadingText='Guardando'
        onClick={ handleSubmit }
        colorScheme='whatsapp'
      >
        Guardar
      </Button>


      </Stack> 
      </Container>
  )
}
