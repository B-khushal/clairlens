import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, Globe, Building } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { COMPANY_INFO } from '../data/assetsData';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  initialData?: { enquiryType?: string; product?: string };
}

export default function ContactPage({ onNavigate, initialData }: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    enquiryType: 'Product Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData?.enquiryType) {
      setFormData(prev => ({
        ...prev,
        enquiryType: initialData.enquiryType || 'Product Inquiry',
        subject: initialData.product ? `Inquiry regarding ${initialData.product}` : prev.subject
      }));
    }
  }, [initialData]);

  const breadcrumbItems = [{ label: 'Contact Us' }];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company / Organization is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details of your enquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate seamless submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ivory text-gray-900 overflow-x-hidden min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wine-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wine-800/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-fluid relative z-10">
          <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-wine-800/20 bg-white/90 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase mb-6 shadow-sm">
              <img src="/1.png" alt="CLAIRLENS Emblem" className="h-8 w-auto object-contain" />
              <img src="/2.png" alt="CLAIRLENS" className="h-6 w-auto object-contain" />
              <span className="text-[10px] font-mono text-wine-800 font-bold border-l border-wine-200 pl-3">A UNIT OF CLAIRVOYANT OPHTHALMICS</span>
            </div>

            <h1 className="font-serif text-fluid-hero text-wine-950 font-medium mb-6 leading-tight">
              Let’s Create Better <br />
              <span className="italic font-light text-gradient-wine">Vision Together.</span>
            </h1>

            <p className="text-fluid-body text-gray-700 font-light leading-relaxed">
              Whether you are an optical retailer, regional distributor, eyewear designer, or healthcare institution, connect with the Clairlens engineering & partner management team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CHANNELS & FORM SECTION */}
      <section className="py-8 sm:py-12">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Glass Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase font-mono tracking-widest text-wine-800 font-bold mb-2">
                Official Communication Channels
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl glass-light border-white/80 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-wine-900 text-white flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-wine-200" />
                </div>
                <h3 className="font-serif text-xl font-medium text-wine-950">Email Enquiries</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  For general technical questions, laboratory support, or optical catalog requests.
                </p>
                <div className="pt-2 font-mono text-sm space-y-1">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="block text-wine-900 font-semibold hover:text-wine-700 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.partnersEmail}`} className="block text-wine-700 hover:text-wine-950 transition-colors text-xs">
                    Partners: {COMPANY_INFO.partnersEmail}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-3xl glass-light border-white/80 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-wine-900 text-white flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-wine-200" />
                </div>
                <h3 className="font-serif text-xl font-medium text-wine-950">Telephone Support</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Direct connection to Clairvoyant Ophthalmics headquarters and support desk.
                </p>
                <div className="pt-2 font-mono text-sm space-y-1">
                  <div className="text-wine-900 font-semibold">HQ: {COMPANY_INFO.phone}</div>
                  <div className="text-xs text-wine-700">Toll-Free: {COMPANY_INFO.tollFree}</div>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-3xl glass-light border-white/80 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-wine-900 text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-wine-200" />
                </div>
                <h3 className="font-serif text-xl font-medium text-wine-950">Headquarters Address</h3>
                <p className="text-xs text-wine-950 font-medium leading-relaxed font-mono">
                  {COMPANY_INFO.address}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-gray-600 font-mono">
                  <Clock className="w-4 h-4 text-wine-700" />
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-10 glass-wine text-white shadow-2xl border border-white/20 relative overflow-hidden">
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-wine-300 font-semibold block mb-1">
                      Direct Partner Desk
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                      Send an Enquiry
                    </h2>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-wine-900/90 border border-wine-500/40 text-center space-y-4 my-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-wine-800 border border-wine-400 text-wine-200 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-white">
                      Thank You for Contacting Clairlens
                    </h3>
                    <p className="text-sm text-wine-200/90 font-light max-w-md mx-auto leading-relaxed">
                      Your enquiry has been successfully logged with our Zurich partner team. An optical technical representative will respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '', company: '', email: '', phone: '', country: '', subject: '', enquiryType: 'Product Inquiry', message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white text-wine-950 text-xs uppercase tracking-widest font-semibold hover:bg-wine-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    
                    {/* Full Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Jean-Luc Vance"
                          className={`w-full px-4 py-3 rounded-xl bg-wine-900/70 border text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors ${
                            errors.fullName ? 'border-rose-400' : 'border-wine-700/60'
                          }`}
                        />
                        {errors.fullName && (
                          <div className="flex items-center gap-1 text-rose-300 text-[10px] mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.fullName}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                          Company / Retailer <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Precision Optical AG"
                          className={`w-full px-4 py-3 rounded-xl bg-wine-900/70 border text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors ${
                            errors.company ? 'border-rose-400' : 'border-wine-700/60'
                          }`}
                        />
                        {errors.company && (
                          <div className="flex items-center gap-1 text-rose-300 text-[10px] mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.company}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-wine-900/70 border text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors ${
                            errors.email ? 'border-rose-400' : 'border-wine-700/60'
                          }`}
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 text-rose-300 text-[10px] mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                          Phone / Whatsapp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+41 44 000 0000"
                          className="w-full px-4 py-3 rounded-xl bg-wine-900/70 border border-wine-700/60 text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Country & Enquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                          Country / Region
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. Switzerland, Germany, USA"
                          className="w-full px-4 py-3 rounded-xl bg-wine-900/70 border border-wine-700/60 text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                          Enquiry Category
                        </label>
                        <select
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-wine-900/90 border border-wine-700/60 text-white focus:outline-none focus:border-white transition-colors"
                        >
                          <option value="Product Inquiry">Product & Lens Range Inquiry</option>
                          <option value="Distributor Inquiry">Global Distribution Partnership</option>
                          <option value="Technical Support">Freeform & Coating Tech Support</option>
                          <option value="Partnership">OEM Eyewear Brand Partnership</option>
                          <option value="General Inquiry">General Corporate Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Inquiry regarding 1.67 MR-7 bulk orders"
                        className="w-full px-4 py-3 rounded-xl bg-wine-900/70 border border-wine-700/60 text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-wine-200 font-medium mb-1.5 uppercase font-mono tracking-wider text-[10px]">
                        Detailed Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your optical requirements, required quantities, or partnership goals..."
                        className={`w-full px-4 py-3 rounded-xl bg-wine-900/70 border text-white placeholder-wine-300/40 focus:outline-none focus:border-white transition-colors ${
                          errors.message ? 'border-rose-400' : 'border-wine-700/60'
                        }`}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 text-rose-300 text-[10px] mt-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-white text-wine-950 font-semibold uppercase tracking-widest text-xs hover:bg-wine-100 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-wine-950" />
                            <span>Processing Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Enquiry</span>
                            <Send className="w-4 h-4 text-wine-950" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCATION & FACILITY MAP SECTION */}
      <section className="py-16 sm:py-20">
        <div className="container-fluid">
          <div className="rounded-3xl p-8 glass-light border-white/80 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-wine-800 font-bold block">
                  Visit Clairlens Facility
                </span>
                <h3 className="font-serif text-2xl font-medium text-wine-950">
                  Optical Manufacturing Facility
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Located in Balanagar Industrial Estate, Hyderabad, our high-precision facility is open for technical distributor audits and partner cleanroom tours by prior appointment.
                </p>
                <div className="space-y-2 text-xs font-mono text-wine-950 pt-2">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-wine-700" />
                    <span>Plot No 60, S.V.C.I.E, Phase 2, Balanagar, Hyderabad, Telangana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-wine-700" />
                    <span>Website: www.clairlens.com</span>
                  </div>
                </div>
              </div>

              {/* Map Visualizer Mockup */}
              <div className="lg:col-span-6 rounded-2xl h-64 bg-wine-950 border border-wine-800/30 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-wine-300 font-bold uppercase tracking-wider">
                    Manufacturing Facility
                  </span>
                  <span className="px-3 py-1 rounded-full bg-wine-900 border border-wine-500/40 text-[10px] font-mono text-wine-200">
                    Hyderabad, Telangana
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="text-lg font-serif text-white font-medium mb-1">
                    Clairvoyant Ophthalmics Pvt. Ltd.
                  </div>
                  <div className="text-xs text-wine-200/80 font-mono">
                    Balanagar Industrial Cleanroom • ISO Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <section className="py-16 sm:py-20 bg-wine-900 text-white relative">
        <div className="container-fluid text-center">
          <h2 className="font-serif text-3xl font-medium mb-3">
            Have an Optical Requirement?
          </h2>
          <p className="text-xs text-wine-200/80 max-w-md mx-auto mb-6 font-light">
            Let’s discuss the right refractive index and coating configuration for your market.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full bg-white text-wine-950 text-xs uppercase tracking-widest font-semibold hover:bg-wine-100 transition-colors shadow-lg"
          >
            Fill Inquiry Form Above
          </button>
        </div>
      </section>

    </div>
  );
}
