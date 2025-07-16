import Silk from '../react-bits/Backgrounds/Silk';
import BlurText from '../react-bits/TextAnimations/BlurText';
import CircularText from '../react-bits/TextAnimations/CircularText';
import Navbar from './Navbar';

export default function Intro() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Use the new Navbar component */}
      <Navbar />

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
