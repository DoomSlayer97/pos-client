import React from 'react'
import logo from './logo.svg'
import  { UserCrud } from './views/admin/user/UserCrud'
import { RouterProvider } from 'react-router-dom';
import  { AppRouterProvider } from './router'


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={AppRouterProvider} />
    </React.StrictMode>
  );
}

export default App;
