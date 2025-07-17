import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import FadeSlide from '../react-bits/TextAnimations/FadeSlide';
import TypeWriter from '../react-bits/TextAnimations/TypeWriter';
import ScaleReveal from '../react-bits/TextAnimations/ScaleReveal';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import { Heart, Coffee, Code2, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="relative bg-black px-6 py-20">
      <ScrollVelocity
        texts={['| About Webier', 'Who We Are & What We Believe |']}
        velocity={40}
        className="custom-scroll-text mb-16 text-center text-[#b2b2b2]"
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Main About Section */}
        <div className="mb-12 text-center md:mb-16">
          <FadeSlide direction="up" delay={0.3} duration={1.0}>
            <h2 className="mb-6 px-4 text-xl leading-relaxed font-bold text-white md:mb-8 md:text-2xl lg:text-3xl">
              <TypeWriter
                text=" We are passionate web developers who believe in creating digital experiences that matter."
                speed={60}
                delay={500}
                className="text-white"
              />
            </h2>
          </FadeSlide>
          <FadeSlide direction="up" delay={0.8} duration={0.8}>
            <p className="mb-8 px-4 text-base text-gray-300 md:mb-12 md:text-lg">
              Based on creativity, powered by technology, and driven by results.
            </p>
          </FadeSlide>
        </div>

        {/* Story Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:gap-8 lg:grid-cols-2">
          <FadeSlide direction="left" delay={0.4} duration={0.8}>
            <SpotlightCard
              className="story-card rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="mb-6 flex items-center">
                <Heart className="mr-4 text-red-400" size={32} />
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                To democratize beautiful web design and make it accessible to everyone. We believe
                every business deserves a stunning digital presence that reflects their unique story
                and values.
              </p>
            </SpotlightCard>
          </FadeSlide>

          <FadeSlide direction="right" delay={0.6} duration={0.8}>
            <SpotlightCard
              className="story-card rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02] hover:-rotate-1"
              spotlightColor="rgba(34, 197, 94, 0.2)"
            >
              <div className="mb-6 flex items-center">
                <Globe className="mr-4 text-blue-400" size={32} />
                <h3 className="text-xl font-bold">Our Vision</h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                To be the go-to partner for businesses looking to establish a meaningful online
                presence. We envision a web where every site tells a compelling story and delivers
                exceptional user experiences.
              </p>
            </SpotlightCard>
          </FadeSlide>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <ScaleReveal delay={0.8} duration={0.7} scale={0.8}>
            <SpotlightCard
              className="value-card rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-4 text-white transition duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1 md:p-6"
              spotlightColor="rgba(147, 51, 234, 0.2)"
            >
              <div className="mb-4 flex items-center">
                <Code2 className="mr-3 text-purple-400" size={24} />
                <h4 className="text-lg font-semibold">Craftsmanship</h4>
              </div>
              <p className="text-sm text-gray-300">
                Every line of code is written with care, every design element placed with purpose.
              </p>
            </SpotlightCard>
          </ScaleReveal>

          <ScaleReveal delay={1.0} duration={0.7} scale={0.8}>
            <SpotlightCard
              className="value-card rounded-xl bg-gradient-to-br from-green-900/50 to-cyan-900/50 p-6 text-white transition duration-300 ease-in-out hover:scale-[1.02] hover:-rotate-1"
              spotlightColor="rgba(6, 182, 212, 0.2)"
            >
              <div className="mb-4 flex items-center">
                <Coffee className="mr-3 text-green-400" size={24} />
                <h4 className="text-lg font-semibold">Collaboration</h4>
              </div>
              <p className="text-sm text-gray-300">
                We work closely with our clients, turning ideas into reality through open
                communication.
              </p>
            </SpotlightCard>
          </ScaleReveal>
        </div>

        {/* Team Introduction */}
        <FadeSlide direction="up" delay={1.2} duration={0.8}>
          <div className="mt-16 text-center">
            <h3 className="mb-4 text-xl font-bold text-white">
              Ready to bring your vision to life?
            </h3>
            <p className="text-gray-300">Let's create something amazing together.</p>
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}
