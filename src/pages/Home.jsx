function HomePage() {
  return (
    <div className="font-sans leading-relaxed text-accent-800">
      {/* Hero Section */}
      <section className="flex items-center min-h-[80vh] p-8 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight animate-fade-in-up">
            Transform Your Home with Expert Renovations
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up">
            Professional home renovation services that bring your vision to life. 
            From kitchen remodels to complete home makeovers, we deliver quality craftsmanship you can trust.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in-up">
            <button className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-white hover:text-primary-500">
              View Our Work
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-float">
            <img 
              src="/logo-white.svg" 
              alt="Renovation Pro Logo" 
              className="w-80 h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-accent-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold mb-12 text-primary-900 animate-fade-in-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Complete Home Renovations</h3>
              <p className="text-accent-700">Full-scale home transformations from concept to completion</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Kitchen Remodeling</h3>
              <p className="text-accent-700">Modern kitchen designs that combine functionality with style</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="text-5xl mb-4">🛁</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Bathroom Renovations</h3>
              <p className="text-accent-700">Luxury bathroom upgrades and complete makeovers</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Home Additions</h3>
              <p className="text-accent-700">Expand your living space with seamless home additions</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Interior Design</h3>
              <p className="text-accent-700">Professional interior design services for every room</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Handyman Services</h3>
              <p className="text-accent-700">Quick fixes and small improvements for your home</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6 text-primary-900 animate-fade-in-up">
                Why Choose Us?
              </h2>
              <p className="text-lg mb-8 text-accent-700 animate-fade-in-up">
                With over 15 years of experience in home renovations, we pride ourselves on 
                delivering exceptional quality and customer service. Our team of skilled craftsmen 
                and designers work closely with you to ensure your renovation project exceeds expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <span className="text-primary-500 font-bold text-xl">✓</span>
                  <span className="text-accent-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-500 font-bold text-xl">✓</span>
                  <span className="text-accent-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-500 font-bold text-xl">✓</span>
                  <span className="text-accent-700">Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-500 font-bold text-xl">✓</span>
                  <span className="text-accent-700">Free Consultations</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <div className="text-center p-6 bg-primary-500 text-white rounded-xl transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-primary-500 text-white rounded-xl transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-primary-500 text-white rounded-xl transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-accent-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-12 opacity-90 animate-fade-in-up">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex justify-center gap-12 mb-12 flex-wrap animate-fade-in-up">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📞</span>
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                <p className="opacity-90">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">✉️</span>
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                <p className="opacity-90">info@renovationpro.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">📍</span>
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                <p className="opacity-90">123 Main Street, Your City, ST 12345</p>
              </div>
            </div>
          </div>
          <button className="bg-primary-500 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105 animate-fade-in-up">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;