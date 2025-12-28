'use client';
import Logo from "@/components/Logo";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Header */}
      <header className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-2xl shadow-2xl z-50 rounded-full border border-gray-200">
        <nav className="px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <Logo className="h-8 md:h-10" />
          <div className="hidden md:flex gap-8 text-gray-700 font-semibold text-sm">
            <a href="#services" className="hover:text-primary transition-all relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="#process" className="hover:text-primary transition-all relative group">
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="#pricing" className="hover:text-primary transition-all relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="/contact" className="hover:text-primary transition-all relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
          </div>
          <a href="/contact" className="hidden md:inline-block bg-gradient-to-r from-primary via-blue-500 to-accent text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all hover:scale-105 font-bold text-sm">
            Book Now →
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
            <div className="flex flex-col p-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Process</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Pricing</a>
              <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-primary rounded-xl transition">Contact</a>
              <a href="/contact" className="mt-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-bold text-center">Book Now →</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Large Image */}
      <section className="relative min-h-screen pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold border border-primary/20">
                  ✨ #1 Rated Cleaning Service
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none">
                <span className="text-gray-900">Clean</span>
                <br />
                <span className="text-gray-900">Spaces,</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                  Clear Mind
                </span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Professional cleaning that exceeds expectations. Spotless results, every time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="/contact" className="group bg-gradient-to-r from-primary to-accent text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                  Get Free Quote
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="tel:+2347025964703" className="bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:bg-gray-800 transition-all hover:scale-105 text-center">
                  📞 Call Now
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
                {[
                  { num: "12K+", label: "Happy Homes" },
                  { num: "15+", label: "Years" },
                  { num: "4.9★", label: "Rating" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.num}</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&q=80"
                  alt="Professional cleaning service"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">
                      ✨
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm md:text-lg">Save 20% Today</div>
                      <div className="text-gray-600 text-xs md:text-sm">New customers only</div>
                    </div>
                    <a href="/contact" className="bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-bold hover:bg-gray-800 transition whitespace-nowrap">
                      Claim
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Services Section - Interactive Tabs */}
      <section id="services" className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6">What We Clean</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">Professional cleaning tailored to your needs</p>
          </div>
          
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:gap-4 md:mb-12 px-2">
            {[
              { name: "Residential", icon: "🏠" },
              { name: "Commercial", icon: "🏢" },
              { name: "Deep Clean", icon: "✨" },
              { name: "Move In/Out", icon: "📦" },
              { name: "Eco-Friendly", icon: "🌿" },
              { name: "Specialized", icon: "🔧" },
            ].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all ${
                  activeService === i
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:scale-105'
                }`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          
          {/* Service Content */}
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[500px] lg:h-auto">
                <img
                  src={[
                    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
                    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&q=80",
                    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80",
                    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
                    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=80",
                  ][activeService]}
                  alt="Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  {[
                    "Residential Deep Cleaning",
                    "Commercial Office Cleaning",
                    "Deep Cleaning Services",
                    "Move In/Out Cleaning",
                    "Eco-Friendly Cleaning",
                    "Specialized Services",
                  ][activeService]}
                </h3>
                
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  {[
                    "Transform your home into a spotless sanctuary. Our residential cleaning covers every room, every surface, every detail. From kitchens to bathrooms, bedrooms to living areas—we make your home shine.",
                    "Maintain a professional, productive workspace. Our commercial cleaning services keep your office spotless, creating a healthy environment for your team and impressive space for clients.",
                    "Go beyond surface cleaning. Our deep cleaning service tackles the hidden dirt, grime, and bacteria that regular cleaning misses. Perfect for seasonal refreshes or special occasions.",
                    "Stress-free property transitions. Whether moving in or out, our thorough cleaning ensures the space is pristine. Landlords love us, tenants trust us, and deposits get returned.",
                    "Clean with a conscience. Our eco-friendly cleaning uses 100% non-toxic, biodegradable products that are safe for your family, pets, and the planet—without compromising on results.",
                    "Expert care for special needs. From carpet steam cleaning to window washing, upholstery care to pressure washing—we have the equipment and expertise for any cleaning challenge.",
                  ][activeService]}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="font-bold text-gray-900 text-lg mb-3">What's Included:</div>
                  {[
                    ["All rooms thoroughly cleaned", "Kitchen deep clean & appliances", "Bathroom sanitization", "Dusting, vacuuming & mopping", "Baseboards & window sills"],
                    ["Desk & surface disinfection", "Floor care & maintenance", "Restroom deep cleaning", "Trash & recycling removal", "Break room sanitization"],
                    ["Behind & under furniture", "Inside cabinets & drawers", "Appliance interior cleaning", "Grout & tile scrubbing", "Ceiling fans & light fixtures"],
                    ["Inside all cabinets", "Appliance deep clean", "Wall spot cleaning", "Carpet shampooing", "Window tracks & sills"],
                    ["Non-toxic products only", "Allergen-free cleaning", "Pet & child safe", "Eco-certified supplies", "Sustainable practices"],
                    ["Carpet steam cleaning", "Professional window washing", "Upholstery deep clean", "Pressure washing exterior", "Specialized equipment"],
                  ][activeService].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-gray-700 text-base">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                  <button className="bg-gradient-to-r from-primary to-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-2xl transition-all hover:scale-105">
                    Book This Service →
                  </button>
                  <button className="bg-gray-100 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-gray-200 transition-all">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Process</h2>
            <p className="text-base md:text-xl text-gray-600">Simple and effective</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book Online", desc: "Choose your service and schedule instantly through our easy booking system", icon: "📅" },
              { step: "02", title: "We Arrive", desc: "Our certified team arrives on time with all professional equipment and eco-friendly supplies", icon: "🚗" },
              { step: "03", title: "Deep Clean", desc: "Systematic cleaning using our proven checklist. Every corner, every surface, every detail", icon: "✨" },
              { step: "04", title: "Quality Check", desc: "Final walkthrough to ensure perfection. Not satisfied? We'll make it right immediately", icon: "✓" },
            ].map((item, i) => (
              <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4">How We Price</h2>
            <p className="text-base md:text-xl text-gray-600">Transparent, fair pricing</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-2xl flex-shrink-0">👀</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Inspection First</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team visits your property for a free inspection to assess the space, understand your specific needs, and provide an accurate quote. This ensures no surprises and fair pricing for everyone.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">📏</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Apartment Size</h4>
              <p className="text-gray-600">Number of bedrooms, bathrooms, and total square footage. Larger spaces require more time, staff, and cleaning supplies.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">🧹</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Current Condition</h4>
              <p className="text-gray-600">How dirty or neglected the space is. Heavily soiled areas or long-term buildup may require extra effort and specialized cleaning.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Service Type</h4>
              <p className="text-gray-600">Basic maintenance cleaning vs. deep cleaning. Deep cleaning includes inside cabinets, appliances, and hard-to-reach areas.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Special Requirements</h4>
              <p className="text-gray-600">Additional services like carpet shampooing, window washing, or eco-friendly products. Custom requests are accommodated.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">Distance from our base affects travel time and logistics. Properties in remote areas may have slight adjustments.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">🕒</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Frequency</h4>
              <p className="text-gray-600">One-time cleaning vs. recurring service. Regular clients get discounted rates for weekly, bi-weekly, or monthly bookings.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready for Your Free Inspection?</h3>
            <p className="text-lg mb-6 opacity-90">Book now and get an accurate quote tailored to your space</p>
            <button className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all hover:scale-105">
              Schedule Free Inspection →
            </button>
          </div>
        </div>
      </section>
      
      {/* Pricing Section - Nigerian Market */}
      <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Starting Prices</h2>
            <p className="text-base md:text-lg text-gray-600 mb-2">Base rates by apartment size (final price determined after inspection)</p>
            <p className="text-sm text-gray-500">Serving Lagos, Abuja, Port Harcourt & major Nigerian cities</p>
          </div>
          
          {/* Apartment Size Pricing */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Pricing by Apartment Size</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { size: "Studio/1 Bedroom", basic: "₦25,000", deep: "₦35,000", oldBasic: "₦30,000", oldDeep: "₦42,000", icon: "🏠" },
                { size: "2 Bedroom", basic: "₦50,000", deep: "₦70,000", oldBasic: "₦60,000", oldDeep: "₦84,000", icon: "🏡", popular: true },
                { size: "3 Bedroom", basic: "₦80,000", deep: "₦100,000", oldBasic: "₦96,000", oldDeep: "₦120,000", icon: "🏘️" },
                { size: "4+ Bedroom/Duplex", basic: "₦120,000+", deep: "₦140,000+", oldBasic: "₦144,000+", oldDeep: "₦168,000+", icon: "🏰" },
              ].map((apt, i) => (
                <div key={i} className={`relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 ${
                  apt.popular ? 'border-primary scale-105' : 'border-gray-100'
                }`}>
                  {apt.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST COMMON
                    </div>
                  )}
                  <div className="text-5xl mb-3 text-center">{apt.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 text-center mb-4">{apt.size}</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">Basic Clean</div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-gray-400 line-through">{apt.oldBasic}</span>
                        <div className="text-2xl font-black text-primary">{apt.basic}</div>
                      </div>
                      <div className="text-xs text-green-600 font-bold mt-1">Save 17%</div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">Deep Clean</div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-gray-400 line-through">{apt.oldDeep}</span>
                        <div className="text-2xl font-black text-primary">{apt.deep}</div>
                      </div>
                      <div className="text-xs text-green-600 font-bold mt-1">Save 17%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Service Type Comparison */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">What's Included?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Clean */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">✨</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Basic Clean</h4>
                    <p className="text-sm text-gray-600">Regular maintenance cleaning</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "All rooms swept & mopped",
                    "Kitchen surfaces cleaned",
                    "Bathroom sanitization",
                    "Dusting furniture & surfaces",
                    "Trash removal",
                    "Light organizing",
                    "2-4 hours duration",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Deep Clean */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">🌟</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">Deep Clean</h4>
                      <p className="text-sm text-white/90">Thorough intensive cleaning</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Everything in Basic Clean",
                      "Inside cabinets & wardrobes",
                      "Appliance interior cleaning",
                      "Window & glass deep clean",
                      "Baseboards & door frames",
                      "Ceiling fans & light fixtures",
                      "Grout & tile scrubbing",
                      "Behind furniture cleaning",
                      "4-8 hours duration",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-300 mt-1 font-bold">✓</span>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Client Reviews</h2>
            <p className="text-base md:text-xl text-gray-600">Real reviews</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Homeowner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", text: "Neatfinity transformed my home! The attention to detail is incredible. They cleaned places I didn't even know needed cleaning. Highly recommend!" },
              { name: "Michael Chen", role: "Business Owner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", text: "Our office has never looked better. Professional, punctual, and thorough. The team is respectful and efficient. Worth every penny!" },
              { name: "Emily Rodriguez", role: "Property Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", text: "I use Neatfinity for all my move-out cleanings. They're reliable, affordable, and always deliver exceptional results. My go-to cleaning service!" },
            ].map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-xl">★★★★★</div>
                <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-primary via-blue-600 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Ready for a Spotless Space?</h2>
          <p className="text-base md:text-lg mb-6 md:mb-10 opacity-90 max-w-3xl mx-auto px-4">Book today and get 20% off!</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <a href="/contact" className="bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all hover:scale-110 shadow-2xl inline-block">
              Get Started Now
            </a>
            <a href="tel:+2347025964703" className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-primary transition-all hover:scale-110 inline-block">
              Call +234 702 596 4703
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Logo className="h-12 mb-4 [&_text]:fill-white [&_path]:fill-white [&_path]:stroke-white" />
              <p className="text-gray-400 leading-relaxed">Professional cleaning services that exceed expectations. Your satisfaction is our guarantee.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Residential Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition">Commercial Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition">Deep Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition">Move In/Out</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 <a href="tel:+2347025964703" className="hover:text-white transition">+234 702 596 4703</a></li>
                <li>📧 hello@neatfinity.ng</li>
                <li>📍 Lagos, Abuja & Port Harcourt</li>
                {/* <li className="flex gap-3 mt-4">
                  <a href="#" className="hover:text-primary transition">Facebook</a>
                  <a href="#" className="hover:text-primary transition">Instagram</a>
                  <a href="#" className="hover:text-primary transition">Twitter</a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Neatfinity. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
