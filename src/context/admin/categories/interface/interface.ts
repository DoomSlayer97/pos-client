import { InputError } from "../../../../interfaces/errors";
import { Category } from "../../../../models/Category";


export interface CategoryState {
  isNew: boolean;
  showFormModal: boolean;
  isLoading: boolean;
  currentCategoryId: number;
  categories: Category[];
  form: {
    name: string;
  }
  errors: InputError[];
}