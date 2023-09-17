import { useState } from "react"
import { productProviderHttp } from "../../../../../http/productProvider";
import { ProductProvider } from "../../../../../models/ProductProvider";

export const useProviderSelect = () => {

  const [productProviders, setProductProviders] = useState<ProductProvider[]>([]);

  const getProductProviders = async () => {

    const findedProductProviders = await productProviderHttp().findAll();

    if ( findedProductProviders ) {

      setProductProviders(findedProductProviders);

    }

  }

  return {
    getProductProviders,
    productProviders
  }
  
}