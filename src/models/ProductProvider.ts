import { BaseModel } from "./base"

export interface ProductProvider extends BaseModel {
  name: string;
  number: string;
  email: string;
}