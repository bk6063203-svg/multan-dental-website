import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { name: "Consultation", desc: "Expert dental checkup and guidance." },
    { name: "Scaling", desc: "Professional plaque and tartar removal." },
    { name: "Polishing", desc: "Teeth stain removal for a brighter shine." },
    { name: "General Filling", desc: "High-quality fillings for cavity repair." },
    { name: "GIC Filling", desc: "Durable Glass Ionomer Cement fillings." },
    { name: "Composite Filling", desc: "Aesthetic tooth-colored restorations." },
    { name: "Root Canal (RCT)", desc: "Precision treatment for infected teeth." },
    { name: "Dental Crowns", desc: "Protective caps for damaged teeth." },
    { name: "Zirconia Crowns", desc: "Premium, ultra-durable metal-free crowns." },
    { name: "Teeth Whitening", desc: "Professional brightening for your smile." },
    { name: "Simple Extraction", desc: "Safe and painless tooth removal." },
    { name: "Impaction Surgery", desc: "Surgical removal of impacted teeth." },
    { name: "Dentures", desc: "Complete or partial tooth replacement." },
    { name: "Orthodontic Braces", desc: "Corrective treatment for misaligned teeth." },
  ];

  return (
    <main className="py-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="text-emerald-700 font-bold mb-4 block hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">Our Dental Services</h1>
          <p className="text-slate-600 mt-4 text-lg">Click on any service to book your appointment.</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link 
              href="/#booking" 
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-500 transition-all cursor-pointer group"
            >
              <h2 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700">{s.name}</h2>
              <p className="text-slate-500 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}