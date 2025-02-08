import React from 'react';  
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; 
import Navbar from './components/navbar'; 
import Home from './components/home';  
import Error from './components/error';
import './index.css';

const pageVariants = {
  initial: { opacity: 0, x: 100 }, // Start from right
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Slide in
  exit: { opacity: 0, x: -100, transition: { duration: 0.3 } } // Slide out left
};

function AnimatedRoutes() {
  const location = useLocation(); // Get current path

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home />
            </motion.div>
          } 
        />   
        <Route 
          path="/error_processing_request-dwdwdbwdvwhwdvhwwdvw9bwys8gdvhdvyvsjvswjhs" 
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Error />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return ( 
    <Router> 
      <Navbar />  
      <AnimatedRoutes />
    </Router>    
  );
} 

export default App;
