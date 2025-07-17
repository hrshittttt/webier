import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import FadeSlide from '../react-bits/TextAnimations/FadeSlide';
import TypeWriter from '../react-bits/TextAnimations/TypeWriter';
import StaggerContainer from '../react-bits/TextAnimations/StaggerContainer';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import {
  Check,
  Package,
  Star,
  Zap,
  Rocket,
  Palette,
  Search,
  Shield,
  Headphones,
  MessageSquare,
} from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'BASIC',
      price: '₹4,999',
      icon: Package,
      description: 'For personal brands & simple pages',
      features: [
        'Vite + React (Frontend Only)',
        'Up to 3 Static Pages',
        'Contact Form',
        'Mobile Responsive',
        'Basic SEO',
        '1 Revision',
        'Delivery in 3–5 Days',
        'Hosting Help (Guided)',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      spotlightColor: 'rgba(59, 130, 246, 0.3)',
      popular: false,
    },
    {
      name: 'STANDARD',
      price: '₹9,999',
      icon: Star,
      description: 'For businesses ready to grow',
      features: [
        'Full MERN Stack (Frontend + Backend)',
        'Up to 6 Pages',
        'Auth, Blog, Forms',
        'Optimized SEO',
        '2 Revisions',
        'Hosting Setup & Deployment',
        'Delivery in 6–10 Days',
      ],
      gradient: 'from-purple-500 to-pink-500',
      spotlightColor: 'rgba(147, 51, 234, 0.3)',
      popular: true,
    },
    {
      name: 'ADVANCED',
      price: '₹14,999',
      icon: Rocket,
      description: 'For web apps & advanced systems',
      features: [
        'MERN with APIs, Dashboards',
        'Unlimited Pages',
        'Admin Panel, Role Management',
        'Advanced SEO',
        'Unlimited Revisions (within scope)',
        'Hosting + CI/CD + Full Support',
        'Delivery in 10–20 Days',
      ],
      gradient: 'from-green-500 to-emerald-500',
      spotlightColor: 'rgba(34, 197, 94, 0.3)',
      popular: false,
    },
  ];

  const addOns = [
    { name: 'Logo Design', price: '₹999', icon: Palette, gradient: 'from-pink-500 to-rose-500' },
    {
      name: 'SEO Booster',
      price: '₹1,999',
      icon: Search,
      gradient: 'from-green-500 to-emerald-500',
    },
    { name: 'Admin Panel', price: '₹2,999', icon: Shield, gradient: 'from-blue-500 to-cyan-500' },
    {
      name: 'Maintenance',
      price: '₹999/month',
      icon: Headphones,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'WhatsApp Bot',
      price: '₹2,499',
      icon: MessageSquare,
      gradient: 'from-green-600 to-green-500',
    },
  ];

  return (
    <section id="pricing" className="relative bg-black px-6 py-20">
      <ScrollVelocity
        texts={['| Webier Pricing Plans', 'Just two devs. Clean, custom websites. Priced right |']}
        velocity={40}
        className="custom-scroll-text mb-16 text-center text-[#b2b2b2]"
      />

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <FadeSlide direction="down" delay={0.3} duration={1.0}>
            <h1 className="mb-4 px-4 text-2xl font-bold text-white md:mb-6 md:text-3xl lg:text-4xl">
              <TypeWriter
                text=" Webier Pricing Plans"
                speed={100}
                delay={500}
                className="text-white"
              />
            </h1>
          </FadeSlide>
          <FadeSlide direction="up" delay={0.8} duration={0.8}>
            <p className="mx-auto max-w-2xl px-4 text-base text-gray-300 md:text-lg">
              Just two devs. Clean, custom websites. Priced right.
            </p>
          </FadeSlide>
        </div>

        {/* Pricing Cards */}
        <StaggerContainer staggerDelay={0.2} initialDelay={0.5}>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <SpotlightCard
                  key={index}
                  className={`pricing-card relative flex flex-col justify-between rounded-xl bg-gradient-to-br ${plan.gradient} min-h-[500px] p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02] ${plan.popular ? 'ring-2 ring-white/30' : ''}`}
                  spotlightColor={plan.spotlightColor}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                      <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="mb-6 flex items-center">
                      <IconComponent size={32} className="mr-3 text-white/90" />
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-white/80">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check size={16} className="mt-1 mr-3 flex-shrink-0 text-white/90" />
                          <span className="text-sm text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/+919460701877?text=Hi! I'm interested in your web development services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-lg bg-white/20 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                  >
                    Get Started
                  </a>
                </SpotlightCard>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Add-ons Section */}
        <div className="mb-8 text-center">
          <FadeSlide direction="up" delay={1.0} duration={0.6}>
            <h3 className="mb-8 text-xl font-bold text-white md:text-2xl">🔧 Optional Add-Ons</h3>
          </FadeSlide>
        </div>

        <StaggerContainer staggerDelay={0.1} initialDelay={1.2}>
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <SpotlightCard
                  key={index}
                  className={`addon-card rounded-lg bg-gradient-to-br ${addon.gradient} p-4 text-center transition duration-300 ease-in-out hover:scale-[1.05] hover:rotate-2`}
                  spotlightColor="rgba(255, 255, 255, 0.2)"
                >
                  <IconComponent size={20} className="mx-auto mb-2 text-white" />
                  <h4 className="mb-1 text-sm font-semibold text-white">{addon.name}</h4>
                  <p className="text-xs text-white/80">{addon.price}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeSlide direction="up" delay={1.5} duration={0.8}>
          <div className="flex flex-col items-center justify-center text-center text-4xl">
            <p className="mb-6 text-lg text-gray-300">
              ✨ We build it clean. We ship it fast. Just two devs with solid skills.
            </p>
            <p className="text-xl font-bold text-white">📩 Let's build: webier.in</p>
          </div>
        </FadeSlide>
      </div>
    </section>
  );
}
