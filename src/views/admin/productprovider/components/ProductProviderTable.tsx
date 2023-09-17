import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ProductProvider } from "../../../../models/ProductProvider"
import { useProductProvider } from "../useProductProvider";

interface IProductProviderRowTableProps {
  productProvider: ProductProvider;
  selectProductProvider: () => void;
}

const ProductProviderRowTable = ({ productProvider, selectProductProvider }: IProductProviderRowTableProps) => {
  
  return (
    <TableRow>
      <TableCell>{productProvider.name}</TableCell>
      <TableCell>{productProvider.email}</TableCell>
      <TableCell>{productProvider.number}</TableCell>
      <TableCell>
        <Button variant="text" onClick={selectProductProvider} >Edit</Button>
      </TableCell>
    </TableRow>
  )

}

export const ProductProviderTable = () => {

  const { productProviders, editProductProvider } = useProductProvider();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { productProviders.map((productProvider, key) => <ProductProviderRowTable 
              key={key} 
              productProvider={productProvider}  
              selectProductProvider={() => editProductProvider(productProvider.id as number)}/>
            ) 
          }
        </TableBody>
      </Table>
    </TableContainer>
  )

}