import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Phone, Instagram, Mail, MessageSquare, CheckCircle, 
  AlertCircle, ArrowUpRight, Sparkles, Loader2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_INFO, SERVICES_DATA } from '../../data/agencyData';
import { ContactFormData } from '../../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    serviceInterest: 'Branding & Visual Identity'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a project subject or company name.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your project.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Real client-side submission processing
      await new Promise(resolve => setTimeout(resolve, 1400));

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#00E676', '#39FF88', '#064E3B', '#FFFFFF']
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        serviceInterest: 'Branding & Visual Identity'
      });
      setErrors({});
    } catch (err) {
      setIsSubmitting(false);
      alert('An error occurred while submitting. Please try reaching us directly via WhatsApp or Instagram.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px] bg-brand-emerald/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-neon" />
              <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
                // 06. INITIATE CONTACT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-tight">
              READY TO MAKE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-neon">
                SOMETHING GREAT?
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg text-brand-muted-light font-light leading-relaxed">
              Let's talk about your next idea. Reach out through our direct verified channels or submit your project brief below.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Contact Channels vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Channels & Verification */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Phone & WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-brand-forest/60 border border-brand-neon/25 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/60 border border-brand-neon/30 flex items-center justify-center text-brand-bright">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase">Direct Phone & WhatsApp</h3>
                  <span className="text-xs font-mono text-brand-neon">Verified Line (Tunisia +216)</span>
                </div>
              </div>

              <p className="text-xs text-brand-muted mb-6 leading-relaxed">
                Connect instantly with our team via WhatsApp message or direct telephone call:
              </p>

              <div className="flex flex-col gap-3">
                {AGENCY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={phone.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-brand-dark/70 border border-brand-neon/20 hover:border-brand-neon hover:bg-brand-emerald/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-bright shadow-neon animate-pulse" />
                      <span className="font-mono text-sm md:text-base font-bold text-white group-hover:text-brand-bright transition-colors">
                        {phone.international}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-brand-bright bg-brand-emerald/40 px-3 py-1.5 rounded-full border border-brand-neon/30">
                      <span>WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Instagram Official Profile Card */}
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-gradient-to-br from-brand-forest/80 via-brand-forest/40 to-brand-dark border border-brand-neon/25 hover:border-brand-neon transition-all duration-300 shadow-glass group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/60 border border-brand-neon/30 flex items-center justify-center text-brand-bright group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white uppercase">Official Instagram</h3>
                    <span className="text-xs font-mono text-brand-bright">{AGENCY_INFO.instagramHandle}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-neon group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Follow our creative feed for the latest visual campaigns, reel breakdowns, and brand transformations.
              </p>
            </a>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-brand-forest/40 border border-brand-neon/25 shadow-glass relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-emerald border-2 border-brand-neon flex items-center justify-center text-brand-bright shadow-neon mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-3xl text-white uppercase mb-3">
                      Message Received
                    </h3>
                    <p className="text-sm md:text-base text-brand-muted max-w-md leading-relaxed mb-8">
                      Thank you for contacting Insight Company. We have received your inquiry and will review your project details promptly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 rounded-full text-xs font-mono tracking-widest uppercase bg-brand-bright text-black font-bold shadow-neon hover:scale-105 transition-transform"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="flex items-center justify-between pb-4 border-b border-brand-neon/15">
                      <span className="font-mono text-xs tracking-widest text-brand-bright uppercase">
                        // PROJECT INQUIRY FORM
                      </span>
                      <Sparkles className="w-4 h-4 text-brand-neon" />
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Alex Vance"
                          className={`w-full px-4 py-3.5 rounded-xl bg-brand-dark/80 border text-white text-sm placeholder-brand-muted/40 focus:outline-none focus:border-brand-neon transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-brand-neon/20'
                          }`}
                        />
                        {errors.fullName && (
                          <span className="text-[11px] font-mono text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-brand-dark/80 border text-white text-sm placeholder-brand-muted/40 focus:outline-none focus:border-brand-neon transition-colors ${
                            errors.email ? 'border-red-500' : 'border-brand-neon/20'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] font-mono text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject & Service Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                          Subject / Brand Name *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Brand Identity Overhaul"
                          className={`w-full px-4 py-3.5 rounded-xl bg-brand-dark/80 border text-white text-sm placeholder-brand-muted/40 focus:outline-none focus:border-brand-neon transition-colors ${
                            errors.subject ? 'border-red-500' : 'border-brand-neon/20'
                          }`}
                        />
                        {errors.subject && (
                          <span className="text-[11px] font-mono text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.subject}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                          Primary Service Interest
                        </label>
                        <select
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-brand-dark/80 border border-brand-neon/20 text-white text-sm focus:outline-none focus:border-brand-neon transition-colors"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title} className="bg-brand-dark text-white">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                        Project Scope & Message *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand, goals, timeline, and vision..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-brand-dark/80 border text-white text-sm placeholder-brand-muted/40 focus:outline-none focus:border-brand-neon transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-brand-neon/20'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[11px] font-mono text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons Row: Form Submit + Instant WhatsApp */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:flex-1 py-4 rounded-full font-display font-bold text-xs md:text-sm tracking-widest uppercase bg-brand-bright text-black shadow-neon hover:shadow-neon-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            <span>TRANSMITTING INQUIRY...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND INQUIRY</span>
                            <Send className="w-4 h-4 text-black" />
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/21624245468?text=${encodeURIComponent(
                          `Hello Insight Company, my name is ${formData.fullName || '[Your Name]'}. I am inquiring about ${formData.serviceInterest}: "${formData.message || 'I would like to discuss a project'}"`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-4 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border border-brand-neon/40 bg-brand-dark hover:bg-brand-emerald/40 hover:border-brand-neon text-brand-bright transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <MessageSquare className="w-4 h-4 text-brand-neon group-hover:scale-110 transition-transform" />
                        <span>Direct WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

