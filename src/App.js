import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Bottom from "./components/Bottom/Bottom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Bottom />
    </div>
  );
}

export default App;
