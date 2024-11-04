import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Create from "./pages/Create";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create",
      element: <Create />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
