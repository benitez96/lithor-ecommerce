import React, { useState } from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useMercadoPago from "../../hooks/useMercadoPago";

import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
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

    const handleCVCBlur = () => {
        setState({ ...state, focus: 'cardNumber' });
    };

    return (
      <Stack 
        direction={{base: 'column', md: 'row-reverse'}}
        spacing={6}
        alignItems="center"
      >
        <Stack
          alignItems="center"
          w={{base: '100%', md: '50%'}}
        >
          <Card
            cvc={state.cvc}
            expiry={state.cardExpirationMonth + state.cardExpirationYear}
            name={state.cardholderName}
            number={state.cardNumber}
            focused={state.focus}
            brand={state.issuer}
          />
        </Stack>


        <Stack
          as="form"
          id="form-checkout"
          justifyContent="center"
          spacing={4}
          noValidate
        >
          <Stack
          >
          <FormControl
            variant='floating'
            isInvalid={isError}
            w='100%'
          >
              <Input
                borderColor='gray.400'
                id='form-checkout__cardNumber'
                name='cardNumber'
                type='tel'
                value={state.cardNumber}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <FormLabel>Numero de tarjeta</FormLabel>
            </FormControl>
          </Stack>
          <Stack 
            direction={{base: 'column', md: 'row'}}
            justifyContent='space-between'
            alignItems='center'
            spacing={4}
          >
            <FormControl
              variant='floating'
              isInvalid={isError}
              w={{ base: "100%", md: "40%" }}
            >
              <Input
                borderColor='gray.400'
                id='form-checkout__cardholderName'
                name='cardholderName'
                type='tel'
                value={state.cardholderName}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <FormLabel htmlFor='cardholderName'>Titular de la tarjeta</FormLabel>
            </FormControl>
            <Stack
              w={{ base: "100%", md: "57%" }}
              spacing={1}
              direction='row'
            >
              <FormControl
                variant='floating'
                isInvalid={isError}
              >
                <Input
                  borderColor='gray.400'
                  id='form-checkout__cardExpirationMonth'
                  name='cardExpirationMonth'
                  type='tel'
                  value={state.cardExpirationMonth}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="\d\d/\d\d"
                />
                <FormLabel htmlFor='cardExpirationMonth'>MES EXP.</FormLabel>
              </FormControl>
              <FormControl
                variant='floating'
                isInvalid={isError}
              >
                <Input
                  borderColor='gray.400'
                  id='form-checkout__cardExpirationYear'
                  name='cardExpirationYear'
                  type='tel'
                  value={state.cardExpirationYear}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <FormLabel htmlFor='cardExpirationYear'>ANO EXP.</FormLabel>
              </FormControl>
              <FormControl
                variant='floating'
                isInvalid={isError}
              >
                <Input
                  borderColor='gray.400'
                  id='form-checkout__securityCode'
                  name='cvc'
                  type='tel'
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleCVCBlur}
                />
                <FormLabel htmlFor='cvc'>CVC</FormLabel>
              </FormControl>
            </Stack>
          </Stack>
          <FormControl 
            isInvalid={isError}
            variant='floating'
          >
            <Input
              borderColor='gray.400'
              id='form-checkout__cardholderEmail'
              name='cardholderEmail'
              type='email'
            />
            <FormLabel htmlFor='cardholderEmail'>Email</FormLabel>
          </FormControl>
          <Stack
            direction='row' 
            wrap='wrap' 
            justifyContent='space-between'
            spacing={1}
          >
            <FormControl 
              variant='floating'
              isInvalid={isError}
              w='25%'
            >
              <Select
                id='form-checkout__identificationType'
                name='identificationType'
                borderColor='gray.400'
              >
              </Select>
              <FormLabel htmlFor='identificationType'>Tipo</FormLabel>
            </FormControl>
            <FormControl 
              variant='floating'
              isInvalid={isError}
              w='72%'
            >
              <Input
                borderColor='gray.400'
                id='form-checkout__identificationNumber'
                name='identificationNumber'
                type='tel'
              />
              <FormLabel htmlFor='identificationNumber'>Numero</FormLabel>
            </FormControl>
          </Stack>
          <Stack
            direction={{base: 'column', md: 'row'}}
            spacing={4}
          >
            <FormControl 
              variant='floating'
              isInvalid={isError}
              w={{ base: "100%", md: "48%" }}
            >
              <Select
                id='form-checkout__issuer'
                name='issuer'
                borderColor='gray.400'
                icon=''
              >
              </Select>
            </FormControl>
            <FormControl 
              variant='floating'
              isInvalid={isError}
              w={{ base: "100%", md: "48%" }}
            >
              <Select
                id='form-checkout__installments'
                name='installments'
                borderColor='gray.400'
              >
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    );
}
