import { ChakraProvider, extendTheme } from '@chakra-ui/react'


export const customTheme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
  styles:{
    global: {
      'html, body, #root': {
        height: '100%',
      },
    },
  }
})
