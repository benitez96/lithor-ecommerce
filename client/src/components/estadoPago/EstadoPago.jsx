import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Grid,
} from "@chakra-ui/react";


export const EstadoPago = ({ approved }) => {
  return (
        approved
        ? 
        (
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
              Pago realizado con éxito
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
              Gracias por su compra. En breve recibirá un correo con los detalles de facturación.
              </AlertDescription>
          </Alert>
        )
        :
        (
          <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
              Pago no realizado
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
              Ha ocurrido un error al realizar el pago. Por favor, intente nuevamente.
              </AlertDescription>
          </Alert>
        )
  )
}
