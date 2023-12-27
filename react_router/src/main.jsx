import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact Us/contactUs.jsx'
import Layout from './layout.jsx'
import About from './Components/About US/aboutUs.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'




const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout />,
    children:[
      {
        path : "",
        element : <Home />
      },
      {
        path :"about",
        element:<About/>
      },
      {
        path : "contactus",
        element: <Contact/>
      },
      {
        path: "user/:id",
        element:<User />
      },
      {
        path : "github",
        element :<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
