
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d3ijmcdsoafcrsrcq5a0', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'kaushikyeddanapudi0406@gmail.com',
      link: 'mailto:kaushikyeddanapudi0406@gmail.com',
      color: 'text-yellow-400'
    },
    {
      icon: 'ri-linkedin-line',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/kaushik-yeddanapudi-a7603a323/',
      color: 'text-yellow-400'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '+91 7993273549',
      link: 'tel:+917993273549',
      color: 'text-yellow-400'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Location',
      value: 'Hyderabad, India (500098)',
      link: '#',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Get In <span className="text-black font-black">Touch</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Ready to discuss your next data analytics project? Let's connect and explore how I can offer my services to transform your business data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <i className="ri-contacts-line text-black mr-3"></i>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg border border-yellow-400 hover:shadow-xl transition-all duration-300">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-4`}>
                      <i className={`${info.icon} text-xl text-black`}></i>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">{info.label}</p>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-white font-medium hover:text-yellow-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-r from-black to-gray-900 rounded-2xl border border-yellow-400">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-lg font-bold text-yellow-400">Available for New Projects</h4>
              </div>
              <p className="text-white text-sm leading-relaxed">
                I'm currently available for freelance projects and consulting opportunities. 
                Whether you need business intelligence dashboards, data analysis, or analytics strategy consulting, 
                I'm ready to help you achieve your goals.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-lg border border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <i className="ri-message-line text-yellow-400 mr-3"></i>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-yellow-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-yellow-400 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-300 text-sm bg-black text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-yellow-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-yellow-400 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-300 text-sm bg-black text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-yellow-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-yellow-400 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-300 text-sm bg-black text-white"
                  placeholder="Project inquiry, consultation, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-yellow-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-yellow-400 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-300 resize-none text-sm bg-black text-white"
                  placeholder="Tell me about your project requirements, timeline, and how I can help you..."
                ></textarea>
                <p className="text-xs text-white mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap hover:bg-yellow-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="ri-send-plane-line mr-2"></i>
                    Send Message
                  </span>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-yellow-400 border border-yellow-300 rounded-xl">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-black mr-2"></i>
                    <p className="text-black font-medium">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-300 rounded-xl">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
