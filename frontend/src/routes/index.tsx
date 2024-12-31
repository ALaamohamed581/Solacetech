import { createBrowserRouter } from "react-router-dom";
import Layout from "../componeents/Layout";
import Profile from "../pages/proflie";
import Finintal from "../componeents/Finintal";
import PerosnalData from "../componeents/PerosnalData";
import { Component } from "react";
import UserForm from "../forms/UserForm";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/edit/:id",
          element: <UserForm />,
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
