import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IndexPage } from './Pages/IndexPage';
import { LogInPage } from './Pages/LogInPage';
import { SignUpPage } from './Pages/SignUpPage';


const router = createBrowserRouter([
  { path: "/", element: <IndexPage /> },
  { path: "/flow/login", element: <LogInPage /> },
  { path: "/flow/signup", element: <SignUpPage /> }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);





