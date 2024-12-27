import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Home/Home.jsx';
import Bolg from './Blog/Bolg.jsx';
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Shop from './Shop/Shop.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import SingleBlog from './Blog/SingleBlog.jsx';
import About from './About/About.jsx';
import Contact from './ContactPage/Contact.jsx';
import LoginDemo from './component/LoginDemo.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import PrivateRoute from './Contexts/PrivateRoute.jsx';
import Login from './component/Login.jsx';
import SignUp from './component/SignUp.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/blog",
        element: <Bolg />
      },
      {
        path:"/shop",
        element: <Shop />
      },
      {
        path:"/shop/:id",
        element:<SingleProduct />
      },
       {
        path:"/cart-page",
        element:<PrivateRoute><CartPage /></PrivateRoute>
      },
      {
        path:"/blog/:id",
        element:<SingleBlog />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
           
    ]
  },
  {
    path:"/login",
    element:<Login />,
  },
  {
    path:"/singup",
    element:<SignUp />,
  },
  
 
]);
createRoot(document.getElementById('root')).render(
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>

)
