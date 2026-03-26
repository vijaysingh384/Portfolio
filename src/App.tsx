import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Footer from './components/Footer'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound.tsx'

const pageTitles: Record<string, string> = {
  '/': 'Vijay Singh — Full-Stack Developer',
  '/projects': 'Projects — Vijay Singh',
  '/skills': 'Skills — Vijay Singh',
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function TitleManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Vijay Singh';
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleManager />
      <div className="hatch-side hatch-side-left" aria-hidden="true" />
      <div className="hatch-side hatch-side-right" aria-hidden="true" />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Footer />
          </>
        } />
        <Route path="/projects" element={<><Projects /><Footer /></>} />
        <Route path="/skills" element={<><Skills /><Footer /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
