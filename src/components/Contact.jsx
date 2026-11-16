import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;

  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Prepare direct mailto URL
    const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatusMessage('Redirecting to your email client...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name && !formData.message) {
      window.open(contact.whatsappLink, '_blank');
      return;
    }
    const text = encodeURIComponent(
      `Hi Jisan, my name is ${formData.name || 'Visitor'} (${formData.email || 'No email provided'}).\n\nSubject: ${formData.subject || 'Inquiry'}\n\nMessage:\n${formData.message || 'I would like to connect!'}`
    );
    window.open(`https://wa.me/8801765561928?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Something Great</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a project in mind, need a full-stack engineer, or want to discuss SQA consultancy? Reach out directly anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards (Email, Phone, WhatsApp, Location) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Address Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-teal-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-teal-300 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(contact.email, 'email')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Number Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Number Card (Requirement #10) */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      WhatsApp Chat
                    </span>
                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>{contact.whatsapp}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  </div>
                </div>

                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 text-xs font-medium transition"
                >
                  Chat Now
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Current Location
                  </span>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {contact.location}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill out the form below to send an email, or tap the WhatsApp button to chat directly.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rahman"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Project Inquiry
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Opportunity / SQA Testing / Consultation"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Jisan, I came across your portfolio and would love to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm transition resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-lg bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono">
                    {statusMessage}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all duration-200 shadow-md shadow-teal-500/20 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (Email)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/40 transition text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
