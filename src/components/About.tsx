import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange" />,
      title: '100% Original',
      description: 'Garantizamos la autenticidad de cada fragancia. Solo trabajamos con perfumes originales.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange" />,
      title: 'Calidad Premium',
      description: 'Nuestros decants se preparan con herramientas profesionales para mantener la integridad del aroma.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange" />,
      title: 'Experiencia de Lujo',
      description: 'Presentación impecable y atención personalizada en cada pedido.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://odorato.cl/cdn/shop/files/Portada_Seduccion_Absoluta.png?v=1765860174"
                alt="About Luxe Decants"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange p-8 rounded-2xl hidden md:block">
              <p className="text-black font-serif text-4xl font-bold italic">1 Año</p>
              <p className="text-black/60 text-xs uppercase tracking-widest font-bold">De Experiencia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.3em] text-orange text-sm font-semibold mb-4 block">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Pasión por la <br />
              <span className="italic font-light">Alta Perfumería</span>
            </h2>
            <p className="text-white/60 mb-12 leading-relaxed">
              En Decants Temuco, creemos que el lujo debe ser accesible. Nuestra misión es permitirte explorar y disfrutar de las fragancias más exclusivas del mundo sin la necesidad de adquirir el frasco completo. 
              <br /><br />
              Cada decant es una invitación a descubrir una nueva faceta de tu personalidad a través del aroma. Seleccionamos cuidadosamente cada perfume de nuestro catálogo para ofrecerte solo lo mejor de la perfumería de nicho y de diseñador.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
