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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/1",
    element: <HomePage />,
  },
  {
    path: "/2",
    element: <FilmsPage />,
  },
  {
    path: "/3",
    element: <BooksPage />,
  },
  {
    path: "/4",
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