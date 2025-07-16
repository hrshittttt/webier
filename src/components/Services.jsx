import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import StaggerContainer from '../react-bits/TextAnimations/StaggerContainer';
import FadeSlide from '../react-bits/TextAnimations/FadeSlide';

export default function Projects() {
  return (
            <section id="services" className="relative bottom-10 px-4 md:px-6">
      <ScrollVelocity
        texts={['| webier.in', 'Our Projects... just BETTER |']}
        velocity={40}
        className="custom-scroll-text text-center text-[#b2b2b2]"
      />

            <StaggerContainer staggerDelay={0.2} initialDelay={0.3}>
        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-6 md:gap-10 text-white sm:grid-cols-2 max-w-6xl mx-auto">
          {/* Project 1 */}
          <FadeSlide direction="left" delay={0} duration={0.8}>
            <div className="space-y-4">
              <SpotlightCard
                className="custom-spotlight-card flex h-96 w-full items-center justify-center rounded-xl !bg-blue-400 transition duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1"
                spotlightColor="transparent"
              >
                <span className="text-2xl font-semibold text-white">Project 1 Logo</span>
              </SpotlightCard>
              <div>
                <h2 className="text-xl font-extrabold text-white">UnivMate</h2>
                <a
                  href="https://univmate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm text-[#d4d4d4] hover:underline hover:text-white transition-colors"
                >
                  <span className="text-lg decoration-0">—</span>
                  https://univmate.com/
                </a>
              </div>
            </div>
          </FadeSlide>

          {/* Project 2 */}
          <FadeSlide direction="right" delay={0.2} duration={0.8}>
            <div className="space-y-4">
              <SpotlightCard
                className="custom-spotlight-card flex h-64 w-full items-center justify-center rounded-xl bg-pink-400 transition duration-300 ease-in-out hover:scale-[1.02] hover:-rotate-1"
                spotlightColor="transparent"
              >
                <span className="text-2xl font-semibold text-white">Project 2 Logo</span>
              </SpotlightCard>
              <div>
                <h2 className="text-xl font-extrabold text-white">Project Two</h2>
                <a
                  href="https://your-project-two.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm text-[#d4d4d4] hover:underline hover:text-white transition-colors"
                >
                  <span className="text-lg decoration-0">—</span>
                  https://your-project-two.com
                </a>
              </div>
            </div>
          </FadeSlide>

          {/* Project 3 */}
          <FadeSlide direction="left" delay={0.4} duration={0.8}>
            <div className="space-y-4">
              <SpotlightCard
                className="custom-spotlight-card flex h-60 w-full items-center justify-center rounded-xl !bg-green-500 transition duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1"
                spotlightColor="transparent"
              >
                <span className="text-2xl font-semibold text-white">Project 3 Logo</span>
              </SpotlightCard>
              <div>
                <h2 className="text-xl font-extrabold text-white">Project Three</h2>
                <a
                  href="https://your-project-three.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm text-[#d4d4d4] hover:underline hover:text-white transition-colors"
                >
                  <span className="text-lg decoration-0">—</span>
                  https://your-project-three.com
                </a>
              </div>
            </div>
          </FadeSlide>

          {/* Project 4 */}
          <FadeSlide direction="right" delay={0.6} duration={0.8}>
            <div className="space-y-4">
              <SpotlightCard
                className="custom-spotlight-card flex h-76 w-full items-center justify-center rounded-xl bg-purple-400 transition duration-300 ease-in-out hover:scale-[1.02] hover:-rotate-1"
                spotlightColor="transparent"
              >
                <span className="text-2xl font-semibold text-white">Project 4 Logo</span>
              </SpotlightCard>
              <div>
                <h2 className="text-xl font-extrabold text-white">Project Four</h2>
                <a
                  href="https://your-project-four.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm text-[#d4d4d4] hover:underline hover:text-white transition-colors"
                >
                  <span className="text-lg decoration-0">—</span>
                  https://your-project-four.com
                </a>
              </div>
            </div>
          </FadeSlide>
        </div>
      </StaggerContainer>
    </section>
  );
}
