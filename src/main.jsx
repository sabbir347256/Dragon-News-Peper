import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import Auth from './AuthContext/Auth';
import MoreNews from './Pages/News/MoreNews';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element : <MoreNews></MoreNews>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  </React.StrictMode>,
)
