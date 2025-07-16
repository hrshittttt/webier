import ScrollVelocity from '../react-bits/TextAnimations/ScrollVelocity';
import BlurText from '../react-bits/TextAnimations/BlurText';
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

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Ready to start your next project?"
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          />
          <BlurText
            text="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <SpotlightCard
            className="contact-form rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 transition duration-300 ease-in-out hover:scale-[1.01]"
            spotlightColor="rgba(59, 130, 246, 0.2)"
          >
            <div className="flex items-center mb-6">
              <MessageSquare className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Send us a message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors">
                  <option>Website Development</option>
                  <option>E-commerce Solution</option>
                  <option>Web Application</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
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
                  <p className="text-gray-300">+91 98765 43210</p>
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
                  <p className="text-gray-300">Mumbai, Maharashtra, India</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
