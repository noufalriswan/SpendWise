import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transaction from './pages/Transaction.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/transaction",
    element: <Transaction />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
