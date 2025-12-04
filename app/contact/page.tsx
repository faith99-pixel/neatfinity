'use client';
import { useState, useRef } from 'react';
import Logo from "@/components/Logo";
import Link from 'next/link';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'basic-clean',
    apartmentSize: '2-bedroom',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceNames: Record<string, string> = {
      'basic-clean': 'Basic Clean',
      'deep-clean': 'Deep Clean',
      'move-in-out': 'Move In/Out Cleaning',
      'commercial': 'Commercial Cleaning',
      'eco-friendly': 'Eco-Friendly Cleaning',
      'specialized': 'Specialized Services',
    };
    
    const apartmentNames: Record<string, string> = {
      'studio-1bed': 'Studio/1 Bedroom',
      '2-bedroom': '2 Bedroom',
      '3-bedroom': '3 Bedroom',
      '4bed-duplex': '4+ Bedroom/Duplex',
    };

    // Create email body
    const emailBody = `
New Cleaning Service Booking Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Service Type: ${serviceNames[formData.service]}
Apartment Size: ${apartmentNames[formData.apartmentSize]}
Address: ${formData.address}

Additional Details:
${formData.message || 'None'}
    `;

    // Open default email client
    window.location.href = `mailto:hello@neatfinity.ng?subject=Cleaning Service Booking - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };
  
  const handleWhatsApp = () => {
    const serviceNames: Record<string, string> = {
      'basic-clean': 'Basic Clean',
      'deep-clean': 'Deep Clean',
      'move-in-out': 'Move In/Out Cleaning',
      'commercial': 'Commercial Cleaning',
      'eco-friendly': 'Eco-Friendly Cleaning',
      'specialized': 'Specialized Services',
    };
    
    const apartmentNames: Record<string, string> = {
      'studio-1bed': 'Studio/1 Bedroom',
      '2-bedroom': '2 Bedroom',
      '3-bedroom': '3 Bedroom',
      '4bed-duplex': '4+ Bedroom/Duplex',
    };

    const whatsappMessage = `Hi! I'd like to book a cleaning service.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Service:* ${serviceNames[formData.service]}
*Apartment Size:* ${apartmentNames[formData.apartmentSize]}
*Address:* ${formData.address}

*Additional Details:*
${formData.message || 'None'}`;

    window.open(`https://wa.me/2347025964703?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-2xl shadow-2xl z-50 rounded-full border border-gray-200">
        <nav className="px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <Link href="/">
            <Logo className="h-8 md:h-10 cursor-pointer" />
          </Link>
          <div className="hidden md:flex gap-8 text-gray-700 font-semibold text-sm">
            <Link href="/#services" className="hover:text-primary transition-all">Services</Link>
            <Link href="/#process" className="hover:text-primary transition-all">Process</Link>
            <Link href="/#pricing" className="hover:text-primary transition-all">Pricing</Link>
            <Link href="/contact" className="text-primary">Contact</Link>
          </div>
          <a href="tel:+2347025964703" className="hidden md:inline-block bg-gradient-to-r from-primary via-blue-500 to-accent text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all hover:scale-105 font-bold text-sm">
            Call Now
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
            <div className="flex flex-col p-4">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Services</Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Process</Link>
              <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Pricing</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-primary font-semibold hover:bg-blue-50 rounded-xl transition">Contact</Link>
              <a href="tel:+2347025964703" className="mt-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-bold text-center">Call Now</a>
            </div>
          </div>
        )}
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-3 md:mb-4">Book Your Cleaning</h1>
            <p className="text-sm md:text-xl text-gray-600 px-4">We'll get back to you within 24 hours</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Type *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition bg-white"
                  >
                    <option value="basic-clean">Basic Clean</option>
                    <option value="deep-clean">Deep Clean</option>
                    <option value="move-in-out">Move In/Out Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="eco-friendly">Eco-Friendly Cleaning</option>
                    <option value="specialized">Specialized Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Apartment Size *</label>
                  <select
                    name="apartmentSize"
                    value={formData.apartmentSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition bg-white"
                  >
                    <option value="studio-1bed">Studio/1 Bedroom</option>
                    <option value="2-bedroom">2 Bedroom</option>
                    <option value="3-bedroom">3 Bedroom</option>
                    <option value="4bed-duplex">4+ Bedroom/Duplex</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Property Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition"
                    placeholder="Enter your full address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition resize-none"
                    placeholder="Any special requirements or questions?"
                  />
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-3 md:py-4 rounded-2xl text-sm md:text-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Send via Email →
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 text-white px-8 py-3 md:py-4 rounded-2xl text-sm md:text-lg font-bold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>📱</span> <span className="hidden sm:inline">Send via</span> WhatsApp
                  </button>
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl text-center font-semibold">
                    ✓ Email client opened! Send the email to complete your booking.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl text-center font-semibold">
                    ✗ Failed to send message. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            <div className="hidden lg:block space-y-6">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">📞</div>
                    <div>
                      <div className="font-bold mb-1">Phone / WhatsApp</div>
                      <a href="tel:+2347025964703" className="text-white/90 hover:text-white transition block">+234 702 596 4703</a>
                      <a href="https://wa.me/2347025964703" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition text-sm">Chat on WhatsApp</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">📧</div>
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <a href="mailto:hello@neatfinity.ng" className="text-white/90 hover:text-white transition">hello@neatfinity.ng</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                    <div>
                      <div className="font-bold mb-1">Service Areas</div>
                      <div className="text-white/90">Lagos, Abuja & Port Harcourt</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
                    <div>
                      <div className="font-bold mb-1">Working Hours</div>
                      <div className="text-white/90">Mon - Sat: 8:00 AM - 6:00 PM</div>
                      <div className="text-white/90">Sunday: By Appointment</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Book With Us?</h3>
                <div className="space-y-4">
                  {[
                    { icon: '✓', text: 'Free property inspection' },
                    { icon: '✓', text: 'Certified professionals' },
                    { icon: '✓', text: 'Eco-friendly products' },
                    { icon: '✓', text: '100% satisfaction guarantee' },
                    { icon: '✓', text: 'Flexible scheduling' },
                    { icon: '✓', text: 'Transparent pricing' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                        {item.icon}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Logo className="h-12 mb-4 [&_text]:fill-white [&_path]:fill-white [&_path]:stroke-white" />
              <p className="text-gray-400 leading-relaxed">Professional cleaning services that exceed expectations.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#services" className="hover:text-white transition">Residential Cleaning</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Commercial Cleaning</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Deep Cleaning</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Move In/Out</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 <a href="tel:+2347025964703" className="hover:text-white transition">+234 702 596 4703</a></li>
                <li>📧 hello@neatfinity.ng</li>
                <li>📍 Lagos, Abuja & Port Harcourt</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Neatfinity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
