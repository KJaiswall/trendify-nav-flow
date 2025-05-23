
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Men from "./pages/Men";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/men" element={<Men />} />
              <Route path="/search" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
