import { createContext } from "react";
import { CategoryState } from "./interface/interface";
import { CategoryAction } from "./CategoryReducer";

export type CategoryContextProps = {
  categoryState: CategoryState;
  dispatch: React.Dispatch<CategoryAction>
}

export const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps);