import { ProductProvider } from "../../../context/admin/products/ProductProvider"
import { ProductMain } from "./components"


export const ProductCrud = () => {

  return (
    <>
      <ProductProvider>
        <ProductMain />
      </ProductProvider>    
    </>
  )

}