import { Link } from 'react-router-dom';
import { StarIcon, UsersIcon } from '@heroicons/react/24/solid';

export default function PropertyCard({ property }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition hover:-translate-y-1">
      <Link to={`/listings/${property.id}`} className="relative block h-56 overflow-hidden">
        <img src={property.cover} alt={property.name} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-primary">
          {property.city}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            <Link to={`/listings/${property.id}`}>{property.name}</Link>
          </h3>
          <p className="text-sm text-slate-500">{property.region}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-primary">
            {(property.price / 1000).toLocaleString('vi-VN')}k <span className="font-normal text-slate-500">/ đêm</span>
          </span>
          <span className="flex items-center gap-1 text-amber-500">
            <StarIcon className="h-5 w-5" />
            {property.rating}
            <span className="text-xs text-slate-400">({property.reviews})</span>
          </span>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
            <UsersIcon className="h-4 w-4" />
            {property.guests} khách
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
            {property.bedrooms} phòng ngủ
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
            {property.area} m²
          </span>
        </div>
      </div>
    </article>
  );
}
