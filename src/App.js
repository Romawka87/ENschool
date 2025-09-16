import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";
import BaeutifulOffer from "./components/BaeutifulOffer";
import Foto from './components/Foto'
import Servises from "./components/Servises"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RegistatrationPage from './components/RegistatrationPage'


// Layout компонент с Outlet
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Здесь будут отображаться дочерние компоненты */}
      <section id="footer">
      <Footer />
      </section>
    </>
  );
};

// Компонент для главной страницы
const HomeContent = () => {
  return (
    <>
      <BaeutifulOffer />
      <section id="foto">
      <Foto />
      </section>
      <section id="servises">
      <Servises/>
      </section>
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeContent />} />
          </Route>
          <Route path="/register/:serviceType" element={<RegistatrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;