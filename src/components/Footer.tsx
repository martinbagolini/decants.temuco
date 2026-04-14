import React from 'react';
import { Instagram } from 'lucide-react';

const TikTok = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-serif font-bold tracking-tighter">
              DECANTS<span className="orange-text-gradient">TEMUCO</span>
            </a>
            <p className="text-white/30 text-[10px] mt-2 uppercase tracking-[0.3em]">Perfumería de Lujo en Decants</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
              <a href="#home" className="hover:text-orange transition-colors">Inicio</a>
              <a href="#promotions" className="hover:text-orange transition-colors">Promociones</a>
              <a href="#catalog" className="hover:text-orange transition-colors">Catálogo</a>
              <a href="#about" className="hover:text-orange transition-colors">Nosotros</a>
              <a href="#contact" className="hover:text-orange transition-colors">Contacto</a>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/tco_decants?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-orange hover:border-orange transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@tco_decants?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-orange hover:border-orange transition-all duration-300"
                title="TikTok"
              >
                <TikTok className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              © 2026 Decants Temuco. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
