import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/Root.jsx';
import Home from './Componenets/Pages/Home.jsx';
import ListedBook from './Componenets/ListedBook.jsx';
import PageToRead from './Componenets/PageToRead.jsx';
import AllBook from './Componenets/Boooks/AllBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,   // create a root components
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('../Books.json')
      },{
        path: "/listedbook",
        element: <ListedBook />,
        loader: ()=> fetch('../Books.json')
      },{
        path: "/pagetoread",
        element: <PageToRead />,
      },{
        path: "/book/:id",
        element: <AllBook/>,
        loader: ()=> fetch('../Books.json')
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
