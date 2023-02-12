import {createBrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./layout/Layout";
import SearchPage from "./pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
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