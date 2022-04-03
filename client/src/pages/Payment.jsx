import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { setCheckOutPage } from '../reducers/pagesReducer.js';
import { EstadoPago } from '../components/estadoPago/EstadoPago'

import useMercadoPago from '../hooks/useMercadoPago'

export const Payment = () => {

  const dispatch = useDispatch();

  const handleChange = (e) => {

    shipping.current = {
        ...shipping.current,
        [e.target.dataset.name || e.target.name]: e.target.value,
      }
  };

  const [tabIndex, setTabIndex] = useState(0);


  useEffect(() => {
    dispatch(setCheckOutPage(true))
  }, []);

  const {resultPayment, shipping} = useMercadoPago();

  return (
    <Container p={0} maxW='container.lg' mt={4} border='black'>
      {
        (!resultPayment || resultPayment == 'loading') ? (
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
                    <DatosEnvioForm handleChange={ handleChange } />
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
                        isLoading={resultPayment == 'loading'}
                        loadingText='Procesando pago...'
                        type="submit" 
                        id="form-checkout__submit"
                        form="form-checkout"
                        colorScheme='blue'
                      >
                        Confirmar Pago
                      </Button>
                    </Stack>
                  </Stack>

                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )
        :
        (

          <Box 
            borderWidth='1px' 
            borderRadius='sm' 
            h="85vh" 
            borderColor='gray.300'
            display='grid'
            alignItems='center'
            justifyContent='center'
          >
            <EstadoPago 
              approved={resultPayment?.status == 'approved'} 
            />
          </Box>
        )
      }
    </Container>
  );
}
