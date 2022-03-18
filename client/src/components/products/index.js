import { ProductCard as ProductHOC } from './ProductCard.jsx';
import { ProductImage } from './ProductImage.jsx';
import { ProductFooter } from './ProductFooter.jsx'
import { ProductTitle } from './ProductTitle.jsx'
import { ProductPrice } from './ProductPrice.jsx'
import { ProductCategories } from './ProductCategories.jsx'
import { ProductDescription } from './ProductDescription.jsx'


export const ProductCard = Object.assign(ProductHOC, {
  Image: ProductImage,
  Footer: ProductFooter,
  Title: ProductTitle,
  Categories: ProductCategories,
  Price: ProductPrice,
  Description: ProductDescription,
})

export default ProductCard;
