import "./App.scss";
import Footer from "./components/global/Footer";
import { Header } from "./components/global/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Listing from "./pages/Listing";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
