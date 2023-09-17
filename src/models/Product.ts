import { BaseModel } from "./base"

export type ProductStatus = 
  | 'available'
  | 'not_avilable'
  | 'sold_out';

export const productStatusList: ProductStatus[] = [
  'available', 
  'not_avilable', 
  'sold_out',
];

export interface Product extends BaseModel {
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: ProductStatus;
  category: number;
  provider: number;
}