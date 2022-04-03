import { FC } from "react"
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom"
import {ProductAddForm} from "../components/products/add/ProductAddForm"
import {Products} from "../pages/products/Products"

export const AppRouter: FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/products" element={<Products/>}>
                  <Route path="add" element={<ProductAddForm />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Router>
    )

}
