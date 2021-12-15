import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Artists from "./pages/artist"
import Albums from "./pages/albums"
function App() {
  return (
   <Router>
        <Routes>
          <Route  exact path="/"  element={<Artists/>} />
          <Route path="/artists/:userId/albums" exact element={<Albums/>} />
        </Routes>
   </Router>
    
  );
}

export default App;
