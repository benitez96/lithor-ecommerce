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
import CheckoutNavbar from '../components/navbar/CheckOutNavbar';
import { useSelector } from 'react-redux';

export const Navigation = () => {

  const { isCheckOutPage } = useSelector(state => state.pages);

  return (
    <>
      <Router>
        { isCheckOutPage ? <CheckoutNavbar /> : <Navbar /> }
        <Container as="main" alignSelf='center'  maxWidth={'container.xl'} > 
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/product/:id" element={ <Product /> }/>
            <Route exact path="/payment" element={ <Payment /> }/>
            <Route exact path="*" element={ <h1>Not found</h1> } />
          </Routes>
        </Container> 
      </Router>
    </>
  ) 
}
