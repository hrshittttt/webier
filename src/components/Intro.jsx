import { useState, useEffect } from 'react';
import Silk from '../react-bits/Backgrounds/Silk';
import SplitText from '../react-bits/TextAnimations/SplitText';
import BlurText from '../react-bits/TextAnimations/BlurText';
import CircularText from '../react-bits/TextAnimations/CircularText';

export default function Intro() {
  const [activeSection, setActiveSection] = useState('');

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['achievements', 'qualities', 'about-us', 'contact'];
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
      {/* Sticky Navbar - Centered with Black Background */}
      <nav className="fixed top-2 left-1/2 z-50 -translate-x-1/2 transform">
        <div className="flex items-center px-8 py-4 shadow-lg">
          {/* Navigation Links with SplitText Animation */}
          <div className="flex items-center gap-6 rounded-xl bg-black px-6 py-4">
            <SplitText
              text="वेबियर"
              className="mr-12 cursor-pointer text-xl font-bold text-white transition-colors hover:text-gray-400"
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

            <SplitText
              text="Achievements"
              className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                activeSection === 'achievements'
                  ? 'text-white opacity-100'
                  : activeSection && activeSection !== 'achievements'
                    ? 'text-gray-500 opacity-40'
                    : 'text-white opacity-100'
              }`}
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
              as="a"
              href="#achievements"
            />
            <SplitText
              text="Qualities"
              className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                activeSection === 'qualities'
                  ? 'text-white opacity-100'
                  : activeSection && activeSection !== 'qualities'
                    ? 'text-gray-500 opacity-40'
                    : 'text-white opacity-100'
              }`}
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
              as="a"
              href="#qualities"
            />
            <SplitText
              text="About"
              className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                activeSection === 'about-us'
                  ? 'text-white opacity-100'
                  : activeSection && activeSection !== 'about-us'
                    ? 'text-gray-500 opacity-40'
                    : 'text-white opacity-100'
              }`}
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
              as="a"
              href="#about-us"
            />
            <SplitText
              text="Contact"
              className={`cursor-pointer text-base font-bold transition-all duration-300 hover:text-white ${
                activeSection === 'contact'
                  ? 'text-white opacity-100'
                  : activeSection && activeSection !== 'contact'
                    ? 'text-gray-500 opacity-40'
                    : 'text-white opacity-100'
              }`}
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
              as="a"
              href="#contact"
            />
          </div>
        </div>
      </nav>

      {/* Silk Box */}
      <div className="relative z-20 flex flex-col items-center pt-24">
        <div className="relative h-[575px] w-[90vw] max-w-10/12 overflow-hidden rounded-2xl border border-none shadow-xl">
          <Silk speed={3.0} scale={1} color="#454545" noiseIntensity={1.0} rotation={0} />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
            <BlurText
              text="Your digital presence, beautifully crafted."
              delay={150}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-center text-3xl font-extrabold text-white md:text-4xl"
            />
            <BlurText
              text="We make cool websites, for fun"
              delay={150}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-md text-center font-light text-white md:text-lg"
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
