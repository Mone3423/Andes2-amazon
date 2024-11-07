import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import Destinations from "./pages/Destinations/Destinations";
import Testimonials from "./components/Common/testimonials/testimonials";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        <Route path="/tour-details/:id" element={<TourDetails />} />
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="blog" element={<Blog />} />

      </Routes>
      <Testimonials /> {/* Sección de testimonios */}
      <Footer />
    </>
  );
}

export default App;
