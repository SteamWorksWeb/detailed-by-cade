import React from 'react';
import { Star, Clock, MapPin, Check, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import InteractiveSlider from '../components/InteractiveSlider';
import GalleryLightbox from '../components/GalleryLightbox';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-400 selection:bg-blue-500/30">
      
      {/* 1. Header & Navigation */}
      <header className="absolute top-0 w-full z-50">
        {/* Top Bar (Secondary) */}
        <div className="bg-slate-950/80 border-b border-slate-800/60 backdrop-blur-sm py-2">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Left: Contact Info */}
            <div className="flex items-center space-x-6">
              <a href="tel:8648730530" className="flex items-center space-x-2 text-xs text-slate-400 hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                <span>(864) 873-0530</span>
              </a>
              <a href="mailto:cadeeavenson@gmail.com" className="flex items-center space-x-2 text-xs text-slate-400 hover:text-white transition-colors">
                <Mail className="w-3 h-3" />
                <span>cadeeavenson@gmail.com</span>
              </a>
            </div>
            {/* Right: Social Media (Hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {/* Instagram inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {/* Facebook inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {/* TikTok inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-transparent py-5">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Far left: Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo-v2 Light Trans.png" 
                alt="Detailed By Cade" 
                className="h-10 md:h-14 object-contain" 
              />
            </div>

            {/* Center: Very small, muted nav links */}
            <div className="flex items-center space-x-8 lg:space-x-12">
              <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400">
                <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
                <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
                <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
                <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
                <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
              </div>

              {/* Far right: CTA button */}
              <button className="bg-gradient-to-r from-blue-400 to-blue-200 text-slate-950 px-6 py-2.5 rounded-full text-sm font-extrabold tracking-tight shadow-[0_0_20px_-5px_rgba(96,165,250,0.4)] hover:shadow-[0_0_25px_-2px_rgba(96,165,250,0.6)] hover:scale-105 transition-all duration-300">
                Request Appointment
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        
        {/* Background Image & Heavy Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/truck1.jpg" 
            alt="Premium mobile detailing" 
            className="w-full h-full object-cover object-center"
          />
          {/* Heavy gradient originating from the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          {/* Subtle bottom fade to blend into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        {/* Left-aligned Content Container */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            
            {/* Super large headline */}
            <h1 className="font-extrabold tracking-tight text-white leading-[1.1] mb-8 flex flex-col items-start">
              <span className="text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl">A Flawless Finish</span>
              <span className="flex items-center mt-2 md:mt-4 text-[6.5vw] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="w-6 sm:w-10 md:w-16 h-1 sm:h-1.5 bg-slate-500 shrink-0 mr-3 sm:mr-4 md:mr-6"></span>
                <span className="whitespace-nowrap">
                  Delivered{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                    to Your Door.
                  </span>
                </span>
              </span>
            </h1>

            {/* Small, muted subtext */}
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl font-medium leading-relaxed">
              Premium mobile auto detailing delivered directly to your driveway. We restore and protect your vehicle's finish with obsessive attention to detail.
            </p>

            {/* Light-blue primary button */}
            <button className="bg-gradient-to-r from-blue-400 to-blue-200 text-slate-950 px-8 py-4 rounded-full text-base font-extrabold tracking-tight shadow-[0_0_30px_-5px_rgba(96,165,250,0.4)] hover:shadow-[0_0_40px_-5px_rgba(96,165,250,0.6)] hover:scale-105 transition-all duration-300 mb-16">
              Get an Estimate
            </button>

            {/* Bottom of hero: Service Areas */}
            <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-4 border-t border-slate-800/60 pt-8">
              {[
                'Seneca', 
                'Clemson', 
                'Anderson', 
                'Lake Keowee', 
                'Lake Hartwell', 
                'Surrounding Areas'
              ].map((area, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-white font-bold text-xs uppercase tracking-widest">{area}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      {/* Generous vertical padding (py-32 translates to exactly py-24 + some breathing room) */}
      <section className="py-24 bg-slate-950 relative z-10" id="services">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Headline block: Left-aligned, two lines */}
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Detailing engineered <br />
              for the obsessive owner.
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              We offer comprehensive packages designed to bring your vehicle back to its absolute peak condition, both inside and out.
            </p>
          </div>

          {/* Grid: 3 columns, 1 row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Card 1 */}
            <div className="group rounded-2xl overflow-hidden bg-[#0b0f19] border border-slate-800 hover:border-slate-700 transition-colors duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/car1-copy.jpg" 
                  alt="Car Detailing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">Car Detailing</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Comprehensive detailing packages tailored for sedans, coupes, and compacts, restoring the factory finish inside and out.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl overflow-hidden bg-[#0b0f19] border border-slate-800 hover:border-slate-700 transition-colors duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/truck1.jpg" 
                  alt="Truck Detailing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">Truck Detailing</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Heavy-duty cleaning and protection specifically designed for trucks, SUVs, and larger vehicles.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl overflow-hidden bg-[#0b0f19] border border-slate-800 hover:border-slate-700 transition-colors duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/boat 2.jpg" 
                  alt="Boat Detailing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">Boat Detailing</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Marine-grade detailing including oxidation removal, gelcoat restoration, and ceramic coatings for the water.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. We Come To You Section */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Text content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                We Come To You.
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 font-medium leading-relaxed max-w-lg">
                Premium auto detailing without the inconvenience. We bring our fully-equipped mobile setup directly to your driveway.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-semibold text-lg tracking-tight">Seneca &bull; Anderson &bull; Clemson</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-semibold text-lg tracking-tight">And all around Keowee and Hartwell</span>
                </div>
              </div>
            </div>

            {/* Right side: Image content */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/5">
              <img 
                src="/images/truck1.jpg" 
                alt="Mobile Detailing Truck" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Straightforward Pricing Table */}
      <section className="py-32 bg-[#0b0f19] relative">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Headline block */}
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Straightforward pricing,<br />premium results.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Select the perfect package for your vehicle's needs. Transparent pricing with absolutely no hidden fees or upcharges.
            </p>
          </div>

          {/* Grid: tight 3-column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-5xl">
            
            {/* Standard Package */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-slate-700 transition-colors duration-300">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Express</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-white tracking-tight">$149</span>
                  <span className="text-slate-500 font-medium text-sm uppercase tracking-widest">Starting</span>
                </div>
              </div>
              <ul className="space-y-4 mb-6 flex-1">
                {['Exterior wash & dry', 'Wheel & tire detail', 'Interior vacuum', 'Wipe down surfaces', 'Window cleaning'].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-300">
                    <Check className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-slate-500 mb-6 leading-tight">
                *This price is based on average sized vehicles and boats with normal/average required cleaning. Larger vehicles and excessive stains, dirt, grime will require additional charges. Please call for details.
              </p>
              <button className="w-full py-4 rounded-xl border border-slate-700 text-white font-bold tracking-tight hover:bg-slate-800 transition-colors">
                Book Express
              </button>
            </div>

            {/* Premium Package (Highlighted) */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-500/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-200 text-slate-950 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                Most Popular
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-2xl border-b border-slate-800">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Pro</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 tracking-tight">$329</span>
                  <span className="text-slate-500 font-medium text-sm uppercase tracking-widest">Starting</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-6 flex-1">
                  {['Everything in Express', 'Clay bar treatment', 'Premium sealant (6mo)', 'Deep stain extraction', 'Leather conditioning'].map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-200">
                      <Check className="w-5 h-5 text-blue-400 shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-500 mb-6 leading-tight">
                  *This price is based on average sized vehicles and boats with normal/average required cleaning. Larger vehicles and excessive stains, dirt, grime will require additional charges. Please call for details.
                </p>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-200 text-slate-950 font-extrabold tracking-tight shadow-[0_0_20px_-5px_rgba(96,165,250,0.5)] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.7)] transition-all hover:scale-[1.02]">
                  Book Pro
                </button>
              </div>
            </div>

            {/* Ultimate Package */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-slate-700 transition-colors duration-300">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Pro Max</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-white tracking-tight">$799</span>
                  <span className="text-slate-500 font-medium text-sm uppercase tracking-widest">Starting</span>
                </div>
              </div>
              <ul className="space-y-4 mb-6 flex-1">
                {['Everything in Pro', 'Single stage correction', '3-Year Ceramic Coating', 'Engine bay detail', 'Wheel face coating'].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-300">
                    <Check className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-slate-500 mb-6 leading-tight">
                *This price is based on average sized vehicles and boats with normal/average required cleaning. Larger vehicles and excessive stains, dirt, grime will require additional charges. Please call for details.
              </p>
              <button className="w-full py-4 rounded-xl border border-slate-700 text-white font-bold tracking-tight hover:bg-slate-800 transition-colors">
                Book Pro Max
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Interactive Before/After Feature */}
      <section className="py-32 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Headline block */}
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Drag to see the <br/> transformation.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our exhaustive detailing process brings out a clarity and depth in your paint that you didn't know was missing. See the difference for yourself.
            </p>
          </div>

          {/* Interactive Slider Component */}
          <InteractiveSlider 
            beforeImage="/images/dirty_b4e_truck.png" 
            afterImage="/images/b4e.jpg" 
          />
        </div>
      </section>

      {/* 7. Gallery Grid */}
      <section className="py-32 bg-[#0b0f19] relative z-10" id="gallery">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Headline block */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              A finish worth showing off.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              From daily drivers to luxury weekend cruisers, we treat every vehicle like it's our own.
            </p>
          </div>

          {/* Masonry-style Image Grid with Lightbox */}
          <GalleryLightbox />
        </div>
      </section>

      {/* 8. Process / Features */}
      <section className="py-32 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side: Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-500/5 order-2 md:order-1">
              {/* Note: I'll use truck 3.jpg since it's a dark truck with reflection, matching "dark SUV with door open" */}
              <img 
                src="/images/truck 3.jpg" 
                alt="Detailing Process" 
                className="w-full h-full min-h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right side: Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Detailing done the way it should be done.
              </h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                We believe in doing things right the first time. No shortcuts, no cheap products, just a pure obsession with perfection and protecting your investment.
              </p>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Detail-Obsessed</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Every crack, crevice, and seam is meticulously cleaned and protected.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Premium Products</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">We only use industry-leading chemicals and ceramic coatings.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Fully Insured</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Rest easy knowing your valuable vehicle is completely covered while in our care.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Expert Technique</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Years of experience ensure safe, swirl-free washing and perfect paint correction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact & Booking Form */}
      <section className="py-32 bg-[#0b0f19] relative z-10" id="contact">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left side: Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
                Let's get your <br />finish booked.
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Call or Text</p>
                    <p className="text-white font-semibold text-lg tracking-tight">(864) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-white font-semibold text-lg tracking-tight">booking@detailedbycade.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Service Area</p>
                    <p className="text-white font-semibold text-lg tracking-tight">Seneca, Clemson, Anderson</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <p className="text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-400 font-bold">Note:</span> We are completely mobile. We come to your home, office, or marina. All we need is access to water and power.
                </p>
              </div>
            </div>

            {/* Right side: The Form */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Needed</label>
                  {/* Note: using a custom styled select for consistency */}
                  <div className="relative">
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                      <option>Signature Reset ($329+)</option>
                      <option>Express Detail ($149+)</option>
                      <option>Ceramic Protection ($799+)</option>
                      <option>Other / Not Sure</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message / Vehicle Info</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your vehicle (Make, Model, Year) and any specific concerns..." 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-200 text-slate-950 px-8 py-4 rounded-xl text-lg font-extrabold tracking-tight shadow-[0_0_20px_-5px_rgba(96,165,250,0.4)] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.6)] transition-all duration-300 hover:scale-[1.02] mt-4"
                >
                  Request Appointment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Top area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Logo & Tagline */}
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/images/logo-v2 Light Trans.png" 
                alt="Detailed By Cade" 
                className="h-10 md:h-14 object-contain mb-6" 
              />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Premium mobile auto detailing engineered for the obsessive owner. Delivering showroom perfection directly to your driveway.
              </p>
            </div>

            {/* Links 1 */}
            <div>
              <h4 className="text-white font-bold tracking-tight mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Car Detailing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Truck Detailing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Boat Detailing</a></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h4 className="text-white font-bold tracking-tight mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
          </div>

          {/* Bottom area */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm font-medium">
              &copy; 2026 Detailed by Cade. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
