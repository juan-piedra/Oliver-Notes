import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Search from "./pages/Search/Search";
import Notes from "./pages/Notes/Notes";
import AddClass from "./pages/AddClass/AddClass";
import UserNotes from "./pages/UserNotes/UserNotes";
import SingleNote from "./pages/SingleNote/SingleNote";
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
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Notes",
        element: <Notes />,
      },
      {
        path: "/AddClass",
        element: <AddClass />,
      },
      {
        path: "/UserNotes",
        element: <UserNotes />,
      },
      {
        path: "/Landing",
        element: <Landing />,
      },
      {
        path: "/SingleNote",
        element: <SingleNote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
