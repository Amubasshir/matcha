import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import { SupabaseProvider } from "./Context/supabaeContext";
import { Toaster } from "react-hot-toast";
import About from "./Components/About";
import ReviewsSection from "./Components/ReviewSection";
import MoreMatcha from "./Components/MoreMatcha";
import MatchaFeatures from "./Components/MatchaFeature";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import HowWorks from "./Components/HowWorks";

function App() {
  return (
    <SupabaseProvider>
      <CartProvider>
        <div className="min-h-screen  flex flex-col">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#10b981",
                color: "#fff",
              },
            }}
          />
          <Navbar />
          <main className="flex-grow container mx-auto">
            <ProductDetail />
            <About />
            <ReviewsSection />
            <HowWorks />
            <MoreMatcha />
            <MatchaFeatures />
            <HowItWorks />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </SupabaseProvider>
  );
}

export default App;
