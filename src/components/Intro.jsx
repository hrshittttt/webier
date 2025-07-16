import { useState, useEffect } from 'react';
import Silk from '../react-bits/Backgrounds/Silk';
import SplitText from '../react-bits/TextAnimations/SplitText';
import BlurText from '../react-bits/TextAnimations/BlurText';
import CircularText from '../react-bits/TextAnimations/CircularText';
import { Menu, X } from 'lucide-react';

export default function Intro() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

      const handleNavClick = (targetId) => {
    console.log('Clicking navigation to:', targetId);
    setIsMobileMenuOpen(false); // Close mobile menu when nav item is clicked

    // Simple and reliable scrolling
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        console.log('Found target:', targetId);
        const headerHeight = 100;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log('Target not found, trying fallback');
        // Fallback scroll positions
        const positions = {
          'services': 800,
          'achievements': 1600,
          'qualities': 2400,
          'about-us': 3200,
          'contact': 4000
        };

        window.scrollTo({
          top: positions[targetId] || 0,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'achievements', 'qualities', 'about-us', 'contact'];
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

      // If we're at the top, no section is active
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Responsive Navbar with Hamburger Menu */}
      <nav className="fixed top-2 left-1/2 z-50 -translate-x-1/2 transform w-full max-w-6xl px-4">
        <div className="flex items-center justify-center">
          {/* Navigation Container */}
          <div className="flex items-center justify-between rounded-xl bg-black px-4 md:px-6 py-3 md:py-4 shadow-2xl border border-white/10 w-full max-w-4xl">
            {/* Brand */}
            <SplitText
              text="वेबियर"
              className="cursor-pointer text-lg md:text-xl font-bold text-white transition-colors hover:text-gray-400"
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={(e) => handleNavClick(e, 'services')}
                className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                  activeSection === 'services'
                    ? 'text-white opacity-100'
                    : activeSection && activeSection !== 'services'
                      ? 'text-gray-500 opacity-40'
                      : 'text-white opacity-100'
                }`}
              >
                Projects
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'achievements')}
                className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                  activeSection === 'achievements'
                    ? 'text-white opacity-100'
                    : activeSection && activeSection !== 'achievements'
                      ? 'text-gray-500 opacity-40'
                      : 'text-white opacity-100'
                }`}
              >
                Achievements
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'qualities')}
                className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                  activeSection === 'qualities'
                    ? 'text-white opacity-100'
                    : activeSection && activeSection !== 'qualities'
                      ? 'text-gray-500 opacity-40'
                      : 'text-white opacity-100'
                }`}
              >
                Qualities
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'about-us')}
                className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                  activeSection === 'about-us'
                    ? 'text-white opacity-100'
                    : activeSection && activeSection !== 'about-us'
                      ? 'text-gray-500 opacity-40'
                      : 'text-white opacity-100'
                }`}
              >
                About
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                  activeSection === 'contact'
                    ? 'text-white opacity-100'
                    : activeSection && activeSection !== 'contact'
                      ? 'text-gray-500 opacity-40'
                      : 'text-white opacity-100'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-gray-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            <div className="flex flex-col">
              <button
                onClick={(e) => handleNavClick(e, 'services')}
                className={`text-left px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/5 ${
                  activeSection === 'services' ? 'text-white bg-white/5' : 'text-gray-300'
                }`}
              >
                Projects
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'achievements')}
                className={`text-left px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/5 ${
                  activeSection === 'achievements' ? 'text-white bg-white/5' : 'text-gray-300'
                }`}
              >
                Achievements
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'qualities')}
                className={`text-left px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/5 ${
                  activeSection === 'qualities' ? 'text-white bg-white/5' : 'text-gray-300'
                }`}
              >
                Qualities
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'about-us')}
                className={`text-left px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/5 ${
                  activeSection === 'about-us' ? 'text-white bg-white/5' : 'text-gray-300'
                }`}
              >
                About
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`text-left px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/5 ${
                  activeSection === 'contact' ? 'text-white bg-white/5' : 'text-gray-300'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center pt-20 md:pt-24 px-4">
        <div className="relative h-[400px] md:h-[575px] w-full max-w-[95vw] md:max-w-10/12 overflow-hidden rounded-xl md:rounded-2xl border border-none shadow-xl">
          <Silk speed={3.0} scale={1} color="#454545" noiseIntensity={1.0} rotation={0} />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 p-4">
            <BlurText
              text="Your digital presence, beautifully crafted."
              delay={150}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
            />
            <BlurText
              text="We make cool websites, for fun"
              delay={150}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-center text-sm md:text-md lg:text-lg font-light text-white"
            />
          </div>
        </div>

        <div className="relative bottom-16 z-30">
          <CircularText
            text="WEBIER * WEBIER * WEBIER * "
            onHover="speedUp"
            spinDuration={20}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
}
