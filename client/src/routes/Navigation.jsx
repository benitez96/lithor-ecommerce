import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import {
  Container,
} from '@chakra-ui/react'

import { Home } from '../pages';
import { Product } from '../pages';
import Navbar from '../components/navbar/Navbar';

export const Navigation = () => (
  <Router>
    <Navbar />
    <Container as="main" alignSelf='center' height="100%" maxWidth={'container.xl'} pt='10%' > 
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/product/:id" element={ <Product /> }/>
        <Route path="*" element={ <h1>Not found</h1> } />
      </Routes>
    </Container> 
  </Router>
)
