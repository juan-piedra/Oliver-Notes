import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchClass from "./pages/SearchClass";
import Login from "./pages/Landing/Landing";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
