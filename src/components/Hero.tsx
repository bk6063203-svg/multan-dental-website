// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 text-teal-600 border border-teal-500/20 font-medium text-sm">
            #1 Dental Clinic in Multan
          </span>
          
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            <span className="text-slate-900">Your Smile,</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Our Passion
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Professional aesthetic care designed for your unique smile. 
            Experience precision, comfort, and perfection in every procedure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#booking" 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              Book Consultation
            </a>
            <a 
              href="#gallery" 
              className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-all"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right Side: Smile Visual - SIZE INCREASED HERE */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          {/* max-w-md aur lg:max-w-lg se box ka size bara ho gaya */}
          <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-emerald-100 rounded-[3rem] rotate-6 opacity-50" />
              <div className="relative w-full flex items-center justify-center p-8">
                <Image 
                  src="/smile.png" 
                  alt="Dental Care" 
                  width={600} 
                  height={600} 
                  className="drop-shadow-2xl object-contain w-full h-auto" 
                  priority 
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}