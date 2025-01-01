import { createBrowserRouter } from "react-router-dom";
import Layout from "../componeents/Layout";
import Profile from "../pages/proflie";
import Finintal from "../componeents/Finintal";
import PerosnalData from "../componeents/PerosnalData";
import Form from "../forms/Form";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/edit/:id/:title",
          element: <Form />,
        },
        {
          path: "/",

          element: <Profile />,
          children: [
            { path: "/", element: <PerosnalData /> },
            {
              path: "/financial-information",
              element: <Finintal />,
            },
          ],
        },
      ],
    },
  ];
  return createBrowserRouter(routes);
};
export default Router;
