import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

export const DatosEnvioForm = ({ handleChange }) => {

  return (

  <Stack>
  <Accordion allowMultiple defaultIndex={[0]}>
    <AccordionItem>
      <h2>
        <AccordionButton bg='gray.200'>
          <Box flex='1' textAlign='left' fontWeight='semibold'>
            Datos del titular
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

      <Stack spacing={4} mt={4}>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            name='name'
            borderColor='gray.400'
            onChange={handleChange}
          />
          <FormLabel>Nombre</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            name='last_name'
            borderColor='gray.400'
            onChange={handleChange}
          />
          <FormLabel>Apellido</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            name='phone'
            borderColor='gray.400'
            onChange={handleChange}
          />
          <FormLabel>Telefono</FormLabel>
        </FormControl>
    </Stack>

      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton bg='gray.200'>
          <Box flex='1' textAlign='left' fontWeight='semibold'>
            Datos de envio
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

      <Stack spacing={4} mt={4}>
        <Stack direction={{base: 'column', md: 'row'}} spacing={4}>
          <FormControl
            variant='floating'
            w={{base: '100%', md: '50%'}}
          >
            <Input
              name='street'
              borderColor='gray.400'
              onChange={handleChange}
            />
            <FormLabel>Calle</FormLabel>
          </FormControl>
          <Stack spacing={4} direction='row' w={{base: '100%', md:'50%'}}>
            <FormControl
              variant='floating'
              w='50%'
            >
              <Input
                name='street_number'
                borderColor='gray.400'
                onChange={handleChange}
              />
              <FormLabel>Numero</FormLabel>
            </FormControl>
            <FormControl
              variant='floating'
              w='50%'
            >
              <Input
                name='flat'
                borderColor='gray.400'
                onChange={handleChange}
              />
              <FormLabel>Departamento</FormLabel>
            </FormControl>
          </Stack>
        </Stack>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            name='city'
            borderColor='gray.400'
            onChange={handleChange}
          />
          <FormLabel>Ciudad</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            name='zip_code'
            borderColor='gray.400'
            onChange={handleChange}
          />
          <FormLabel>Codigo Postal</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            name='state'
            borderColor='gray.400'
            onChange={handleChange}
          />
          <FormLabel>Provincia</FormLabel>
        </FormControl>
    </Stack>

      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton bg='gray.200'>
          <Box flex='1' textAlign='left' fontWeight='semibold'>
            Datos de facturacion
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

        <Stack spacing={4} mt={4}>
          <FormControl
            variant='floating'
            w='100%'
          >
            <Input
              name='dni'
              borderColor='gray.400'
              onChange={handleChange}
            />
            <FormLabel>DNI o CUIL</FormLabel>
          </FormControl>
        </Stack>

      </AccordionPanel>
    </AccordionItem>
  </Accordion>



    </Stack>

    
  );
}
