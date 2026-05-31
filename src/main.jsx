import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Product from './pages/Product.jsx'
import SignUp from './pages/SignUp.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Orders from './pages/Orders.jsx'
import Contact from './pages/Contact.jsx'
import Collection from './pages/Collection.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import { ToastContainer, toast } from 'react-toastify';


const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"collection", element:<Collection/>},
      {path:"about", element:<About/>},
      {path:"contact", element:<Contact/>},
      {path:"product/:productId", element:<Product/>},
      {path:"cart", element:<Cart/>},
      {path:"login", element:<Login/>},
      {path:"place-order", element:<PlaceOrder/>},
      {path:"orders", element:<Orders/>},
      {path:"signup", element:<SignUp/>},
      {path:"*", element:<NotFound/>},
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
    <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>,
)
