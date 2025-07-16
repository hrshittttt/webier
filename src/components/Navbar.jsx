import { useState, useEffect } from 'react';
import SplitText from '../react-bits/TextAnimations/SplitText';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Navbar animation completed!');
  };

    const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    console.log('Scrolling to section:', sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;

      console.log('Element found, scrolling to:', targetPosition);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    } else {
      console.log('Element not found:', sectionId);
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'achievements', 'qualities', 'about-us', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'qualities', label: 'Qualities' },
    { id: 'about-us', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-2 left-1/2 z-50 -translate-x-1/2 transform w-full max-w-6xl px-4">
      <div className="flex items-center justify-center">
                <div className="flex items-center justify-between rounded-xl bg-black px-4 md:px-6 py-3 md:py-4 shadow-2xl w-full max-w-4xl backdrop-blur-sm">
          {/* Brand */}
          <button onClick={scrollToTop} className="cursor-pointer">
            <SplitText
              text="वेबियर"
              className="text-lg md:text-xl font-bold text-white transition-colors hover:text-gray-400"
              delay={70}
              duration={1.0}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white hover:scale-105 transform ${
                  activeSection === item.id
                    ? 'text-white opacity-100 scale-105'
                    : activeSection && activeSection !== item.id
                      ? 'text-gray-500 opacity-40'
                      : 'text-white opacity-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-gray-400 transition-colors transform hover:scale-110"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm animate-in slide-in-from-top duration-300">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/5 hover:scale-105 transform ${
                  activeSection === item.id ? 'text-white bg-white/5' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
