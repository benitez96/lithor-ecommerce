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

export const DatosEnvioForm = () => {
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
            borderColor='gray.400'
          />
          <FormLabel>Nombre</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            borderColor='gray.400'
          />
          <FormLabel>Apellido</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            borderColor='gray.400'
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
              borderColor='gray.400'
            />
            <FormLabel>Calle</FormLabel>
          </FormControl>
          <Stack spacing={4} direction='row' w={{base: '100%', md:'50%'}}>
            <FormControl
              variant='floating'
              w='50%'
            >
              <Input
                borderColor='gray.400'
              />
              <FormLabel>Numero</FormLabel>
            </FormControl>
            <FormControl
              variant='floating'
              w='50%'
            >
              <Input
                borderColor='gray.400'
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
            borderColor='gray.400'
          />
          <FormLabel>Ciudad</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            borderColor='gray.400'
          />
          <FormLabel>Codigo Postal</FormLabel>
        </FormControl>
        <FormControl
          variant='floating'
          w='100%'
        >
          <Input
            borderColor='gray.400'
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
              borderColor='gray.400'
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
