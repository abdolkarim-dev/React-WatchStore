import Home from "../pages/Home";
import Collections from "../pages/Collections";
import About from "../pages/About";
import Watches from "../pages/Watches";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/collections", element: <Collections /> },
  { path: "/about", element: <About /> },
  { path: "/watches", element: <Watches /> },
];

export default routes;
