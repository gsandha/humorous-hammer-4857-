import "./App.css";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Allroutes from "./Routes/AllRoutes.jsx"
import axios from "axios"
import { useEffect } from "react";
const Authenticate = async()=>{
  const token = localStorage.getItem("userToken") || ""
  axios.defaults.headers.common['Authorization'] = `${token}`;
}
function App() {
  useEffect(()=>{
    Authenticate()
  },[])
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
