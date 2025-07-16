import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import BlurText from '../react-bits/TextAnimations/BlurText';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import { Check, Package, Star, Zap, Rocket, Wrench } from 'lucide-react';

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
    { name: 'Logo Design', price: '₹999' },
    { name: 'SEO Booster', price: '₹1,999' },
    { name: 'Admin Panel', price: '₹2,999' },
    { name: 'Maintenance', price: '₹999/month' },
    { name: 'WhatsApp Bot', price: '₹2,499' },
  ];

  return (
    <section id="pricing" className="relative px-6 py-20 bg-black">
      <ScrollVelocity
        texts={['| Webier Pricing Plans', 'Just two devs. Clean, custom websites. Priced right |']}
        velocity={40}
        className="custom-scroll-text text-center text-[#b2b2b2] mb-16"
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <BlurText
            text="📦 Webier Pricing Plans"
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4"
          />
          <BlurText
            text="Just two devs. Clean, custom websites. Priced right."
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <SpotlightCard
                key={index}
                className={`pricing-card relative flex flex-col justify-between rounded-xl bg-gradient-to-br ${plan.gradient} p-8 text-white transition duration-300 ease-in-out hover:scale-[1.02] min-h-[500px] ${plan.popular ? 'ring-2 ring-white/30' : ''}`}
                spotlightColor={plan.spotlightColor}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center mb-6">
                    <IconComponent size={32} className="text-white/90 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-white/80 text-sm">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={16} className="text-white/90 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/+919460701877?text=Hi! I'm interested in your web development services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center backdrop-blur-sm"
                >
                  Get Started
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="text-center mb-8">
          <BlurText
            text="🔧 Optional Add-Ons"
            delay={200}
            animateBy="words"
            direction="bottom"
            className="text-xl md:text-2xl font-bold text-white mb-8"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {addOns.map((addon, index) => (
            <SpotlightCard
              key={index}
              className="addon-card rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 p-4 text-center transition duration-300 ease-in-out hover:scale-[1.05]"
              spotlightColor="rgba(148, 163, 184, 0.2)"
            >
              <Wrench size={20} className="text-gray-300 mx-auto mb-2" />
              <h4 className="text-white font-semibold text-sm mb-1">{addon.name}</h4>
              <p className="text-gray-300 text-xs">{addon.price}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <BlurText
            text="✨ We build it clean. We ship it fast. Just two devs with solid skills."
            delay={250}
            animateBy="words"
            direction="bottom"
            className="text-lg text-gray-300 mb-6"
          />
          <BlurText
            text="📩 Let's build: webier.in"
            delay={300}
            animateBy="words"
            direction="bottom"
            className="text-xl font-bold text-white"
          />
        </div>
      </div>
    </section>
  );
}
