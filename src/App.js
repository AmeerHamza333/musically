import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
   <Routes>
     <Route path="/musically" element={<Home />}>
       {/* <Route path="about" element={<About />} /> */}
     </Route>
   </Routes>
 </BrowserRouter>
  );
}

export default App;
