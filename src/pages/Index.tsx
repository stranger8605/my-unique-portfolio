import { Helmet } from "react-helmet-async";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import CyberBackground from "@/components/portfolio/CyberBackground";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vignesh T | Cybersecurity & Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of Vignesh T - A passionate developer specializing in cybersecurity and web development. Skilled in HTML, CSS, JavaScript, Python, and secure coding practices." />
        <meta name="keywords" content="Vignesh T, portfolio, web developer, cybersecurity, frontend developer, Python developer" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        <CyberBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
