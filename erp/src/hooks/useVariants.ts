import {useState} from "react"
import { Variant } from "../types/Product"

export const useVariants = (sizes: string[]) => {

  const [variants, setVariants] = useState(
    sizes.map( size => ( { size, quantity: 1 } as Variant ) )
  )

  const incrementVariantBy = (size: string, n: number) => {
    setVariants( variants.map( v => 
                    v.size == size 
                    ? 
                      { ...v, quantity: Math.max(v.quantity + n, 0) } 
                    : 
                      v 
                  ) 
               )
  }


  return { variants, incrementVariantBy }


}
