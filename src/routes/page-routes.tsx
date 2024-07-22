import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../pages/dashbord/dashbord-screen";
import Product from "../pages/product/product-screen";
import MailScreen from "../pages/mail/mail-screen";
import NotCompletedScreen from "../components/common-component/not-completed-screen";

const PageRoutes: React.FC = () => {
  const location = useLocation();
  const isKnownRoute = ["/dashboard", "/", "/products", "/mail"].includes(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Product />} />
      <Route path="/mail" element={<MailScreen />} />
      {!isKnownRoute && <Route path="*" element={<NotCompletedScreen/>} />}
    </Routes>
  );
};

export default PageRoutes;
