import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anomaly from "./pages/Anomaly";
import Title from "./components/Title";
import Header from "./components/Header";
import Button from "./components/Button";
import "./styles/style.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Title className="Title" />
      <div class="flex-container">
        <div><Button text="Anomaly" to="/anomaly" /></div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anomaly" element={<Anomaly />} />
      </Routes>
    </Router>
  );
}

export default App;
