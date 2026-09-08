import Home from "../pages/Home";
import Collections from "../pages/Collections";
import Layout from "../components/layout/Layout";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/collections", element: <Collections /> },
];

export default routes;
