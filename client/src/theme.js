import { ChakraProvider, extendTheme } from '@chakra-ui/react'


export const customTheme = extendTheme({
  styles:{
    global: {
      'html, body, #root': {
        height: '100%',
      },
    }
  }
})
