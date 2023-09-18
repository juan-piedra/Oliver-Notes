import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DisplayNotes from "./pages/displayNotes";
import Search from "./pages/Search/Search";
import Notes from "./pages/Notes/Notes";
import App from "./App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "/displayNotes",
        element: <DisplayNotes />,
      },
      {
        path: "/Landing",
        element: <Landing />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
