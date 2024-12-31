import { createBrowserRouter } from "react-router-dom";
import Layout from "../componeents/Layout";
import Profile from "../pages/proflie";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Profile /> }],
    },
  ];
  return createBrowserRouter(routes);
};
export default Router;
