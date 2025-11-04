import { useEffect, useState } from 'react';
import { fetchDestinations } from '../api/mockApi.js';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations().then(setDestinations);
  }, []);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-width flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Khám phá điểm đến được yêu thích</h2>
          <p className="mt-3 text-slate-500">
            Chọn lựa điểm đến theo vibe du lịch của bạn: từ núi rừng yên bình đến biển đảo sôi động.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-card"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="text-sm text-slate-200">{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
