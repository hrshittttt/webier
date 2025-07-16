import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import BlurText from '../react-bits/TextAnimations/BlurText';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import { Heart, Coffee, Code2, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="relative px-6 py-20 bg-black">
      <ScrollVelocity
        texts={['| About Webier', 'Who We Are & What We Believe |']}
        velocity={40}
        className="custom-scroll-text text-center text-[#b2b2b2] mb-16"
      />

      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <BlurText
            text="We are passionate web developers who believe in creating digital experiences that matter."
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed"
          />
          <BlurText
            text="Based on creativity, powered by technology, and driven by results."
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-lg text-gray-300 mb-12"
          />
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <SpotlightCard
            className="story-card rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(59, 130, 246, 0.2)"
          >
            <div className="flex items-center mb-6">
              <Heart className="text-red-400 mr-4" size={32} />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To democratize beautiful web design and make it accessible to everyone. We believe
              every business deserves a stunning digital presence that reflects their unique story
              and values.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="story-card rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(34, 197, 94, 0.2)"
          >
            <div className="flex items-center mb-6">
              <Globe className="text-blue-400 mr-4" size={32} />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be the go-to partner for businesses looking to establish a meaningful online
              presence. We envision a web where every site tells a compelling story and delivers
              exceptional user experiences.
            </p>
          </SpotlightCard>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpotlightCard
            className="value-card rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(147, 51, 234, 0.2)"
          >
            <div className="flex items-center mb-4">
              <Code2 className="text-purple-400 mr-3" size={24} />
              <h4 className="text-lg font-semibold">Craftsmanship</h4>
            </div>
            <p className="text-gray-300 text-sm">
              Every line of code is written with care, every design element placed with purpose.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="value-card rounded-xl bg-gradient-to-br from-green-900/50 to-cyan-900/50 p-6 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(6, 182, 212, 0.2)"
          >
            <div className="flex items-center mb-4">
              <Coffee className="text-green-400 mr-3" size={24} />
              <h4 className="text-lg font-semibold">Collaboration</h4>
            </div>
            <p className="text-gray-300 text-sm">
              We work closely with our clients, turning ideas into reality through open
              communication.
            </p>
          </SpotlightCard>
        </div>

        {/* Team Introduction */}
        <div className="text-center mt-16">
          <BlurText
            text="Ready to bring your vision to life?"
            delay={200}
            animateBy="words"
            direction="bottom"
            className="text-xl font-bold text-white mb-4"
          />
          <BlurText
            text="Let's create something amazing together."
            delay={250}
            animateBy="words"
            direction="bottom"
            className="text-gray-300"
          />
        </div>
      </div>
    </section>
  );
}
