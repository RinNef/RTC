import { useEffect, useState } from 'react';
import Hero from '../components/Hero.jsx';
import StatsBanner from '../components/StatsBanner.jsx';
import Destinations from '../components/Destinations.jsx';
import ExperienceShowcase from '../components/ExperienceShowcase.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Highlights from '../components/Highlights.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Articles from '../components/Articles.jsx';
import PropertyGrid from '../components/PropertyGrid.jsx';
import { fetchProperties } from '../api/mockApi.js';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties({ priceRange: [0, 4000000] }).then((result) => setProperties(result.slice(0, 3)));
  }, []);

  const handleSearch = (filters) => {
    fetchProperties(filters).then(setProperties);
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero onSearch={handleSearch} />
      <section className="container-width flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Homestay nổi bật trong tháng</h2>
            <p className="mt-2 text-slate-500">
              Tuyển chọn theo đánh giá khách hàng và chất lượng dịch vụ của host.
            </p>
          </div>
        </div>
        <PropertyGrid properties={properties} emptyLabel="Hiện chưa có homestay phù hợp với tìm kiếm của bạn." />
      </section>
      <StatsBanner />
      <Destinations />
      <ExperienceShowcase />
      <Testimonials />
      <Highlights />
      <Articles />
      <Newsletter />
    </div>
  );
}
