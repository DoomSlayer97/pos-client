import { useEffect } from "react";
import { useProviderSelect } from "./hook";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectCombo } from "../../../../"

interface IProviderSelectProps {
  value: any;
  name?: string;
  onChangeForm: (name: string, value: string) => void;
}

export const ProviderSelect = ({ value, onChangeForm, name }: IProviderSelectProps) => {

  const { getProductProviders, productProviders } = useProviderSelect();

  useEffect(() => {

    getProductProviders();

  }, [])
  
  return (
    <SelectCombo
      label="Provider"
      name={name ? name : "provider"}
      placeholder="Provider"
      idItem="id"
      labelItem="name"
      rows={productProviders}
      value={value}
      onChangeForm={onChangeForm}/>
  )
  
}