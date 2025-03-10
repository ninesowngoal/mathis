import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anomaly from "./pages/Anomaly";
import Header from "./components/Header";
import Button from "./components/Button";
import Deficit from "./pages/Deficit";
import "./styles/style.css";
import About from "./pages/About";
import Usage from "./pages/Usage";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="homecontainer">
        <div className="title">
          <h1 style={{marginBottom:0}}>CALCULATE YOUR<br/>WAY TO VICTORY.</h1>
          <menu className="buttoncontainer" style={{marginTop:0, paddingLeft:0}}>
            <Button text="Anomaly" to="/anomaly" />
            <Button text="Stage Penalty" to="/deficit" />
          </menu>
        </div>
      </div>
        <footer>
          <Footer />
        </footer>
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
        <Route path="/about" element={<About />} />
        <Route path="/usage" element={<Usage />} />
      </Routes>
    </Router>
  );
}

export default App;
