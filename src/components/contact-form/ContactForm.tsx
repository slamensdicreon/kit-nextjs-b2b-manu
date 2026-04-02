'use client';

import { useState } from 'react';
import { VariantProps } from '@/lib/component-props';
import { ContactFormFields } from './ContactForm.props';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export function Default(props: VariantProps<ContactFormFields>) {
  const [submitted, setSubmitted] = useState(false);
  const title = props.fields?.title?.value || 'Get in Touch';
  const subtitle =
    props.fields?.subtitle?.value ||
    "Have a question about our products or need a custom solution? We're here to help.";

  if (submitted) {
    return (
      <section className="section">
        <div className="container-wide max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-slate-500 text-lg">
            Your message has been received. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-slate-500 mb-8">{subtitle}</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-primary-900">Headquarters</p>
                  <p className="text-sm text-slate-500">
                    1200 Industrial Parkway
                    <br />
                    Detroit, MI 48201, USA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-primary-900">Phone</p>
                  <p className="text-sm text-slate-500">+1 (800) 555-APEX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-primary-900">Email</p>
                  <p className="text-sm text-slate-500">info@apexmfg.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="card p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label">First Name *</label>
                  <input type="text" className="input" placeholder="John" required />
                </div>
                <div>
                  <label className="label">Last Name *</label>
                  <input type="text" className="input" placeholder="Smith" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label">Email *</label>
                  <input type="email" className="input" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="label">Phone</label>
                  <input type="tel" className="input" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="mb-4">
                <label className="label">Company *</label>
                <input type="text" className="input" placeholder="Your Company Name" required />
              </div>
              <div className="mb-4">
                <label className="label">Product Interest</label>
                <select className="input">
                  <option value="">Select a product category</option>
                  <option value="automation">Industrial Automation</option>
                  <option value="tooling">Precision Tooling</option>
                  <option value="quality">Quality Control</option>
                  <option value="material">Material Handling</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="label">Message *</label>
                <textarea
                  className="input"
                  rows={4}
                  placeholder="Tell us about your manufacturing needs..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
              <p className="text-xs text-slate-400 mt-3">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sidebar(props: VariantProps<ContactFormFields>) {
  const [submitted, setSubmitted] = useState(false);
  const title = props.fields?.title?.value || 'Quick Contact';

  if (submitted) {
    return (
      <div className="card p-6 text-center">
        <p className="font-semibold text-green-600">Message sent! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-3"
      >
        <input type="text" className="input" placeholder="Your Name *" required />
        <input type="email" className="input" placeholder="Email *" required />
        <input type="text" className="input" placeholder="Company" />
        <textarea className="input" rows={3} placeholder="How can we help?" required />
        <button type="submit" className="btn-primary w-full text-sm">
          Send Message
        </button>
      </form>
    </div>
  );
}
