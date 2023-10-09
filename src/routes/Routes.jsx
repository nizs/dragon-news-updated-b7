
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Main from "../layout/main";
import NewsLayout from "../layout/NewsLayout";
import Category from "../pages/Home/Category/Category";
import NewsDetails from "../pages/News/NewsDetails/NewsDetails";
import Login from "../pages/shared/Login/Login";
import Signup from "../pages/shared/Signup/Signup";
import Terms from "../pages/shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "terms",
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-servere-updated-o8wzhg5w2-tauhid-afsers-projects.vercel.app/category/${params.id}`)

            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-servere-updated-o8wzhg5w2-tauhid-afsers-projects.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;