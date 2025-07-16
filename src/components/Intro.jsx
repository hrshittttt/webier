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
            {/* Premium Navbar */}
      <nav className="fixed top-3 left-1/2 z-50 -translate-x-1/2 transform">
        <div className="flex items-center rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 px-3 py-2 shadow-2xl">
          {/* Brand */}
          <div className="px-4 py-2 mr-6">
            <SplitText
              text="वेबियर"
              className="cursor-pointer text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all hover:from-blue-400 hover:to-cyan-400"
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
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300">
              <SplitText
                text="Achievements"
                className="cursor-pointer text-sm font-medium text-blue-100 hover:text-white transition-colors"
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
            </div>
                                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300">
              <SplitText
                text="Qualities"
                className="cursor-pointer text-sm font-medium text-purple-100 hover:text-white transition-colors"
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
            </div>
                                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 transition-all duration-300">
              <SplitText
                text="About us"
                className="cursor-pointer text-sm font-medium text-green-100 hover:text-white transition-colors"
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
            </div>
            
            
                        <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 transition-all duration-300">
              <SplitText
                text="Contact"
                className="cursor-pointer text-sm font-medium text-orange-100 hover:text-white transition-colors"
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
