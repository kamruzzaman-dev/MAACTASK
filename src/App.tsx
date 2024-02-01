import { Outlet } from "react-router-dom";
import Header from "./component/shareComponent/header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
