import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
