
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import { create } from "zustand";

// Layout
import MainLayout from '@/components/Layout/MainLayout';

// Pages principales
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetail";
import Menu from "@/pages/Menu";
import Blog from "@/pages/Blog";
import BookService from "@/pages/BookService";
import NotFound from "@/pages/NotFound";

// Pages d'authentification
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

// Pages d'administration
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminCustomers from "@/pages/admin/AdminCustomers";
import AdminOrders from "@/pages/admin/AdminOrders";

const queryClient = new QueryClient();

// Route protégée pour les administrateurs
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAdmin, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  
  if (!user || !isAdmin) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <>{children}</>;
};

// Route protégée pour les utilisateurs connectés
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* Pages publiques */}
              <Route index element={<Index />} />
              <Route path="cart" element={<Cart />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="menu" element={<Menu />} />
              <Route path="blog" element={<Blog />} />
              <Route path="services/book" element={<BookService />} />
              
              {/* Pages d'authentification */}
              <Route path="auth/login" element={<Login />} />
              <Route path="auth/register" element={<Register />} />
              
              {/* Pages d'administration protégées */}
              <Route path="admin/products" element={
                <AdminRoute>
                  <AdminProducts />
                </AdminRoute>
              } />
              <Route path="admin/customers" element={
                <AdminRoute>
                  <AdminCustomers />
                </AdminRoute>
              } />
              <Route path="admin/orders" element={
                <AdminRoute>
                  <AdminOrders />
                </AdminRoute>
              } />
              
              {/* Redirection vers le tableau de bord d'administration */}
              <Route path="admin" element={
                <AdminRoute>
                  <Navigate to="/admin/products" replace />
                </AdminRoute>
              } />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
