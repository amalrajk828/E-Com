import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

import Dashboard from "../pages/admin/Dashboard";
import ManageProducts from "../pages/admin/ManageProducts";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageOrders from "../pages/admin/ManageOrders";
import Cart from "../pages/Cart";
import AddEditProduct from "../pages/admin/AddEditProduct";
import Wishlist from "../pages/Wishlist";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

function AppRouter() {
  return (
    <Routes>
      {/* AUTH */}

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* PRODUCTS */}

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />

      {/* CART */}

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      {/* WISHLIST */}

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products/add"
        element={
          <AdminRoute>
            <AddEditProduct />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products/edit/:id"
        element={
          <AdminRoute>
            <AddEditProduct />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default AppRouter;
