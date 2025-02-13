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
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
import jwt_decode from "jwt-decode";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    console.log("Token found:", token);
    const decodedToken = jwt_decode<{ id: string; role: string }>(token); // Decode with correct type
    console.log(decodedToken.role);
  } else {
    console.log("No token found, redirect to login...");
  }

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
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
