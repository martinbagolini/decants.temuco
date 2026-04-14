import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Filters from './components/Filters';
import Promotions from './components/Promotions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PRODUCTS, PROMOTIONS, Product, Promotion, CartItem, WHATSAPP_NUMBER } from './data/products';
import { motion } from 'motion/react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Filter states
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [brand, setBrand] = useState('Todas');
  const [gender, setGender] = useState('Todos');

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('decants_temuco_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('decants_temuco_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const brands = useMemo(() => {
    return Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                            p.brand.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'Todos' || p.category === category;
      const matchesBrand = brand === 'Todas' || p.brand === brand;
      const matchesGender = gender === 'Todos' || p.gender === gender;
      return matchesSearch && matchesCategory && matchesBrand && matchesGender;
    });
  }, [search, category, brand, gender]);

  const featuredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.featured);
  }, []);

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.productId === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, {
        productId: product.id,
        name: product.name,
        brand: product.brand,
        size,
        price: product.prices[size],
        quantity: 1,
        imageURL: product.imageURL
      }];
    });
    setIsCartOpen(true);
  };

  const handleAddPromoToCart = (promo: Promotion, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === promo.id && item.size === `Pack ${size}`);
      if (existing) {
        return prev.map(item => 
          item.productId === promo.id && item.size === `Pack ${size}` 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, {
        productId: promo.id,
        name: promo.name,
        brand: 'Promoción',
        size: `Pack ${size}`,
        price: promo.prices[size],
        quantity: 1,
        imageURL: '' // No image for promotions
      }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.productId === productId && item.size === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.productId === productId && item.size === size)));
  };

  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let message = `*Nuevo Pedido - Decants Temuco*\n\n`;
    message += `Hola! Me gustaría realizar el siguiente pedido:\n\n`;
    
    cartItems.forEach(item => {
      message += `• *${item.name}* (${item.brand}) - ${item.size}\n`;
      message += `  Cantidad: ${item.quantity}\n`;
      message += `  Subtotal: $${(item.price * item.quantity).toLocaleString('es-CL')}\n\n`;
    });
    
    message += `*Total a pagar: $${total.toLocaleString('es-CL')}*\n\n`;
    message += `¿Cómo coordinamos el pago y envío?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Hero />

      {/* Featured Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-orange text-sm font-semibold mb-4 block">Los Más Vendidos</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Favoritos de <span className="italic font-light">Nuestros Clientes</span></h2>
            <div className="w-24 h-[1px] bg-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="uppercase tracking-[0.3em] text-orange text-sm font-semibold mb-4 block">Nuestro Catálogo</span>
              <h2 className="text-4xl md:text-5xl font-serif">Explora la <span className="italic font-light">Colección</span></h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              Filtra por marca, categoría o género para encontrar tu próxima fragancia firma.
            </p>
          </div>

          <Filters 
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            brand={brand}
            onBrandChange={setBrand}
            gender={gender}
            onGenderChange={setGender}
            brands={brands}
          />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-white/40 font-serif italic text-xl">No se encontraron perfumes que coincidan con tu búsqueda.</p>
              <button 
                onClick={() => { setSearch(''); setCategory('Todos'); setBrand('Todas'); setGender('Todos'); }}
                className="mt-6 text-orange uppercase tracking-widest text-xs border-b border-orange pb-1"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <Promotions 
        promotions={PROMOTIONS} 
        onAddToCart={handleAddPromoToCart} 
      />

      <About />
      <Contact />
      <Footer />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
