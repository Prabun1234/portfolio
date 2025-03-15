import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Contact />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Manikanda Prabu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
