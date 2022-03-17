import {
  HStack,
  Button,
  Input,
  useNumberInput,
  FormLabel,
  FormControl

} from '@chakra-ui/react'

export const QuantityButtons = ( { onChangeQty, min=1, max=20 } ) => {

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min,
      max,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ isReadOnly: true })

  return (
    <FormControl w='55%' minW="135px" display='inline-block'>
      <FormLabel htmlFor='cantidad'>Cantidad</FormLabel>
      <HStack>
        <Button onClick={ () => onChangeQty(parseInt(input.value)) } {...dec}>-</Button>
        <Input {...input} px={0} textAlign='center'/>
        <Button onClick={ () => onChangeQty(parseInt(input.value)) } {...inc}>+</Button>
      </HStack>
    </FormControl>
  )
}
