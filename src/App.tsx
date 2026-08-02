import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={
            <PageTransition><Home /></PageTransition>
          } />

          <Route path="/about" element={
            <PageTransition><About /></PageTransition>
          } />

          <Route path="/services" element={
            <PageTransition><Services /></PageTransition>
          } />

          <Route path="/contact" element={
            <PageTransition><Contact /></PageTransition>
          } />

          <Route path="/portfolio" element={
            <PageTransition><Portfolio /></PageTransition>
          } />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;