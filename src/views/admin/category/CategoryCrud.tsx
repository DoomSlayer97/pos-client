import { CategoryMain } from "./components"
import { CategoryProvider } from "../../../context/admin/categories/CategoryProvider"

export const CategoryCrud = () => {
  
  return (
    <>    
      <CategoryProvider>
        <CategoryMain />
      </CategoryProvider>
    </>
  )

}