
export interface Variant{
  color?: string
  size: string
  quantity: number
  cost: number
  price: number
  discount?: number
  images: string[]
}

export interface Product{
  name: string
  description?: string
  image: string
  category_ids?: number[]
  variants: Variant[]

}
