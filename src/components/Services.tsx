// src/components/Services.tsx
const services = [
  { title: "Dental Implants", desc: "Precision and comfort for a perfect smile." },
  { title: "Teeth Whitening", desc: "Professional aesthetic whitening treatments." },
  { title: "Orthodontics", desc: "Correcting alignment with modern techniques." },
  { title: "Aesthetic Procedures", desc: "Tailored treatments for facial perfection." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-light text-center mb-16 text-slate-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-teal-800 transition-all">
              <h3 className="text-xl font-medium mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}