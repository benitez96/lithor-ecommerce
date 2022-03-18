import React, { useState } from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useMercadoPago from "../../hooks/useMercadoPago";

import {
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  Select,
  Stack

} from '@chakra-ui/react'

const INITIAL_STATE = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
};

export const MercadoPagoForm = () => {
    const [state, setState] = useState(INITIAL_STATE);
    const resultPayment = useMercadoPago();

    const isError =false;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.dataset.name || e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e) => {
        setState({ ...state, focus: e.target.dataset.name || e.target.name });
    };

    return (
        <Stack>
            <Card
                cvc={state.cvc}
                expiry={state.cardExpirationMonth + state.cardExpirationYear}
                name={state.cardholderName}
                number={state.cardNumber}
                focused={state.focus}
                brand={state.issuer}
            />


            <form id="form-checkout">
              <Stack>
                <FormControl 
                  isInvalid={isError}
                  w={{ base: "100%", md: "50%" }}
                >
                  <FormLabel htmlFor='cardNumber'>NUMERO DE TARJETA</FormLabel>
                  <Input
                    id='form-checkout__cardNumber'
                    name='cardNumber'
                    type='tel'
                    value={state.cardNumber}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </FormControl>
                <FormControl 
                  isInvalid={isError}
                  w={{ base: "100%", md: "25%" }}
                >
                  <FormLabel htmlFor='cardExpirationMonth'>MES EXP.</FormLabel>
                  <Input
                    id='form-checkout__cardExpirationMonth'
                    name='cardExpirationMonth'
                    type='tel'
                    value={state.cardExpirationMonth}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </FormControl>
              <FormControl 
                isInvalid={isError}
                w={{ base: "100%", md: "50%" }}
              >
                <FormLabel htmlFor='cardExpirationYear'>ANO EXP.</FormLabel>
                <Input
                  id='form-checkout__cardExpirationYear'
                  name='cardExpirationYear'
                  type='tel'
                  value={state.cardExpirationYear}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                </FormControl>
              <FormControl 
                isInvalid={isError}
                w={{ base: "100%", md: "50%" }}
              >
                <FormLabel htmlFor='cvc'>CVC</FormLabel>
                <Input
                  id='form-checkout__securityCode'
                  name='cvc'
                  type='tel'
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                </FormControl>
              </Stack>
              <FormControl isInvalid={isError}>
                <FormLabel htmlFor='cardholderName'>Titular de la tarjeta</FormLabel>
                <Input
                  id='form-checkout__cardholderName'
                  name='cardholderName'
                  type='tel'
                  value={state.cardholderName}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </FormControl>
              <FormControl isInvalid={isError}>
                <FormLabel htmlFor='cardholderEmail'>Email</FormLabel>
                <Input
                  id='form-checkout__cardholderEmail'
                  name='cardholderEmail'
                  type='email'
                  value={state.cardholderEmail}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl 
                isInvalid={isError}
                w={{ base: "100%", md: "25%" }}
              >
                <FormLabel htmlFor='issuer'>Banco Emisor</FormLabel>
                <Select
                  id='form-checkout__issuer'
                  name='issuer'
                >
                </Select>
              </FormControl>
              <FormControl 
                isInvalid={isError}
                w={{ base: "50%", md: "25%" }}
              >
                <FormLabel htmlFor='identificationType'>Tipo</FormLabel>
                <Select
                  id='form-checkout__identificationType'
                  name='identificationType'
                >
                </Select>
              </FormControl>
              <FormControl 
                isInvalid={isError}
                w={{ base: "50%", md: "50%" }}
              >
                <FormLabel htmlFor='identificationNumber'>Numero</FormLabel>
                <Input
                  id='form-checkout__identificationNumber'
                  name='identificationNumber'
                  type='tel'
                  value={state.identificationNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl 
                isInvalid={isError}
                w={{ base: "100%", md: "50%" }}
              >
                <FormLabel htmlFor='installments'>Cuotas</FormLabel>
                <Select
                  id='form-checkout__installments'
                  name='installments'
                >
                </Select>
              </FormControl>

              <Button 
                isLoading={resultPayment == 'loading'}
                type="submit" 
                id="form-checkout__submit"
                colorScheme='blue'
                loadingText="Procesando..."
              >
                Pagar
              </Button>
            </form>
            {resultPayment && <p>{JSON.stringify(resultPayment)}</p>}
        </Stack>
    );
}
