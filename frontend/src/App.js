import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Allroutes from "./components/Allroutes";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Allroutes /> */}
      <Cart/>
    </div>
  );
}

export default App;
