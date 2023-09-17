import { Outlet } from 'react-router-dom'
import { TemplateProvider } from '../../../context/admin/template/TemplateProvider'
import { AdminMain } from './components'


export const AdminTemplate = () => {

  return (
    <TemplateProvider>
      <AdminMain>
        <Outlet />
      </AdminMain>
    </TemplateProvider>
  )

}