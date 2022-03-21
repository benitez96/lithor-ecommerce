import { useState } from 'react';
import {
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Button,
} from '@chakra-ui/react'

import { MercadoPagoForm } from '../components/mercadoPago/MercadoPagoForm.jsx';
import { DatosEnvioForm } from '../components/datosEnvio/DatosEnvioForm.jsx';
import { Confirmacion } from '../components/confirmacion/Confirmacion.jsx';

export const Payment = () => {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container px={0} maxW='container.lg' mt={4} border='black'>
      <Box 
        borderWidth='1px' 
        borderRadius='sm' 
        overflowY='auto' 
        h="85vh" 
        borderColor='gray.300'
        display='flex'

      >
        <Tabs 
          index={tabIndex} 
          isFitted 
          variant='enclosed unstyled' 
          w='100%'
          display='flex'
          flexDirection='column'
        >
          <TabList mb='1em' w='100%'>
            <Tab fontSize={{base:'sm', md:'md'}} fontWeight='semibold' _selected={{ color: 'white', bg: 'blue.500' }}>Envio</Tab>
            <Tab fontSize={{base:'sm', md:'md'}} fontWeight='semibold' _selected={{ color: 'white', bg: 'blue.500' }}>Pago</Tab>
            <Tab fontSize={{base:'sm', md:'md'}} fontWeight='semibold' _selected={{ color: 'white', bg: 'blue.500' }}>Confirmacion</Tab>
          </TabList>

          <TabPanels display='flex' w='100%' h='100%'>
            <TabPanel 
              display='flex'
              w='100%' 
              h='100%' 
              direction='column'
            >
              <Stack
                w='100%' 
                h='100%' 
                direction='column'
                justifyContent='space-between'
              >
                <DatosEnvioForm />
                <Stack
                  alignItems="end"
                  justifyContent='end'
                  direction='row'
                  p={4}
                >
                  <Button 
                    onClick={() => setTabIndex(tabIndex + 1)}
                    colorScheme='blue'
                  >
                    Siguiente
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel 
              display='flex'
              w='100%' 
              h='100%' 
              direction='column'
            >
              <Stack
                w='100%' 
                h='100%' 
                direction='column'
                justifyContent='space-between'
              >
                <MercadoPagoForm />
                <Stack
                  justifyContent='space-between'
                  direction='row'
                  p={4}
                >
                  <Button 
                    onClick={() => setTabIndex(tabIndex - 1)}
                    colorScheme='blue'
                  >
                    Atras
                  </Button>
                  <Button 
                    onClick={() => setTabIndex(tabIndex + 1)}
                    colorScheme='blue'
                  >
                    Siguiente
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel 
              display='flex'
              w='100%' 
              h='100%' 
              direction='column'
            >
              <Stack
                w='100%' 
                h='100%' 
                direction='column'
                justifyContent='space-between'
              >
                <Confirmacion />
                <Stack
                  justifyContent='space-between'
                  direction='row'
                  p={4}
                >
                  <Button 
                    onClick={() => setTabIndex(tabIndex - 1)}
                    colorScheme='blue'
                  >
                    Atras
                  </Button>
                  <Button 
                    // isLoading={resultPayment == 'loading'}
                    type="submit" 
                    id="form-checkout__submit"
                    form="form-checkout"
                    colorScheme='blue'
                    loadingText="Procesando..."
                  >
                    Confirmar Pago
                  </Button>
                </Stack>
              </Stack>

            </TabPanel>
          </TabPanels>
        </Tabs>
    </Box>
    </Container>
  );
}
