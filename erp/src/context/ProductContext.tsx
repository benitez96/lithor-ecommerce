import { FC, createContext, useState, SetStateAction, Dispatch } from "react"
import {Product, Variant} from "../types/Product"

interface Props {
  product: Product
  setProduct: Dispatch<SetStateAction<Product>>
}

export const ProductContext = createContext<Props>({} as Props);

export const ProductProvider: FC = ({ children }) => {

  const [product, setProduct] = useState<Product>({
    variants: [
      { size: 'S',  quantity : 1 },
      { size: 'M',  quantity : 1 },
      { size: 'L',  quantity : 1 },
      { size: 'XL', quantity : 1 } 
    ]
  } as Product)

  const value = {
    product,
    setProduct,
  }

  return (
    <ProductContext.Provider value={ value }>
      { children }
    </ProductContext.Provider> 
  )
}
