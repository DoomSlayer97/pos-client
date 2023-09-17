import { createContext } from "react";
import { ProductAction } from "./ProductReducer";
import { ProductState } from "./interface/interface"

export type ProductContextProps = {
  productState: ProductState;
  dispatch: React.Dispatch<ProductAction>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

