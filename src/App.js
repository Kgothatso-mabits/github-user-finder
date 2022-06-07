import "./App.css";
import Home from "./Components/Layout/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/Layout/User/User";
import Footer from "./Components/Layout/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
      </Routes>
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;
