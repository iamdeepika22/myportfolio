import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingIcon from './components/Loading';

const Home = lazy(()=>import('./components/Home'));
const About = lazy(()=>import('./components/About'));
const Projects = lazy(()=>import('./components/Projects'));
const Contact  = lazy(()=>import('./components/Contact'));



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingIcon/>}>
          <div className="container">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
