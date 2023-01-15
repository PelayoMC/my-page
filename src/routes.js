import App from "./App";
import Main from "./components/Main/Main";
import Studies from "./pages/Studies/Studies";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "studies",
        element: <Studies />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
