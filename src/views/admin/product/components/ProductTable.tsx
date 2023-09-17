import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Product } from "../../../../models/Product";
import { useProduct } from "../useProduct";
import { ProductStatusChip } from "../../../../components";

interface IProductRowTableProps {
  product: Product;
  selectProduct: () => void;
}

const ProductRowTable = ({ product, selectProduct }: IProductRowTableProps) => {
  return (
    <TableRow>
      <TableCell>{product.sku}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell> 
        <ProductStatusChip status={product.status} /> 
      </TableCell>
      <TableCell>
        <Button variant="text" onClick={selectProduct} >Edit</Button>
      </TableCell>
    </TableRow>
  )
}

export const ProductTable = () => {

  const { products, editProduct,  } = useProduct();
  
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>Sku</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            products.map( (product, key) => <ProductRowTable 
              key={key}
              product={product} 
              selectProduct={() => editProduct(product.id as number)} /> )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );

}