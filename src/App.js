import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/accueil.jsx";
import Album from "./components/Album.jsx";
import './App.css'
function App() {
  return (
    <Router> 
      <Routes> 
      <Route path="/" element={<Album/>} />
      </Routes>
    </Router>
  );
}

export default App;
