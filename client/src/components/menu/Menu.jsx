import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Divider,
  DrawerOverlay,
  Text,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Input,
  Image,
  Stack,
  HStack,
  Box,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';


export const Menu = ({ isOpen, onClose }) => {

  const links = ['REMERA', 'PANTALON', 'ZAPATOS', 'ACCESORIOS'];

  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      size='xs'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>

        <DrawerBody>
          <Stack direction="column" spacing={1} >
            {
              links.map( (link) => (
                <Link
                  key={link}
                  to={`/${link}`}
                >
                  {link}
                </Link>
              ))
            }

          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
