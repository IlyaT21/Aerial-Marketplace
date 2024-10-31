import "./App.scss";
import Footer from "./components/global/Footer";
import { Header } from "./components/global/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Listing from "./pages/Listing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
