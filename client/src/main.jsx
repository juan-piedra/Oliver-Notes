import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchClass from "./pages/SearchClass";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import App from "./App.jsx";
import DisplayNotes from "./pages/displayNotes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/notes/demonstrate",
        element: <DisplayNotes />,
      },
      {
        path: '/landingpage',
        element: <Landing />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
