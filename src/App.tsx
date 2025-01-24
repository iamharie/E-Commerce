import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import Root from "./pages/Root";
import Product from "./pages/Product";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "add_products", element: <AddProduct /> },
        { path: "product/:id", element: <Product /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
