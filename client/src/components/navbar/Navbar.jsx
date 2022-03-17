import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Divider,
  Circle,
  Flex,
  Avatar,
  Heading,
  HStack,
  Link,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,

} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon, 
  AddIcon,
  SunIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5'

import { Cart } from '../cart/Cart'
import { Menu as DrawerMenu } from '../menu/Menu'


export default function withAction() {

  const { items } = useSelector(state => state.cart);

  const { isOpen: menuIsOpen, onOpen: menuOnOpen, onClose: menuOnClose } = useDisclosure();
  const { isOpen: cartIsOpen, onOpen: cartOnOpen, onClose: cartOnClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [ 'REMERAS', 'INVIERNO', 'NUEVO' ]

  return (
    <header 
      style={{ 
        position: "sticky",
        top: 0,
        'zIndex': '3',
      }} 
    >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w='full' h="60px">
        <Flex alignItems={'center'} justifyContent={'space-between'} h='100%'>
          <IconButton
            variant='ghost'
            size={'md'}
            icon={<HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={menuIsOpen ? menuOnClose : menuOnOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            <RouterLink to='/'><Heading>LITHOR</Heading></RouterLink>
            <Divider display={{ base: 'none', md: 'flex' }}/>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {
                links.map((link) =>{
                  return (
                    <RouterLink
                      key={link}
                      to={`/${link}`}
                      fontSize={['sm', 'md']}
                      fontWeight={'bold'}
                      color={useColorModeValue('gray.700', 'gray.300')}
                      _hover={{ color: useColorModeValue('gray.800', 'gray.500') }}
                    >
                      {link}
                    </RouterLink>
                  )
                })
              }
            </HStack>
          </HStack>
          <Box>
            {/*
            <Button p={1} mx={1} variant='ghost' onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            */}
            <Button 
              p={1} 
              mx={1} 
              variant='ghost'
              onClick={ cartOnOpen }
            >
              <Cart 
                isOpen={cartIsOpen}
                onClose={cartOnClose}
              />
              <Icon as={ IoBagOutline } />
              {
                !!items && (
                  <Circle bg='black' size={3} position="absolute" bottom={2} left={1}>
                    <Text color="white" fontSize={8} fontWeight="semibold">{items}</Text>
                  </Circle>
                )
              }
            </Button>
          </Box>
        </Flex>

        <DrawerMenu 
          isOpen={menuIsOpen}
          onClose={menuOnClose}
        />
      </Box>
    </header>
  );
}
