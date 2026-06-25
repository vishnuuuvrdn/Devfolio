import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';
import ResumeViewer from "./components/About/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cineboxd from './components/Projects/Cineboxd';
import FormEZ from './components/Projects/FormEZ';
 
function MainPage() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Resume" element={<ResumeViewer />} />
        <Route path="/Cineboxd" element={<Cineboxd />} />
        <Route path="/FormEZ" element={<FormEZ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
