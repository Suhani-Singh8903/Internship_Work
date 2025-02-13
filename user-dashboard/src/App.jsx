import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
