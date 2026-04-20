import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Skills';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px' }}>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <CaseStudy />
        <Experience />
        <Testimonials />
        <Writing />
        <Contact />
      </main>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
