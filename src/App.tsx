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
import Products from "@/pages/Products"; // Ajout de la nouvelle page
import ProductDetail from "@/pages/ProductDetail";
import Menu from "@/pages/Menu";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BookService from "@/pages/BookService";
import NotFound from "@/pages/NotFound";
import Wishlist from "@/pages/Wishlist";
import Messages from "@/pages/Messages";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import ContinueShopping from "@/pages/ContinueShopping";

// Pages de produits par catégorie
import CosmeticsPage from "@/pages/products/Cosmetics";
import WigsPage from "@/pages/products/Wigs";
import SkincareProducts from "@/pages/products/Skincare";
import HaircareProducts from "@/pages/products/Haircare";

// Pages de services
import HairstylingPage from "@/pages/services/Hairstyling";
import MakeupPage from "@/pages/services/Makeup";

// Pages de compte utilisateur
import UserProfile from "@/pages/account/index";

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
              <Route path="products" element={<Products />} /> {/* Ajout de la nouvelle route */}
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="menu" element={<Menu />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="about" element={<About />} />
              <Route path="continue-shopping" element={<ContinueShopping />} />
              
              {/* Pages de catégories de produits */}
              <Route path="products/cosmetics" element={<CosmeticsPage />} />
              <Route path="products/wigs" element={<WigsPage />} />
              <Route path="products/skincare" element={<SkincareProducts />} />
              <Route path="products/haircare" element={<HaircareProducts />} />
              
              {/* Pages de services */}
              <Route path="services/book" element={<BookService />} />
              <Route path="services/hairstyling" element={<HairstylingPage />} />
              <Route path="services/makeup" element={<MakeupPage />} />
              
              {/* Pages d'authentification */}
              <Route path="auth/login" element={<Login />} />
              <Route path="auth/register" element={<Register />} />
              
              {/* Pages protégées nécessitant une connexion */}
              <Route path="account" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              } />
              <Route path="wishlist" element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              } />
              <Route path="messages" element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              } />
              
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
