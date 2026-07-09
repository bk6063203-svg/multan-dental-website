"use client";

import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", problem: "" });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Dr. Alizay, I would like to book an appointment. 
    
    *Name:* ${formData.name}
    *Phone:* ${formData.phone}
    *Requirement:* ${formData.problem}`;
    
    const url = `https://wa.me/923117594193?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-slate-900">Get in Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Booking Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Consultation</h3>
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                <input 
                  required 
                  className="w-full p-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-600 text-slate-900 outline-none transition-all" 
                  placeholder="Enter your name" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                <input 
                  required 
                  className="w-full p-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-600 text-slate-900 outline-none transition-all" 
                  placeholder="03xx-xxxxxxx" 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Your Problem / Service Needed</label>
                <textarea 
                  required 
                  className="w-full p-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-600 text-slate-900 outline-none transition-all h-24" 
                  placeholder="Briefly describe your dental issue..." 
                  onChange={(e) => setFormData({...formData, problem: e.target.value})} 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-emerald-800 text-white rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>

          {/* Right: Contact & Map */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Clinic Info</h3>
              <div className="space-y-3">
                <p className="text-slate-600 font-medium">📍 6FQM+VQR, Shalimar Colony, Multan</p>
                <p className="text-emerald-800 font-bold text-lg">📞 0311-7594193</p>
                {/* Maps Link */}
                <a 
                  href="https://maps.app.goo.gl/9P4kCnHjC7WmDh4s7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-emerald-700 font-semibold underline hover:text-emerald-900"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-grow w-full h-[250px] lg:h-auto rounded-3xl overflow-hidden shadow-sm border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.579169601053!2d71.4647367755353!3d29.9961633748956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33d02633010b%3A0xe72648589f66089e!2sMultan%20dental%20%26%20Aesthetics%20by%20Dr%20Alizay%20Khan!5e0!3m2!1sen!2s!4v1720444390000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}