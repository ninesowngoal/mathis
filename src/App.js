import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anomaly from "./pages/Anomaly";
import Title from "./components/Title";
import Header from "./components/Header";
import Button from "./components/Button";
import Deficit from "./pages/Deficit";
import "./styles/style.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Title className="Title" />
      <div className="flex-container">
        <Button text="Anomaly" to="/anomaly" />
        <Button text="Stage Penalty" to="/deficit" />
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
        <Route path="/deficit" element={<Deficit />} />
      </Routes>
    </Router>
  );
}

export default App;
