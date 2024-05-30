import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import NavBarComponent from './Components/NavBarComponent';
import HomePage from './Pages/HomePage';
import FilmsPage from './Pages/FilmsPage';
import BooksPage from './Pages/BooksPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/Films",
    element: <FilmsPage />,
  },
  {
    path: "/Books",
    element: <BooksPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarComponent />
    <Container className='mt-2'>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);

reportWebVitals();