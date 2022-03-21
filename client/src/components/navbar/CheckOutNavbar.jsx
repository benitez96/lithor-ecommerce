import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  HStack,
  useColorModeValue,

} from '@chakra-ui/react';


export default function withAction() {



  return (
    <header 
      style={{ 
        position: "sticky",
        top: 0,
        'zIndex': '3',
      }} 
    >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w='full' h="60px">
        <Flex alignItems={'center'} justifyContent={'center'} h='100%'>
          <HStack spacing={8} alignItems={'center'} >
            <RouterLink to='/'><Heading>LITHOR</Heading></RouterLink>
          </HStack>
        </Flex>
      </Box>
    </header>
  );
}
