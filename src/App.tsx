import Layout from "./components/layout/Layout";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { publicRoutes, standaloneRoutes } from "./Routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          ))}

           {standaloneRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
