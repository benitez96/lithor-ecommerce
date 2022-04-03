import { FC } from "react"
import { Outlet } from "react-router-dom"
import { ProductProvider } from "../../context/ProductContext"

export const Products: FC = () => {
  return (
    <ProductProvider>
      Products
      <Outlet />
    </ProductProvider> 
  )
}
