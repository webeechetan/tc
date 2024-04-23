import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const Excesscoopbilling = Loadable(lazy(() => import('../views/excesscoopbilling/Excesscoopbilling')));
const ManageDispute = Loadable(lazy(() => import('../views/excesscoopbilling/ManageDispute')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> }, 
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/excess-coop-billing', exact: true, element: <Excesscoopbilling /> }, 
      { path: '/manage-dispute', exact: true, element: <ManageDispute /> }, 
    ],
  },
  {
    path: '/auth',
    children: [
      { path: '404', element: <Error /> }, 
      { path: '/auth/register', element: <Register /> }, 
      { path: '/auth/login', element: <Login /> }, 
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
