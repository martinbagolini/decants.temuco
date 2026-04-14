import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-orange text-sm font-semibold mb-4 block">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Estamos para <span className="italic font-light">Asesorarte</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">¿Tienes dudas sobre alguna fragancia? Escríbenos y te ayudaremos a encontrar tu aroma ideal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#141414] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-orange" />
            </div>
            <h4 className="text-xl font-serif mb-4">WhatsApp</h4>
            <p className="text-white/40 mb-8">+56 9 5193 6433</p>
            <a
              href="https://wa.me/56951936433"
              target="_blank"
              rel="noreferrer"
              className="text-orange uppercase tracking-widest text-xs font-bold border-b border-orange pb-1 hover:text-orange-light transition-colors"
            >
              Enviar Mensaje
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#141414] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-orange" />
            </div>
            <h4 className="text-xl font-serif mb-4">Email</h4>
            <p className="text-white/40 mb-8">martinbagolinio@gmail.com</p>
            <a
              href="mailto:martinbagolinio@gmail.com"
              className="text-orange uppercase tracking-widest text-xs font-bold border-b border-orange pb-1 hover:text-orange-light transition-colors"
            >
              Escribir Email
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#141414] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-orange" />
            </div>
            <h4 className="text-xl font-serif mb-4">Ubicación</h4>
            <p className="text-white/40 mb-8">Temuco, Chile</p>
            <p className="text-orange uppercase tracking-widest text-xs font-bold">Envíos a todo el país</p>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-6">Síguenos en Redes</p>
          <div className="flex space-x-8">
            <a 
              href="https://www.instagram.com/tco_decants?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/60 hover:text-orange transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.tiktok.com/@tco_decants?is_from_webapp=1&sender_device=pc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-orange transition-colors"
            >
              <TikTok className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
