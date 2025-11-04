import { useEffect, useMemo, useState } from 'react';
import PropertyGrid from '../components/PropertyGrid.jsx';
import { fetchProperties } from '../api/mockApi.js';

const cityFilters = ['', 'Hà Nội', 'Đà Nẵng', 'Đà Lạt', 'TP. Hồ Chí Minh', 'Phú Quốc'];
const guestFilters = ['', '2', '4', '6', '8', '10'];
const priceFilters = [
  { label: 'Tất cả', value: [0, 5000000] },
  { label: 'Dưới 1 triệu', value: [0, 1000000] },
  { label: '1 - 2 triệu', value: [1000000, 2000000] },
  { label: 'Trên 2 triệu', value: [2000000, 5000000] },
];

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  useEffect(() => {
    fetchProperties({}).then(setProperties);
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch = search
        ? property.name.toLowerCase().includes(search.toLowerCase()) ||
          property.city.toLowerCase().includes(search.toLowerCase()) ||
          property.region.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesCity = city ? property.city === city : true;
      const matchesGuests = guests ? property.guests >= Number(guests) : true;
      const matchesPrice =
        property.price >= priceRange[0] && property.price <= priceRange[1];

      return matchesSearch && matchesCity && matchesGuests && matchesPrice;
    });
  }, [properties, search, city, guests, priceRange]);

  return (
    <div className="section-padding bg-slate-50">
      <div className="container-width flex flex-col gap-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Danh sách homestay</p>
            <h1 className="text-3xl font-semibold text-slate-900">Chọn homestay phù hợp với hành trình của bạn</h1>
            <p className="mt-3 text-sm text-slate-500">
              Bộ lọc linh hoạt giúp bạn dễ dàng tìm homestay theo địa điểm, số khách và ngân sách.
            </p>
          </div>
        </header>
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-card lg:grid-cols-[280px,1fr]">
          <aside className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Tìm kiếm</label>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Tên homestay, địa điểm, hoạt động..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Thành phố</label>
              <select
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {cityFilters.map((option) => (
                  <option key={option || 'all'} value={option}>
                    {option || 'Tất cả'}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Số khách</label>
              <select
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {guestFilters.map((option) => (
                  <option key={option || 'all'} value={option}>
                    {option ? `Từ ${option} khách` : 'Tất cả'}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Ngân sách</label>
              <div className="space-y-2">
                {priceFilters.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setPriceRange(option.value)}
                    className={`w-full rounded-xl border px-4 py-2 text-left text-sm transition ${
                      priceRange[0] === option.value[0] && priceRange[1] === option.value[1]
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-slate-200 text-slate-600 hover:border-primary/60'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          <main className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Tìm thấy <span className="font-semibold text-primary">{filteredProperties.length}</span> homestay phù hợp
              </p>
            </div>
            <PropertyGrid properties={filteredProperties} />
          </main>
        </div>
      </div>
    </div>
  );
}
