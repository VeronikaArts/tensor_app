import {createBrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./layout/Layout";
import SearchPage from "./pages/SearchPage/SearchPage";
import ErrorPage from "./pages/404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <MainPage/>,
                children: [],
            },
            {
                path: '/search',
                element: <SearchPage/>,
                children: [],
            },
        ],
    },
]);