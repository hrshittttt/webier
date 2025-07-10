import Silk from '../react-bits/Backgrounds/Silk';
import SplitText from '../react-bits/TextAnimations/SplitText';
import BlurText from '../react-bits/TextAnimations/BlurText';

export default function Intro() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div style={{ width: '100%', height: '830px', position: 'relative' }}>
      <Silk speed={3.0} scale={1} color="#454545" noiseIntensity={1.0} rotation={0} />

      <div className="absolute top-10 left-10 z-20">
        <SplitText
          text="वे बि य र"
          className="text-2xl font-semibold text-white"
          delay={70}
          duration={1.0}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <BlurText
          text="Your digital presence, beautifully crafted."
          delay={150}
          animateBy="words"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-center text-3xl font-extrabold text-white md:text-4xl"
        />
      </div>
    </div>
  );
}
