import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

export type Page = 'home' | 'menu' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <div className="pt-0">
        {currentPage === 'home' && <Home navigate={navigate} />}
        {currentPage === 'menu' && <Menu navigate={navigate} />}
        {currentPage === 'about' && <About navigate={navigate} />}
        {currentPage === 'contact' && <Contact navigate={navigate} />}
      </div>
    </div>
  );
}

export default App;
