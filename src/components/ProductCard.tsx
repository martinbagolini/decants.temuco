import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const sizes = Object.keys(product.prices);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const currentPrice = product.prices[selectedSize];
  const sizeValue = parseInt(selectedSize.replace('ml', ''));
  const pricePerMl = Math.round(currentPrice / sizeValue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:border-orange/30 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
            {product.brand}
          </span>
          <span className="bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-zinc-400">
            {product.gender}
          </span>
          {product.featured && (
            <span className="orange-gradient text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
              Más Vendido
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-serif mb-1 group-hover:text-orange transition-colors">{product.name}</h3>
          <p className="text-xs text-white/40 uppercase tracking-wider">{product.type} • {product.category}</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Seleccionar Tamaño</p>
            <p className="text-[10px] uppercase tracking-widest text-orange font-bold italic">
              ${pricePerMl} / ML
            </p>
          </div>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-2 text-xs rounded-lg border transition-all ${
                  selectedSize === size
                    ? 'border-orange bg-orange/10 text-orange'
                    : 'border-white/10 hover:border-white/30 text-white/60'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40">Precio</p>
            <p className="text-2xl font-serif text-orange">${currentPrice.toLocaleString('es-CL')}</p>
          </div>
          <button
            onClick={() => onAddToCart(product, selectedSize)}
            className="orange-gradient p-4 rounded-xl text-black hover:scale-105 transition-transform active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
