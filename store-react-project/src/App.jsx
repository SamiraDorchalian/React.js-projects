import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/404";

import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
