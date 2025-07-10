import Silk from '../react-bits/Backgrounds/Silk';
import SplitText from '../react-bits/TextAnimations/SplitText';

export default function Intro() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div style={{ width: '100%', height: '830px', position: 'relative' }}>
      {/* Background */}
      <Silk speed={3.0} scale={1} color="#454545" noiseIntensity={1.0} rotation={0} />

      {/* SplitText on top (top-left with some margin) */}
      <div className="absolute top-10 left-10 z-10">
        <SplitText
          text="वे बि य र"
          className="text-2xl font-semibold text-white"
          delay={10}
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
    </div>
  );
}
