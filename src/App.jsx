import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PortfolioAssistant from "./components/PortfolioAssistant/PortfolioAssistant.jsx";
import Home from "./sections/Home/Home.jsx";
import About from "./sections/About/About.jsx";
import Services from "./sections/Services/Services.jsx";
import Portfolio from "./sections/Portfolio/Portfolio.jsx";
import Resume from "./sections/Resume/Resume.jsx";
import Contact from "./sections/Contact/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="wrap">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
    </>
  );
}
