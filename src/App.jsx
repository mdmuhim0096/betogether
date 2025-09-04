import { AnimatePresence, motion } from "framer-motion";
import { Routes, useLocation, Route } from "react-router-dom";

import About from "./page/About";
import Blog from "./page/Blog";
import Testimonials from "./page/Testimonials";
import Contact from "./page/Contact"
import { goToTop } from "./components/utils/function";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./page/Home"));
import { ChevronUp } from "lucide-react";

const App = () => {

  const location = useLocation();

  return (
    <div className="overflow-x-hidden relative">
      {/* <Preloader /> */}
      <div
        className="bg-gradient-to-bl from-blue-500 via-teal-600 to-indigo-800 w-full h-screen fixed top-0 left-0 -z-[1]"
      >
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Suspense><Home /></Suspense></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>

        <div
          onClick={() => { goToTop() }}
          className="px-2 py-1 text-white rounded-md fixed bottom-1 left-1 z-50 cursor-pointer bg-black/40"
        >
          <ChevronUp />
        </div>
      </AnimatePresence>
    </div>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default App;
