import React from 'react';
import {
  Box,
  Divider,
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

const Links = ['REMERAS', 'INVIERNO', 'VERANO'];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function withAction() {

  const { isOpen: menuIsOpen, onOpen: menuOnOpen, onClose: menuOnClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            variant='ghost'
            size={'md'}
            icon={menuIsOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={menuIsOpen ? menuOnClose : menuOnOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            <Heading>LITHOR</Heading>
            <Divider display={{ base: 'none', md: 'flex' }}/>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Box>
            <Button p={1} mx={1} variant='ghost' onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button p={1} mx={1} variant='ghost'>
              <Icon as={ FiShoppingCart } />
            </Button>
          </Box>
        </Flex>

        {menuIsOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
