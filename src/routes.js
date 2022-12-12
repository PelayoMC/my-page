import App from "./App";

import Main from "./components/Main";
import About from "./pages/About";
import Studies from "./pages/Studies";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

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
        path: "about",
        element: <About />,
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
