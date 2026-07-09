// src/components/Footer.tsx
import { SITE_CONFIG } from "@/config";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-white text-lg font-medium">{SITE_CONFIG.name}</h3>
          <p className="text-sm mt-2">{SITE_CONFIG.address}</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">Contact: {SITE_CONFIG.whatsappNumber}</p>
          <p className="text-sm">{SITE_CONFIG.email}</p>
        </div>
      </div>
    </footer>
  );
}