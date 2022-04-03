import {
  Stack,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';


interface Props {
  file: File
  is_primary: boolean
  onDelete: (file: File) => void
}

export const ImageFileCard = ({ file, is_primary, onDelete }: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignContent="center"
    >
      <Box>
        <Text>{file.name}</Text>
      </Box>
      <Box>
        <Button 
          color='tomato' 
          variant="outline" 
          onClick={ () => onDelete(file) }
        >
          Delete
        </Button>
      </Box>
    </Stack>
  )
}
