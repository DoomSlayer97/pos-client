import { Product } from "../../../models/Product";
import { ProductState } from "./interface/interface";

export type ProductAction =
  | { type: 'loadProducts', payload: Product[] }  
  | { type: 'openNew' }
  | { type: 'setLoading', payload: boolean }
  | { type: 'changeForm', payload: { key: string, value: string; } }
  | { type: 'loadSelectedProduct', payload: Product }
  | { type: 'closeFormModal' }

export const ProductReducer = ( state: ProductState, action: ProductAction ): ProductState => {

  switch (action.type) {

    case 'loadProducts': {

      const products = action.payload;

      return {
        ...state,
        products
      }

    }
    
    case 'openNew': {

      return {
        ...state,
        isNew: true,
        showFormModal: true,
        form: {
          category: 0,
          name: "",
          price: 0,
          provider: 0,
          sku: '',
          status: 'available',
          stock: 0
        }
      }

    }

    case 'setLoading': {

      const isLoading = action.payload;

      return {
        ...state,
        isLoading
      }

    }

    case 'changeForm': {
      
      const { key, value } = action.payload;

      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        }
      }

    }

    case 'loadSelectedProduct': {

      const product = action.payload;

      return {
        ...state,
        isNew: false,
        showFormModal: true,
        currentProductId: product.id as number,
        form: {
          name: product.name,
          price: product.price,
          sku: product.sku,
          stock: product.stock,
          status: product.status,
          category: product.category,
          provider: product.provider
        }
      }

    }

    case 'closeFormModal': {

      return {
        ...state,
        showFormModal: false
      }
  
    }

  }

  

}