import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://mail.google.com/mail/u/0?ui=2&ik=7d08ca6186&attid=0.1&permmsgid=msg-f:1860502239624849745&th=19d1d4edf8a86951&view=fimg&fur=ip&permmsgid=msg-f:1860502239624849745&sz=s0-l75-ft&attbid=ANGjdJ9ILVKQfIJvRGBb5EzQ7250z_Hr0SGP1R6M9CZY5gI8divz7DLJK1RgbvFyz0r1t-dCKStb_7UptGxckSD2I1gQDq_rEL5u8k86qCpJD8DKGOZRFsFKW-2RxMA&disp=emb&realattid=ii_19d1d4ea548bad03cf11&zw"
          alt="Luxury Perfume"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
            Descubre tu Aroma <br />
            <span className="italic font-light">Sin Límites</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Accede a los perfumes más lujosos del mundo en presentaciones de 3ml, 5ml y 10ml. 
            Calidad original garantizada en cada gota.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#catalog"
              className="orange-gradient text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center group transition-transform hover:scale-105"
            >
              Explorar Catálogo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="border border-white/20 hover:border-orange px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-white/5"
            >
              Conoce Más
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
