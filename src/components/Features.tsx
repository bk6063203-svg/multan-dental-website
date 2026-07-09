// src/components/Features.tsx
export default function Features() {
  const features = [
    { title: "Advanced Technology", desc: "State-of-the-art dental equipment." },
    { title: "Expert Care", desc: "Professional and compassionate treatment." },
    { title: "Modern Aesthetics", desc: "Personalized smile transformations." }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
            <p className="text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}