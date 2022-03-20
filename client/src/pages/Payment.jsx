
import {
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel 
} from '@chakra-ui/react'

import { MercadoPagoForm } from '../components/mercadoPago/MercadoPagoForm.jsx';

export const Payment = () => {


  return (


    <Container maxW='container.lg' mt={4} border='black'>
      <Box borderWidth='1px' borderRadius='sm' borderColor='gray.300'>
        <Tabs isFitted isLazy variant='enclosed unstyled'>
          <TabList mb='1em'>
          <Tab fontWeight='semibold' _selected={{ color: 'white', bg: 'blue.500' }}>Datos de Envio</Tab>
          <Tab fontWeight='semibold' _selected={{ color: 'white', bg: 'blue.500' }}>Datos de Pago</Tab>
          <Tab fontWeight='semibold' _selected={{ color: 'white', bg: 'blue.500' }}>Confirmacion</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
            <p>Datos de envio</p>
            </TabPanel>
            <TabPanel>
            <MercadoPagoForm />
            </TabPanel>
            <TabPanel>
            <p>Confirmacion</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
    </Box>
    </Container>
  );
}
