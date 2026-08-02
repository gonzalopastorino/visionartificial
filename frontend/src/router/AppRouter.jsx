import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Servicios from "../pages/Servicios";
import Nosotros from "../pages/Nosotros";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ScrollToHash from "../components/ScrollToHash";
import ChatBot from "../components/chatbot/ChatBot";

function AppRouter() {
  return (
    <>
      {/* Maneja el scroll al cambiar de ruta o navegar a un hash */}
      <ScrollToHash />

      {/* Componentes globales */}
      <Navbar />
      <ChatBot />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default AppRouter;