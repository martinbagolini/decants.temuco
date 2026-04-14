import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Minus, Plus, ShoppingBag, Tag } from 'lucide-react';
import { CartItem } from '../data/products';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemove: (productId: string, size: string) => void;
  onCheckout: () => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[101] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-orange" />
                <h2 className="text-xl font-serif">Tu Carrito</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-16 h-16 mb-4" />
                  <p className="text-lg font-serif italic">Tu carrito está vacío</p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-orange uppercase tracking-widest text-xs border-b border-orange pb-1"
                  >
                    Volver al catálogo
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}`} className="flex gap-4 group">
                      <div className="w-20 h-24 rounded-lg overflow-hidden border border-white/5 bg-white/5 flex items-center justify-center">
                        {item.imageURL ? (
                          <img
                            src={item.imageURL}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <Tag className="w-8 h-8 text-orange/40" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-serif">{item.name}</h4>
                          <button
                            onClick={() => onRemove(item.productId, item.size)}
                            className="text-white/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">
                          {item.brand} • {item.size}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.productId, item.size, -1)}
                              className="p-1 hover:bg-white/5 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-bold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.productId, item.size, 1)}
                              className="p-1 hover:bg-white/5 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-serif text-orange">${(item.price * item.quantity).toLocaleString('es-CL')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#111]">
                <div className="flex justify-between mb-6">
                  <span className="uppercase tracking-widest text-xs text-white/40">Total Estimado</span>
                  <span className="text-2xl font-serif text-orange">${total.toLocaleString('es-CL')}</span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full orange-gradient text-black py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>Finalizar por WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-white/30 mt-4 uppercase tracking-widest">
                  Serás redirigido para completar tu pedido
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
