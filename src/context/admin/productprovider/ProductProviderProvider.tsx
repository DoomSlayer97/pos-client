import { useReducer } from "react";
import { ProductProviderState } from "./interface/interface"
import { ProductProviderReducer } from "./ProductProviderReducer";
import { ProductProviderContext } from "./ProductProviderContext";

const INITIAL_STATE: ProductProviderState = {
  isNew: true,
  showFormModal: false,
  isLoading: false,
  currentProductProviderId: 0,
  productProviders: [],
  form: {
    email: '',
    name: '',
    number: ''
  },
  errors: []
}

interface props {
  children: JSX.Element[] | JSX.Element;
}

export const ProductProviderProvider = ({ children }: props) => {

  const [ productProviderState, dispatch ] = useReducer(ProductProviderReducer, INITIAL_STATE);

  return (
    <ProductProviderContext.Provider value={{ productProviderState, dispatch }} >
      { children }
    </ProductProviderContext.Provider>
  )

}