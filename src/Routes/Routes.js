import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BookATable from "../Pages/BookATable/BookATable/BookATable";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/bookatable',
                element: <BookATable/>
            },
            {
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
])