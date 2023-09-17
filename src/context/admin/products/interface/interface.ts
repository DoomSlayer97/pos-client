import { Product, ProductStatus } from "../../../../models/Product";

export interface ProductState {
  isNew: boolean;
  showFormModal: boolean;
  isLoading: boolean;
  currentProductId: number;
  products: Product[];
  form: {
    name: string;
    sku: string;
    price: number;
    stock: number;
    status: ProductStatus;
    category: number;
    provider: number;
  }
}