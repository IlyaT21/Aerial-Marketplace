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
// import { jwtDecode } from "jwt-decode";
import AuthGuard from "./AuthGuard";
import PublicRoute from "./PublicRoute";
import Drones from "./pages/Drones";
import Helicopters from "./pages/Helicopters";
import Planes from "./pages/Planes";
import Other from "./pages/Other";
import SellerDashboard from "./pages/SellerDashboard";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    // console.log("Token found:", token);
    // const decodedToken = jwtDecode<{ id: string; role: string }>(token);
    // console.log(decodedToken.role);
  } else {
    // console.log("No token found, redirect to login...");
  }

  return (
    <div className="App">
      <Header token={token} />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/helicopters" element={<Helicopters />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/other" element={<Other />} />
          {/* <Route path="/listing/:productId" element={<Listing />} /> */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/listing/:productId"
            element={
              <AuthGuard roles={["admin", "seller", "buyer"]}>
                <Listing />
              </AuthGuard>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <AuthGuard roles={["admin"]}>
                <AdminDashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthGuard roles={["seller"]}>
                <SellerDashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/edit-user/:id"
            element={
              <AuthGuard roles={["admin"]}>
                <EditUser />
              </AuthGuard>
            }
          />
          <Route
            path="/edit-product/:id"
            element={
              <AuthGuard roles={["admin", "seller"]}>
                <EditProduct />
              </AuthGuard>
            }
          />
          <Route
            path="/add-product"
            element={
              <AuthGuard roles={["admin", "seller"]}>
                <AddProduct />
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
