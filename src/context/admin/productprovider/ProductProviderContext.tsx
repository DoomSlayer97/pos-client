import { createContext } from "react";
import { ProductProviderState } from "./interface/interface";
import { ProductProviderAction } from "./ProductProviderReducer"

export type ProductProviderContextProps = {
  productProviderState: ProductProviderState;
  dispatch: React.Dispatch<ProductProviderAction>
}

export const ProductProviderContext = createContext<ProductProviderContextProps>({} as ProductProviderContextProps);