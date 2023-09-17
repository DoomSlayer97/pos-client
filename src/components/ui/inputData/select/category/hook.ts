import { useState } from "react";
import { categoryHttp } from "../../../../../http/category"
import { Category } from "../../../../../models/Category";

export const useCategorySelect = () => {

  const [categories, setcategories] = useState<Category[]>([])

  const getCategories = async () => {

    const res = await categoryHttp().findAll();

    if ( !res.error ) {
     
      const findedCategories = res.res as Category[];

      setcategories(findedCategories);

    }

  }

  return {
    getCategories,
    categories
  }

}