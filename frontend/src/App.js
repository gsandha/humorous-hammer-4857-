import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Allroutes from "./components/Allroutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop:"80px"}}>
      <Allroutes />
      </div>
    </div>
  );
}

export default App;
