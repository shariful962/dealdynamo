import { createBrowserRouter, Navigate } from "react-router";
import Signin from '../pages/auth/Signin'
import Layout from '../layout/Layout'
import Error from '../pages/error/Error'
import Dashboard from "../pages/dashboard/Dashboard";
import Earnings from "../pages/earnings/Earnings";
import Users from "../pages/users/Users";
import Settings from "../pages/Settings/Settings";
import Support from "../pages/support/Support";


export const router = createBrowserRouter([
    {
        path:'/signin',
        Component: Signin
    },
     
    {
        path: '/',
        Component: Layout,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Navigate to='/signin' replace /> },
            {
                path: '/dashboard',
                Component: Dashboard
            },
            {
                path: 'earnings',
                Component: Earnings
            },
            {
                path: 'users',
                Component: Users
            },
            {
                path: 'settings',
                Component: Settings
            },
            {
                path: 'support',
                Component: Support
            }
            
        ]
    }

])