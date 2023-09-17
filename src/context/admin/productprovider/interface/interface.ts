import { InputError } from "../../../../interfaces/errors";
import { ProductProvider } from "../../../../models/ProductProvider";

export interface ProductProviderState {
  isNew: boolean;
  showFormModal: boolean;
  isLoading: boolean;
  currentProductProviderId: number;
  productProviders: ProductProvider[];
  form: {
    name: string;
    number: string;
    email: string;
  }
  errors: InputError[]
}