import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Category } from "../../../../models/Category";
import { useCategory } from "../useCategory";

interface ICategoryRowTableProps {
  category: Category;
  selectCategory: () => void;
}

const CategoryRowTable = ({ category, selectCategory }: ICategoryRowTableProps) => {
  return (
    <TableRow>
      <TableCell>{category.name}</TableCell>
      <TableCell>
        <Button variant="text" onClick={selectCategory} >Edit</Button>
      </TableCell>
    </TableRow>
  )
}

export const CategoryTable = () => {

  const {
    categories,
    editCategory
  } = useCategory();
  
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          categories.map( (category, key) => <CategoryRowTable
            key={key}
            category={category}
            selectCategory={() => {editCategory(category.id as number)}}/>)
        }
        </TableBody>
      </Table>
    </TableContainer>
  );

}