import "./App.css";
import Navbar from "./components/Navbar";
import Allroutes from "./components/Allroutes";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      {/* <Allroutes /> */}
    </div>
  );
}

export default App;
