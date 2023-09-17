import { InputError } from "../../../interfaces/errors";
import { ProductProvider } from "../../../models/ProductProvider";
import { ProductProviderState } from "./interface/interface";

export type ProductProviderAction = 
  | { type: 'loadProductProviders', payload: ProductProvider[] }  
  | { type: 'openNew' }
  | { type: 'setLoading', payload: boolean }
  | { type: 'changeForm', payload: { key: string, value: string; } }
  | { type: 'loadSelectedProductProvider', payload: ProductProvider }
  | { type: 'closeFormModal' }
  | { type: 'setErrors', payload: InputError[] } 
  | { type: 'clearErrors' } 

export const ProductProviderReducer = ( state: ProductProviderState, action: ProductProviderAction ): ProductProviderState => {

  switch (action.type) {

    case 'loadProductProviders': {

      const productProviders = action.payload;

      return {
        ...state,
        productProviders
      }

    }

    case 'openNew': {
      
      return {
        ...state,
        isNew: true,
        showFormModal: true,
        form: {
          email: "",
          name: "",
          number: ""
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

    case 'loadSelectedProductProvider': {

      const productProvider = action.payload;

      return {
        ...state,
        isNew: false,
        showFormModal: true,
        currentProductProviderId: productProvider.id as number,
        form: {
          email: productProvider.email,
          name: productProvider.name,
          number: productProvider.number
        }
      }

    }

    case 'closeFormModal': {

      return {
        ...state,
        showFormModal: false
      }
  
    }

    case 'setErrors': {

      const errors = action.payload;

      return {
        ...state,
        errors
      }

    }

    case 'clearErrors': {

      return {
        ...state,
        errors: []
      }

    }

  }

}