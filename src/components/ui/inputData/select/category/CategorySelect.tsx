import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useCategorySelect } from "./hook"
import { useEffect } from "react";
import { SelectCombo } from "../../../../"

interface ICategorySelectProps {
  value: any;
  name?: string;
  onChangeForm: (name: string, value: string) => void;
}

export const CategorySelect = ({ value, onChangeForm, name }: ICategorySelectProps) => {

  const { getCategories, categories } = useCategorySelect();

  useEffect(() => {

    getCategories();

  }, [])

  return (
    <>
      <SelectCombo 
        label="Category"
        name={name ? name : "category"}
        rows={categories}
        idItem="id"
        labelItem="name"
        value={value}
        placeholder="Category"
        onChangeForm={onChangeForm}/>
    </>
  )

}