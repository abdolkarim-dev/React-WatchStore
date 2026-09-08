import Home from "../pages/Home";
import Collections from "../pages/Collections";
import About from "../pages/About";
import Watches from "../pages/Watches";
const routes = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "Collections", path: "/collections", element: <Collections /> },
  { name: "About", path: "/about", element: <About /> },
  { name: "Watches", path: "/watches", element: <Watches /> },
];

export default routes;
