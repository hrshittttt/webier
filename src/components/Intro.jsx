import Silk from '../react-bits/Backgrounds/Silk';
import BlurText from '../react-bits/TextAnimations/BlurText';
import CircularText from '../react-bits/TextAnimations/CircularText';
import TypeWriter from '../react-bits/TextAnimations/TypeWriter';
import FadeSlide from '../react-bits/TextAnimations/FadeSlide';
import ScaleReveal from '../react-bits/TextAnimations/ScaleReveal';
import Navbar from './Navbar';

export default function Intro() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Use the new Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center pt-20 md:pt-24 px-4">
        <ScaleReveal delay={0.3} duration={1.2} className="w-full flex justify-center">
          <div className="relative h-[400px] md:h-[575px] w-full max-w-[95vw] md:max-w-10/12 overflow-hidden rounded-xl md:rounded-2xl border border-none shadow-xl">
            <Silk speed={3.0} scale={1} color="#454545" noiseIntensity={1.0} rotation={0} />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 p-4">
              <FadeSlide direction="up" delay={0.8} duration={0.8}>
                <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  <TypeWriter
                    text="Your digital presence, beautifully crafted."
                    speed={80}
                    delay={1000}
                    className="text-white"
                    onComplete={handleAnimationComplete}
                  />
                </h1>
              </FadeSlide>

              <FadeSlide direction="up" delay={1.2} duration={0.6}>
                <BlurText
                  text="We make cool websites, for fun"
                  delay={100}
                  animateBy="words"
                  direction="bottom"
                  className="text-center text-sm md:text-md lg:text-lg font-light text-white"
                />
              </FadeSlide>

              <FadeSlide direction="up" delay={1.8} duration={0.6}>
                <div className="flex gap-4 mt-6">
                  <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform">
                    Get Started
                  </button>
                  <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 transform">
                    View Work
                  </button>
                </div>
              </FadeSlide>
            </div>
          </div>
        </ScaleReveal>

        <FadeSlide direction="up" delay={2.2} duration={0.8}>
          <div className="relative bottom-16 z-30">
            <CircularText
              text="WEBIER * WEBIER * WEBIER * "
              onHover="speedUp"
              spinDuration={20}
              className="text-white"
            />
          </div>
        </FadeSlide>
      </div>
    </div>
  );
}
