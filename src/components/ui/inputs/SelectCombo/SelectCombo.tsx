import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

interface ISelectComboProps {
  label: string;
  value: any;
  placeholder?: string;
  name: string;
  rows: any[];
  idItem?: any;
  labelItem?: any;
  onChangeForm: (name: string, value: string) => void;
}

export const SelectCombo = ({ 
  label, 
  value,
  placeholder,
  name, 
  onChangeForm,
  idItem,
  labelItem,
  rows
}: ISelectComboProps) => {

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={placeholder}
        name={name}
        onChange={(e) => onChangeForm(e.target.name, e.target.value)}>
        {
          rows.map((item, key) => <MenuItem
            key={key} 
            value={ idItem ? item[idItem] : item }>
            { labelItem ? item[labelItem] : item }
            </MenuItem>
          )
        }
      </Select>
    </FormControl>
  )

}