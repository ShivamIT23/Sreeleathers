import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="relative h-fit">
      <Router>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}
