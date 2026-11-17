"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { sectionHeading, subtitle, email, phone, location, note, socials } =
    portfolioData.contact;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone is optional, but if provided, validate basic numeric format
    if (formData.phone.trim()) {
      const phoneClean = formData.phone.replace(/[\s-()+]/g, "");
      if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
        newErrors.phone = "Please enter a valid phone number or leave blank.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic async processing delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTouched({});
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF7FA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#422634] tracking-tight">
            {sectionHeading}
          </h2>
          <p className="text-[#765968] text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-[#422634] mb-2">
                  Direct Contact
                </h3>
                <p className="text-sm text-[#765968] leading-relaxed">
                  Whether you have an internship opportunity, project idea, or simply want to chat about technology, my inbox and phone are open.
                </p>
              </div>

              {/* Email Address Card */}
              <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C6E7E] uppercase">
                  <Mail className="w-3.5 h-3.5 text-[#D66B91]" />
                  Email Address
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold text-[#422634] hover:text-[#D66B91] transition-colors truncate"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-[#F2D5E0] text-[#765968] hover:text-[#D66B91] hover:border-[#E88BAA] transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#D66B91]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-[#D66B91] font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Mobile Number Card */}
              <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C6E7E] uppercase">
                  <Phone className="w-3.5 h-3.5 text-[#D66B91]" />
                  Mobile Number
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${phone}`}
                    className="text-sm font-semibold text-[#422634] hover:text-[#D66B91] transition-colors"
                  >
                    +91 {phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white border border-[#F2D5E0] text-[#765968] hover:text-[#D66B91] hover:border-[#E88BAA] transition-colors shrink-0"
                    title="Copy phone number to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-[#D66B91]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedPhone && (
                  <p className="text-[11px] text-[#D66B91] font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Phone copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0]">
                <div className="p-2.5 rounded-lg bg-white border border-[#F2D5E0] text-[#D66B91]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8C6E7E] uppercase">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-[#422634]">
                    {location}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-[#8C6E7E] uppercase">
                  Connect On Socials
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] hover:border-[#E88BAA] hover:bg-[#FCEBF1]/60 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-white text-[#765968] group-hover:text-[#D66B91] transition-colors shadow-sm">
                        {social.name === "GitHub" && <Github className="w-4 h-4" />}
                        {social.name === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                        {social.name === "Email" && <Mail className="w-4 h-4" />}
                        {social.name === "Phone" && <Phone className="w-4 h-4" />}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-[#422634] group-hover:text-[#D66B91] transition-colors">
                          {social.name}
                        </div>
                        <div className="text-[11px] text-[#8C6E7E] truncate">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Integration Note Banner */}
            <div className="p-4 rounded-xl bg-[#FCEBF1] border border-[#F2D5E0] text-xs text-[#765968] space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-1.5 text-[#D66B91] font-medium">
                <Info className="w-4 h-4" />
                <span>Developer Note on Form Delivery</span>
              </div>
              <p>{note}</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-4 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-2xl text-[#422634]">
                        Message Validated &amp; Ready!
                      </h3>
                      <p className="text-sm text-[#765968] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, <strong className="text-[#422634]">{formData.name}</strong>. Frontend validation succeeded. Since no external backend is hooked up yet, please also feel free to reach out directly via <a href={`mailto:${email}`} className="text-[#D66B91] underline font-mono font-medium">{email}</a> or call/text <a href={`tel:${phone}`} className="text-[#D66B91] underline font-mono font-medium">+91 {phone}</a>.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={handleResetForm}
                        className="px-6 py-2.5 rounded-xl bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] hover:bg-[#E88BAA] hover:text-white transition-colors text-sm font-medium"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#422634] mb-1">
                        Send a Message
                      </h3>
                      <p className="text-xs text-[#8C6E7E]">
                        Fill in your details below and I&apos;ll get back to you promptly.
                      </p>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-[#765968]"
                      >
                        Your Name <span className="text-[#D66B91]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                        placeholder="e.g. Maya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF7FA] border text-sm text-[#422634] placeholder-[#A38795] transition-all duration-200 outline-none ${
                          errors.name && touched.name
                            ? "border-red-400 focus:border-red-500"
                            : "border-[#F2D5E0] focus:border-[#E88BAA] focus:ring-1 focus:ring-[#E88BAA]/40"
                        }`}
                        aria-invalid={Boolean(errors.name && touched.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && touched.name && (
                        <p
                          id="name-error"
                          className="text-xs text-red-500 flex items-center gap-1 pt-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-[#765968]"
                      >
                        Your Email <span className="text-[#D66B91]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        placeholder="e.g. maya@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF7FA] border text-sm text-[#422634] placeholder-[#A38795] transition-all duration-200 outline-none ${
                          errors.email && touched.email
                            ? "border-red-400 focus:border-red-500"
                            : "border-[#F2D5E0] focus:border-[#E88BAA] focus:ring-1 focus:ring-[#E88BAA]/40"
                        }`}
                        aria-invalid={Boolean(errors.email && touched.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && touched.email && (
                        <p
                          id="email-error"
                          className="text-xs text-red-500 flex items-center gap-1 pt-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number Input (Optional) - placed between Email and Message */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-mono uppercase tracking-wider text-[#765968]"
                        >
                          Mobile Number
                        </label>
                        <span className="text-[11px] font-mono text-[#A38795] italic">
                          Optional
                        </span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder="e.g. 8073072044"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF7FA] border text-sm text-[#422634] placeholder-[#A38795] transition-all duration-200 outline-none ${
                          errors.phone && touched.phone
                            ? "border-red-400 focus:border-red-500"
                            : "border-[#F2D5E0] focus:border-[#E88BAA] focus:ring-1 focus:ring-[#E88BAA]/40"
                        }`}
                        aria-invalid={Boolean(errors.phone && touched.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && touched.phone && (
                        <p
                          id="phone-error"
                          className="text-xs text-red-500 flex items-center gap-1 pt-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-[#765968]"
                      >
                        Your Message <span className="text-[#D66B91]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        placeholder="Tell me about your project, idea, or opportunity..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF7FA] border text-sm text-[#422634] placeholder-[#A38795] transition-all duration-200 outline-none resize-none ${
                          errors.message && touched.message
                            ? "border-red-400 focus:border-red-500"
                            : "border-[#F2D5E0] focus:border-[#E88BAA] focus:ring-1 focus:ring-[#E88BAA]/40"
                        }`}
                        aria-invalid={Boolean(errors.message && touched.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && touched.message && (
                        <p
                          id="message-error"
                          className="text-xs text-red-500 flex items-center gap-1 pt-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button: Dusty Rose with White Text */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E88BAA] text-white font-semibold text-sm hover:bg-[#D66B91] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-soft hover:shadow-card-hover"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Validating Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
