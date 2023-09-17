import { useReducer } from "react";
import { CategoryState } from "./interface/interface";
import { CategoryReducer } from "./CategoryReducer";
import { CategoryContext } from "./CategoryContext";

const INITIAL_STATE: CategoryState = {
  isNew: true,
  showFormModal: false,
  isLoading: false,
  currentCategoryId: 0,
  categories: [],
  form: {
    name: '',
  },
  errors: []
}

interface props {
  children: JSX.Element[] | JSX.Element;
}

export const CategoryProvider = ({ children }: props) => {

  const [ categoryState, dispatch ] = useReducer(CategoryReducer, INITIAL_STATE);

  return (
    <CategoryContext.Provider value={{ categoryState, dispatch }} >
      {children}
    </CategoryContext.Provider>
  )

}