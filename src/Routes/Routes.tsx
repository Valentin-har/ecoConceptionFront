import {createBrowserRouter} from "react-router-dom";
import CrewPage from "../Pages/CrewPage.tsx";
import CharacterPage from "../Pages/CharacterPage.tsx";
import HomePage from "../Pages/HomePage.tsx";
import FruitPage from "../Pages/FruitPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "fruit",
        element: <FruitPage/>,
    },
    {
        path: "character",
        element: <CharacterPage/>,
    },
    {
        path: "crew",
        element: <CrewPage/>,
    },
]);