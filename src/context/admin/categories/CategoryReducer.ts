import { InputError } from "../../../interfaces/errors";
import { Category } from "../../../models/Category"
import { CategoryState } from "./interface/interface"

export type CategoryAction = 
  | { type: 'loadCategories', payload: Category [] } 
  | { type: 'openNew' }
  | { type: 'setLoading', payload: boolean }
  | { type: 'changeForm', payload: { key: string, value: string; } }
  | { type: 'loadSelectedCategory', payload: Category }
  | { type: 'closeFormModal' }
  | { type: 'setErrors', payload: InputError[] } 
  | { type: 'clearErrors' } 

export const CategoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {

  switch (action.type) {

    case 'loadCategories': {

      const categories = action.payload;

      return {
        ...state,
        categories
      }

    }

    case 'openNew': {

      return {
        ...state,
        isNew: true,
        showFormModal: true,
        form: {
          name: ''
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

    case 'loadSelectedCategory': {

      const category = action.payload;

      return {
        ...state,
        isNew: false,
        showFormModal: true,
        currentCategoryId: category.id as number,
        form: {
          name: category.name
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