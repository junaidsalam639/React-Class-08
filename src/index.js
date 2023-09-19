import 'flowbite';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './App';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Singup from './Component/Singup_Login/Singup';
import Login from './Component/Singup_Login/Login';
import Gallery from './Component/Gallery';
import UserProfile from './Component/UserProfile';
import Practice from './Component/Practice';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/singup',
    element: <Singup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/userprofile',
    element: <UserProfile />
  },
  {
    path: '/Practice',
    element: <Practice />
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  <RouterProvider router={router}/>
  // </Provider>
);


