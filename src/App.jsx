import { Home } from "./pages/home"
import { Booking } from "./pages/booking";
import { HashRouter as Router, Routes,Route } from "react-router-dom";

function App() {
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </Router>
    
  );
}

export default App
