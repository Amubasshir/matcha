import { Toaster } from 'react-hot-toast';
import About from './Components/About';
import Footer from './components/Footer';
import HowItWorks from './Components/HowItWorks';
import HowWorks from './Components/HowWorks';
import MatchaFeatures from './Components/MatchaFeature';
import MoreMatcha from './Components/MoreMatcha';
import Navbar from './Components/Navbar';
import ProductDetail from './components/ProductDetail';
import ReviewsSection from './Components/ReviewSection';
import VideoSection from './Components/VideoSection';
import { CartProvider } from './context/CartContext';
import { SupabaseProvider } from './Context/supabaeContext';

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
                background: '#10b981',
                color: '#fff',
              },
            }}
          />
          <Navbar />{' '}
          <main className="flex-grow">
            <ProductDetail />
            <VideoSection
              videoUrl="https://www.youtube.com/watch?v=BsV-OsYZ-KU"
              thumbnailUrl="/src/assets/lovable-uploads/school matcha drink.png"
            />
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
