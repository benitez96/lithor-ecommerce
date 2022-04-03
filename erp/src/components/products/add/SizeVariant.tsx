import { memo, useContext } from 'react';
import {
  Button,
  HStack,
  Input,
  Text
} from "@chakra-ui/react"

interface Props {
  size: string,
  quantity: number,
  onChangeQuantity: (size: string, n: number) => void

}

export const SizeVariant = memo( ({size, quantity, onChangeQuantity}: Props) => {

  return (
    <HStack
      justifyContent='space-between'
    >
      <Text>{ size }</Text> 

      <HStack maxW='100px' spacing={0}>
        <Button onClick={() => onChangeQuantity(size, -1) }> - </Button>
        <Input readOnly value={ quantity } px={0} textAlign='center'/>
        <Button onClick={() => onChangeQuantity(size, 1) }> + </Button>
      </HStack>


    </HStack>
  )
} )
