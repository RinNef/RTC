import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState('');
  const [priceRange, setPriceRange] = useState([500000, 2500000]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch?.({ query, city, guests, priceRange });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur md:grid-cols-5"
    >
      <div className="md:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Bạn muốn đi đâu?</label>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Đà Lạt, Phú Quốc, Hội An..."
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Thành phố</label>
        <select
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="">Tất cả</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Đà Nẵng">Đà Nẵng</option>
          <option value="Đà Lạt">Đà Lạt</option>
          <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
          <option value="Phú Quốc">Phú Quốc</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Số khách</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          placeholder="2 khách"
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Ngân sách</label>
        <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3">
          <span className="text-xs text-slate-500">{(priceRange[0] / 1000).toLocaleString('vi-VN')}k</span>
          <input
            type="range"
            min="300000"
            max="3000000"
            step="100000"
            value={priceRange[1]}
            onChange={(event) => setPriceRange([priceRange[0], Number(event.target.value)])}
            className="flex-1 accent-primary"
          />
          <span className="text-xs text-slate-500">{(priceRange[1] / 1000).toLocaleString('vi-VN')}k</span>
        </div>
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
          Tìm kiếm ngay
        </button>
      </div>
    </form>
  );
}
