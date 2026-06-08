import "./assets/tailwind.css";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Produk";
import ProductDetail from "./pages/ProductDetail";
import Notes from "./pages/Notes";

function App() {
  // const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div id="main-content" className="flex-1 p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
