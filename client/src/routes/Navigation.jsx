import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import {
  Container,
} from '@chakra-ui/react'

import { Home, Product, Payment } from '../pages';
import Navbar from '../components/navbar/Navbar';

export const Navigation = () => (
  <Router>
    <Navbar />
    <Container as="main" alignSelf='center'  maxWidth={'container.xl'} > 
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/product/:id" element={ <Product /> }/>
        <Route path="/payment" element={ <Payment /> } />
        <Route path="*" element={ <h1>Not found</h1> } />
      </Routes>
    </Container> 
  </Router>
)
