import React from 'react';
import { Search, Filter as FilterIcon } from 'lucide-react';

interface FiltersProps {
  search: string;
  onSearchChange: (val: string) => void;
  category: string;
  onCategoryChange: (val: string) => void;
  brand: string;
  onBrandChange: (val: string) => void;
  gender: string;
  onGenderChange: (val: string) => void;
  brands: string[];
}

export default function Filters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  brand,
  onBrandChange,
  gender,
  onGenderChange,
  brands
}: FiltersProps) {
  const categories = ['Todos', 'Niche', 'Designer', 'Exclusive', 'Popular'];
  const genders = ['Todos', 'Hombre', 'Mujer', 'Unisex'];

  return (
    <div className="mb-12 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Search */}
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-orange transition-colors" />
          <input
            type="text"
            placeholder="Buscar perfume o marca..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#141414] border border-white/5 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:border-orange/50 transition-all placeholder:text-white/20"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-6 py-4 rounded-xl text-xs uppercase tracking-widest font-bold whitespace-nowrap transition-all border ${
                category === cat
                  ? 'bg-orange text-black border-orange'
                  : 'bg-[#141414] text-white/40 border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2 text-white/40">
            <FilterIcon className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Género:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {genders.map((g) => (
              <button
                key={g}
                onClick={() => onGenderChange(g)}
                className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  gender === g
                    ? 'border-orange text-orange bg-orange/5'
                    : 'border-white/5 text-white/30 hover:border-white/20'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2 text-white/40">
            <FilterIcon className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Marca:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onBrandChange('Todas')}
              className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all border ${
                brand === 'Todas'
                  ? 'border-orange text-orange bg-orange/5'
                  : 'border-white/5 text-white/30 hover:border-white/20'
              }`}
            >
              Todas
            </button>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => onBrandChange(b)}
                className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  brand === b
                    ? 'border-orange text-orange bg-orange/5'
                    : 'border-white/5 text-white/30 hover:border-white/20'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
