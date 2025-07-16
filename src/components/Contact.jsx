import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import FadeSlide from '../react-bits/TextAnimations/FadeSlide';
import TypeWriter from '../react-bits/TextAnimations/TypeWriter';
import ScaleReveal from '../react-bits/TextAnimations/ScaleReveal';
import SpotlightCard from '../react-bits/Components/SpotlightCard';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20 bg-black">
      <ScrollVelocity
        texts={['| Get In Touch', "Let's Build Something Amazing Together |"]}
        velocity={40}
        className="custom-scroll-text text-center text-[#b2b2b2] mb-16"
      />

            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeSlide direction="down" delay={0.3} duration={1.0}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
              <TypeWriter
                text="Ready to start your next project?"
                speed={80}
                delay={500}
                className="text-white"
              />
            </h1>
          </FadeSlide>
          <FadeSlide direction="up" delay={0.8} duration={0.8}>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </FadeSlide>
        </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* WhatsApp Integration */}
          <FadeSlide direction="left" delay={0.5} duration={0.8}>
            <SpotlightCard
              className="whatsapp-section rounded-xl bg-gradient-to-br from-green-900 to-green-800 p-6 md:p-8 transition duration-300 ease-in-out hover:scale-[1.01] hover:rotate-1"
              spotlightColor="rgba(34, 197, 94, 0.3)"
            >
            <div className="flex items-center mb-6">
              <MessageSquare className="text-green-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Chat with us on WhatsApp</h3>
            </div>

            <div className="space-y-6">
              <p className="text-green-100 leading-relaxed">
                Get instant responses to your queries! Chat with us directly on WhatsApp for quick
                project discussions, quotes, and support.
              </p>

              <div className="bg-green-800/50 rounded-lg p-4 border border-green-600/30">
                <h4 className="text-green-200 font-semibold mb-2">Quick Project Quote</h4>
                <p className="text-green-100 text-sm">
                  Send us your project requirements and get a free quote within 24 hours.
                </p>
              </div>

              <div className="bg-green-800/50 rounded-lg p-4 border border-green-600/30">
                <h4 className="text-green-200 font-semibold mb-2">24/7 Support</h4>
                <p className="text-green-100 text-sm">
                  Need help with your existing website? We're just a message away.
                </p>
              </div>

              <a
                href="https://wa.me/+919460701877?text=Hi! I'm interested in your web development services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                Start WhatsApp Chat
              </a>

              <p className="text-green-200 text-sm text-center">
                Click the button above to start a conversation with us on WhatsApp
              </p>
            </div>
          </SpotlightCard>

          {/* Contact Information */}
          <div className="space-y-8">
            <SpotlightCard
              className="contact-info rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition duration-300 ease-in-out hover:scale-[1.02]"
              spotlightColor="rgba(34, 197, 94, 0.2)"
            >
              <div className="flex items-center mb-4">
                <Mail className="text-green-400 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Email Us</h4>
                  <p className="text-gray-300">hello@webier.in</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="contact-info rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition duration-300 ease-in-out hover:scale-[1.02]"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="flex items-center mb-4">
                <Phone className="text-blue-400 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Call Us</h4>
                  <p className="text-gray-300">+91 94607 01877 / +91 94140 41181</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="contact-info rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition duration-300 ease-in-out hover:scale-[1.02]"
              spotlightColor="rgba(147, 51, 234, 0.2)"
            >
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Visit Us</h4>
                  <p className="text-gray-300">Udaipur, Rajasthan, India</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-300 text-sm">
                We typically respond to all inquiries within 24 hours. For urgent projects, feel
                free to call us directly.
              </p>
                        </div>
          </FadeSlide>
        </div>
      </div>
    </section>
  );
}