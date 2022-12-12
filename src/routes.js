import App from "./App";

import Main from "./components/Main";
import About from "./pages/About";
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
    ],
  },
];
