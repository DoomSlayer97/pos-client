import {
  createBrowserRouter
} from 'react-router-dom'
import { AdminTemplate } from '../views/admin/template/AdminTemplate'
import { UserCrud } from '../views/admin/user/UserCrud'
import { ProductCrud } from '../views/admin/product/ProductCrud'
import { CategoryCrud } from '../views/admin/category/CategoryCrud'
import { ProductProviderCrud } from '../views/admin/productprovider/ProductProviderCrud'

import { Auth } from '../views/auth/Auth'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/admin',
    element: <AdminTemplate />,
    children: [
      {
        path: '/admin/user',
        element: <UserCrud /> 
      },
      {
        path: '/admin/product',
        element: <ProductCrud />
      },
      {
        path: '/admin/category',
        element: <CategoryCrud />
      },
      {
        path: '/admin/productprovider',
        element: <ProductProviderCrud />
      },
    ]
  }
])