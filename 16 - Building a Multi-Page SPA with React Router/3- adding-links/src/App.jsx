import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product />} />
  </Route>
);
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Product /> },
// ]);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
