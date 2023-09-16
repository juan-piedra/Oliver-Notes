import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchClass from "./pages/SearchClass";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DisplayNotes from "./pages/displayNotes";
import App from "./App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/displayNotes",
        element: <DisplayNotes />,
      },
      {
        path: '/Landing',
        element: <Landing />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/SearchClass',
        element: <SearchClass />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
