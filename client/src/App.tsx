import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import ProductCreatePage from "./pages/ProductCreatePage";
import EditProductPage from "./pages/EditProductPage";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div>Navbar</div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create" element={<ProductCreatePage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
