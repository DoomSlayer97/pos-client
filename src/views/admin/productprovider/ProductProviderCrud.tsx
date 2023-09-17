import { ProductProviderProvider } from "../../../context/admin/productprovider/ProductProviderProvider"
import { ProductProviderMain } from "./components"

export const ProductProviderCrud = () => {

  return (
    <>
      <ProductProviderProvider>
        <ProductProviderMain />
      </ProductProviderProvider>
    </>
  )
}