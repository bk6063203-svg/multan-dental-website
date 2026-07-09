// src/components/Doctor.tsx
import Image from "next/image";

export default function Doctor() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text/Bio - Slightly wider for better reading */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">Dr. Alizay Gull Khan</h2>
            <p className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Lead Dental Surgeon & Aesthetic Specialist</p>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              With a distinguished academic background, Dr. Alizay brings precision and artistic excellence to dental care. 
              A graduate of Liaquat College of Medicine & Dentistry, she has consistently demonstrated clinical excellence, 
              earning top positions during her professional BDS examinations.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Key Qualifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "BDS (Bachelor of Dental Surgery)",
                  "1st & 2nd Position Holder (BDS Exams)",
                  "Extensive Clinical Training (Nishtar Institute)",
                  "Aesthetic Dentistry Certified",
                  "Member, Pakistan Dental Association",
                  "5+ Years Clinical Experience"
                ].map((qual, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                    <span className="text-teal-600 font-bold mt-0.5">✓</span>
                    <p className="text-slate-700 font-medium text-sm">{qual}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Integrated Profile Picture & Degrees */}
          <div className="lg:col-span-5 relative">
            {/* Rotated decorative frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl rotate-3 scale-105" />
            
            {/* Main display card */}
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 space-y-6">
              {/* Studio Quality Portrait from doctor.png */}
              <div className="w-full h-96 relative rounded-2xl overflow-hidden border-4 border-white shadow-inner group">
                <Image 
                    src="/doctor.png" 
                    alt="Dr. Alizay Gull Khan" 
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Nameplate & Role */}
              <div className="text-center border-t border-slate-100 pt-4">
                <h4 className="text-2xl font-bold text-slate-900">Dr. Alizay Gull Khan</h4>
                <p className="text-teal-600 font-medium">BDS, C-Aesthetic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}