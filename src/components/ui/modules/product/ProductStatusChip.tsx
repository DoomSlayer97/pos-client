import { Chip } from "@mui/material"
import { ProductStatus } from "../../../../models/Product";

interface IProductStatusChipProps {
  status: ProductStatus;
}

export const ProductStatusChip = ({ status }: IProductStatusChipProps) => {

  let colorChipStatus: any = 'success';
  let labelChipStatus = 'Available';
  
  if ( status === 'not_avilable' ) {

    colorChipStatus = 'error';
    labelChipStatus = 'Not Avilable';

  } else if ( status === 'sold_out' ) {

    colorChipStatus = 'default';
    labelChipStatus = 'Sold Out';

  }
  
  return (
    <Chip label={labelChipStatus} color={colorChipStatus} ></Chip>
  )
}