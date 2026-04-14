import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tag, Plus } from 'lucide-react';
import { Promotion } from '../data/products';

interface PromotionsProps {
  promotions: Promotion[];
  onAddToCart: (promo: Promotion, size: string) => void;
}

interface PromotionCardProps {
  promo: Promotion;
  onAddToCart: (promo: Promotion, size: string) => void;
  key?: string | number;
}

function PromotionCard({ promo, onAddToCart }: PromotionCardProps) {
  const sizes = Object.keys(promo.prices);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:border-orange/30 transition-all duration-500 flex flex-col"
    >
      <div className="p-8 flex-1 flex flex-col relative">
        <div className="absolute top-8 right-8">
          <span className="bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-orange flex items-center gap-2">
            <Tag className="w-3 h-3" />
            Promo Pack
          </span>
        </div>

        <div className="mb-6 pr-24">
          <h3 className="text-2xl font-serif mb-2 group-hover:text-orange transition-colors">{promo.name}</h3>
          <p className="text-sm text-white/40 leading-relaxed mb-4">{promo.description}</p>
          
          <div className="space-y-2 mb-6">
            <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Incluye:</p>
            <ul className="space-y-1">
              {promo.items.map((item, idx) => (
                <li key={idx} className="text-xs text-white/40 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-orange/40"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  selectedSize === size
                    ? 'border-orange bg-orange/10 text-orange'
                    : 'border-white/5 text-white/40 hover:border-white/20'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40">Precio Especial</p>
            <p className="text-3xl font-serif text-orange">${promo.prices[selectedSize].toLocaleString('es-CL')}</p>
          </div>
          <button
            onClick={() => onAddToCart(promo, selectedSize)}
            className="orange-gradient p-4 rounded-xl text-black hover:scale-105 transition-transform active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Promotions({ promotions, onAddToCart }: PromotionsProps) {
  return (
    <section id="promotions" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-orange text-sm font-semibold mb-4 block">Ofertas Especiales</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Nuestras <span className="italic font-light">Promociones</span></h2>
          <div className="w-24 h-[1px] bg-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} promo={promo} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
