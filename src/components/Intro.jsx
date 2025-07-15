import Silk from '../react-bits/Backgrounds/Silk';
import SplitText from '../react-bits/TextAnimations/SplitText';
import BlurText from '../react-bits/TextAnimations/BlurText';
import CircularText from '../react-bits/TextAnimations/CircularText';

export default function Intro() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Sticky Navbar - Centered with White Background */}
      <nav className="fixed top-1 left-1/2 z-50 -translate-x-1/2 transform">
        <div className="flex items-center px-8 py-3 shadow-lg">
          {/* Navigation Links with SplitText Animation */}
          <div className="flex items-center gap-6 space-x-6 rounded-xl bg-black px-5 py-3">
            <SplitText
              text="वेबियर"
              className="mr-16 cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
              text="Services"
              className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
              href="#services"
            />
            <SplitText
              text="Work"
              className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
              href="#work"
            />
            <SplitText
              text="Process"
              className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
              href="#process"
            />
            <SplitText
              text="Praise"
              className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
              href="#praise"
            />
            <SplitText
              text="About"
              className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
              href="#about"
            />
            <SplitText
              text="Contact"
              className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-gray-600"
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
