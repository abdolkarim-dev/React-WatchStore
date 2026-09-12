import Home from "../pages/Home";
import Collections from "../pages/Collections";
import About from "../pages/About";
import Watches from "../pages/Watches";
import Checkout from "../pages/Checkout";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
export const publicRoutes = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "Watches", path: "/watches", element: <Watches /> },
  { name: "Collections", path: "/collections", element: <Collections /> },
  { name: "About", path: "/about", element: <About /> },
  { name: "Search", path: "/search", element: <Search /> },
];

export const standaloneRoutes = [
  { name: "Checkout", path: "/checkout", element: <Checkout /> },
  { name: "Not Found", path: "/*", element: <NotFound /> },
];
