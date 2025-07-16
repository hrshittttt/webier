import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import StaggerContainer from '../react-bits/TextAnimations/StaggerContainer';
import ScaleReveal from '../react-bits/TextAnimations/ScaleReveal';
import { Code, Palette, Zap, Users, Shield, Rocket } from 'lucide-react';

export default function Qualities() {
  const qualities = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'We write maintainable, scalable code that stands the test of time.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Beautiful, user-friendly interfaces that captivate and convert.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your site loads in milliseconds.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We listen, adapt, and deliver.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability you can trust.',
      gradient: 'from-red-500 to-rose-500',
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: "Built with the latest technologies for tomorrow's web.",
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="qualities" className="relative px-6 py-20 bg-black">
      <ScrollVelocity
        texts={['| Our Qualities', 'What Makes Us Different |']}
        velocity={40}
        className="custom-scroll-text text-center text-[#b2b2b2] mb-16"
      />

            <div className="max-w-6xl mx-auto px-4">
                <StaggerContainer staggerDelay={0.2} initialDelay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {qualities.map((quality, index) => {
              const IconComponent = quality.icon;
              return (
                <ScaleReveal
                  key={index}
                  delay={index * 0.1}
                  duration={0.8}
                  scale={0.7}
                >
                  <SpotlightCard
                    className={`quality-card flex flex-col items-start justify-start rounded-xl bg-gradient-to-br ${quality.gradient} p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1 min-h-[280px]`}
                    spotlightColor="rgba(255, 255, 255, 0.1)"
                  >
                    <div className="mb-6">
                      <IconComponent size={48} className="text-white/90" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{quality.title}</h3>
                    <p className="text-white/80 leading-relaxed">{quality.description}</p>
                  </SpotlightCard>
                </ScaleReveal>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
