import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";

import PageNotFound from "./pages/PageNotFound";
import BookingPage from "./pages/BookingPage";
import TeamPage from "./pages/TeamPage";
import TestimonialPage from "./pages/TestimonialPage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import RoomPage from "./pages/RoomPage";
import Services from "./pages/Services";

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
