// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-emerald-800 text-white py-6 px-8 shadow-xl sticky top-0 z-50 border-b border-emerald-700">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        
        {/* Stylish Brand Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-800 font-black text-xl">
            M
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-widest uppercase">Multan Dental</span>
            <span className="text-[10px] font-light tracking-[0.25em] text-emerald-200 uppercase">& Aesthetics</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 font-medium text-sm tracking-wide uppercase">
          <a href="/" className="hover:text-emerald-200 transition-colors duration-300">Home</a>
          <a href="/services" className="hover:text-emerald-200 transition-colors duration-300">Services</a>
          <a href="/#gallery" className="hover:text-emerald-200 transition-colors duration-300">Gallery</a>
          <a href="/#booking" className="hover:text-emerald-200 transition-colors duration-300">Contact</a>
        </div>

        {/* CTA Button */}
        <a 
          href="/#booking" 
          className="hidden md:block bg-transparent border-2 border-white px-8 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-emerald-800 transition-all duration-300"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
}