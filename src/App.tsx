import Layout from "./components/layout/Layout";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./Routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
