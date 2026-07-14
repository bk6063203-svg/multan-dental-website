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
          // Yahan border-slate-200 aur shadow-sm add kiya hai
          <div key={i} className="p-8 border border-slate-200 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}