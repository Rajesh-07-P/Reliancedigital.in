import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";


function App() {

  return (
    <div>
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
