import { Outlet } from "react-router-dom";
import Header from "./component/shareComponent/header";
import Footer from "./component/shareComponent/footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
