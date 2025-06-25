import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppNavbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import OtpPage from './components/OtpPage';
import CementPrices from './components/CementPrices';
import Compare from './components/Compare';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import OPCPage from './components/OpcPage';
import PPCPage from './components/PpcPage';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ imported correctly

function App() {
  return (
    <>
      <AppNavbar />
      <ToastContainer position="top-center" autoClose={2500} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/opc" element={<OPCPage />} />
        <Route path="/ppc" element={<PPCPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Protected Routes */}
        <Route
          path="/compare"
          element={
            <ProtectedRoute>
              <Compare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/prices"
          element={
            <ProtectedRoute>
              <CementPrices />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
