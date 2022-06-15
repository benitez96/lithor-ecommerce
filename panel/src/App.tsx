import { Formik } from 'formik';
import {
  Button, 
  InputLabel,
  InputAdornment,
  TextField,
  Container, 
  Stack, 
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Divider,
  FilledInput,
  FormControl,
} from '@mui/material'
import { Product } from './interfaces/products'

const App = () => {

  const initialValues: Product = {
    name: "",
    description: "",
    cost: 0,
    price: 0,
    images: [],
    options: [
      {
        size: 'S',
        quantity: 0,
      },
      {
        size: 'M',
        quantity: 0,
      },
      {
        size: 'L',
        quantity: 0,
      },
      {
        size: 'XL',
        quantity: 0,
      },
      {
        size: 'XXL',
        quantity: 0,
      },
    ]
  }


  return (
    <Container maxWidth="md" background-color='grey'>
      <Typography variant="h3" m={3} align="center">Carga de productos</Typography>
      <Divider />
      <Formik
        initialValues={ initialValues }
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                type="text"
                label="Nombre del producto"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && <div>{props.errors.name}</div>}
              <TextField
                type="text"
                label="Descripcion del producto"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
                name="description"
              />
              {props.errors.description && <div>{props.errors.description}</div>}

              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel>Costo del producto</InputLabel>
                <FilledInput
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.cost}
                  name="cost"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
              </FormControl>
              {props.errors.cost && <div>{props.errors.cost}</div>}

              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel>Precio del producto</InputLabel>
                <FilledInput
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.price}
                  name="price"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
              </FormControl>
              {props.errors.price && <div>{props.errors.price}</div>}

              <Divider />
              <Typography variant="subtitle">Opciones</Typography>
              <Divider />

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Talle</TableCell>
                      <TableCell align="center">Cantidad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      props.values.options.map((option, index) => (
                        <TableRow 
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          key={index}>
                          <TableCell align="center">{option.size}</TableCell>
                          <TableCell align="center">
                            <TextField
                              sx={{ width: '70px' }}
                              type="number"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={option.quantity}
                              name={`options[${index}].quantity`}
                            >
                            </TextField>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>

              <Divider />
              <Typography variant="subtitle">Imagenes</Typography>
              <Divider />


              <Button
                type="submit"
                variant="contained" 
                color="primary"
              >
                Cargar producto
              </Button>
            </Stack>
          </form>
        )}
      </Formik>




    </Container>
  )
}

export default App
