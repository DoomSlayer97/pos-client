import { useReducer } from 'react'
import { ProductReducer } from "./ProductReducer";
import { ProductState } from "./interface/interface";
import { ProductContext } from './ProductContext';

const INITIAL_STATE: ProductState = {
  isNew: true,
  showFormModal: false,
  isLoading: false,
  currentProductId: 0,
  products: [],
  form: {
    name: '',
    price: 0,
    sku: '',
    status: 'available',
    stock: 1,
    category: 0,
    provider: 0,
  },
}

interface props {
  children: JSX.Element[] | JSX.Element;
}

export const ProductProvider = ({ children }: props) => {

  const [ productState, dispatch ] = useReducer(ProductReducer, INITIAL_STATE);

  return (
    <ProductContext.Provider value={{ productState, dispatch }} >
      { children }
    </ProductContext.Provider>
  )

}