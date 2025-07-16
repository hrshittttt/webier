import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import BlurText from '../react-bits/TextAnimations/BlurText';

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-20 bg-black">
      <ScrollVelocity
        texts={['| Achievements', 'Our Milestones & Success Stories |']}
        velocity={40}
        className="custom-scroll-text text-center text-[#b2b2b2] mb-16"
      />

            <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Achievement 1 */}
          <SpotlightCard
            className="achievement-card flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(59, 130, 246, 0.3)"
          >
            <div className="text-4xl font-bold mb-4">50+</div>
            <div className="text-lg font-semibold mb-2">Projects Completed</div>
            <div className="text-sm text-blue-200 text-center">
              Successfully delivered high-quality web solutions
            </div>
          </SpotlightCard>

          {/* Achievement 2 */}
          <SpotlightCard
            className="achievement-card flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-800 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(34, 197, 94, 0.3)"
          >
            <div className="text-4xl font-bold mb-4">100%</div>
            <div className="text-lg font-semibold mb-2">Client Satisfaction</div>
            <div className="text-sm text-green-200 text-center">
              Every client leaves with a smile and success
            </div>
          </SpotlightCard>

          {/* Achievement 3 */}
          <SpotlightCard
            className="achievement-card flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(147, 51, 234, 0.3)"
          >
            <div className="text-4xl font-bold mb-4">24/7</div>
            <div className="text-lg font-semibold mb-2">Support Available</div>
            <div className="text-sm text-purple-200 text-center">
              Round-the-clock assistance for all our clients
            </div>
          </SpotlightCard>

          {/* Achievement 4 */}
          <SpotlightCard
            className="achievement-card flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(234, 88, 12, 0.3)"
          >
            <div className="text-4xl font-bold mb-4">3+</div>
            <div className="text-lg font-semibold mb-2">Years Experience</div>
            <div className="text-sm text-orange-200 text-center">
              Building digital experiences since day one
            </div>
          </SpotlightCard>

          {/* Achievement 5 */}
          <SpotlightCard
            className="achievement-card flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(219, 39, 119, 0.3)"
          >
            <div className="text-4xl font-bold mb-4">99.9%</div>
            <div className="text-lg font-semibold mb-2">Uptime Guarantee</div>
            <div className="text-sm text-pink-200 text-center">
              Reliable hosting and maintenance services
            </div>
          </SpotlightCard>

          {/* Achievement 6 */}
          <SpotlightCard
            className="achievement-card flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02]"
            spotlightColor="rgba(6, 182, 212, 0.3)"
          >
            <div className="text-4xl font-bold mb-4">∞</div>
            <div className="text-lg font-semibold mb-2">Innovation Drive</div>
            <div className="text-sm text-cyan-200 text-center">
              Constantly pushing boundaries in web development
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
