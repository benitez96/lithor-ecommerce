import { ChakraProvider } from '@chakra-ui/react'

import { Navigation } from './routes/Navigation.jsx'
import { customTheme } from './theme'

function App() {

  return (
    <ChakraProvider theme={customTheme}>
      <Navigation />
    </ChakraProvider>
  )
}

export default App
