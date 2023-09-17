import { useReducer } from 'react';
import { TemplateState } from './interface/interface'
import { TemplateReducer } from './TemplateReducer';
import { TemplateContext } from './TemplateContext';

const INITIAL_STATE: TemplateState = {
  openDrawer: true,
  menuItems: [
    {
      label: 'Products',
      href: '/admin/product'
    },
    {
      label: 'Categories',
      href: '/admin/category'
    },
    {
      label: 'Users',
      href: '/admin/user'
    },
    {
      label: 'Providers',
      href: '/admin/productprovider'
    },
  ]
} 

interface props {
  children: JSX.Element[] | JSX.Element;
}

export const TemplateProvider = ({ children }: props) => {

  const [ templateState, dispatch ] = useReducer(TemplateReducer, INITIAL_STATE);

  return (
    <TemplateContext.Provider value={{ templateState, dispatch }} >
      { children }
    </TemplateContext.Provider>
  )

}