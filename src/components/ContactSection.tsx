
import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "tenzing.jampa@email.com", href: "mailto:tenzing.jampa@email.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "+977-9876543210", href: "tel:+9779876543210" },
    { icon: <Github size={24} />, label: "GitHub", value: "github.com/tenzingjampa", href: "https://github.com" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", value: "linkedin.com/in/tenzingjampa", href: "https://linkedin.com" },
    { icon: <Instagram size={24} />, label: "Instagram", value: "@tenzing_jampa", href: "https://instagram.com" }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in delay-300' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out through 
                  any of the channels below.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50'
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-blue-300'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    }`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{contact.label}</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in delay-500' : ''}`}>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
