import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, MapPinIcon, StarIcon, UsersIcon } from '@heroicons/react/24/solid';
import { fetchPropertyById } from '../api/mockApi.js';
import PropertyGrid from '../components/PropertyGrid.jsx';
import { fetchProperties } from '../api/mockApi.js';

export default function PropertyDetail() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetchPropertyById(propertyId).then(setProperty);
    fetchProperties({}).then((items) => setRelated(items.filter((item) => item.id !== propertyId).slice(0, 3)));
  }, [propertyId]);

  if (!property) {
    return (
      <div className="section-padding">
        <div className="container-width text-center text-slate-500">Đang tải thông tin homestay...</div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-slate-50">
      <div className="container-width space-y-12">
        <div className="flex flex-col gap-4">
          <Link to="/listings" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeftIcon className="h-4 w-4" />
            Quay lại danh sách
          </Link>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Homestay</p>
            <h1 className="text-4xl font-semibold text-slate-900">{property.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-primary" />
                {property.region}
              </span>
              <span className="inline-flex items-center gap-2 text-amber-500">
                <StarIcon className="h-5 w-5" />
                {property.rating}
                <span className="text-xs text-slate-400">({property.reviews} đánh giá)</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-primary" />
                {property.guests} khách
              </span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
          <div className="overflow-hidden rounded-3xl">
            <img src={property.cover} alt={property.name} className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-4">
            {property.gallery.map((image) => (
              <img key={image} src={image} alt={`${property.name} view`} className="h-40 w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">Về homestay</h2>
              <p className="text-sm leading-relaxed text-slate-600">{property.description}</p>
            </section>
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Điểm nhấn nổi bật</h3>
              <ul className="grid gap-3 text-sm text-slate-600">
                {property.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl bg-slate-100 px-4 py-3">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Tiện nghi</h3>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                {property.amenities.map((amenity) => (
                  <span key={amenity} className="rounded-full bg-slate-100 px-4 py-2">
                    {amenity}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <aside className="space-y-6 rounded-3xl bg-slate-50 p-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Đặt phòng</p>
              <p className="text-3xl font-semibold text-primary">
                {(property.price / 1000).toLocaleString('vi-VN')}k{' '}
                <span className="text-base font-normal text-slate-500">/ đêm</span>
              </p>
              <p className="text-sm text-slate-500">Miễn phí huỷ đến 24h trước check-in</p>
              <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
                Đặt homestay ngay
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <h3 className="text-base font-semibold text-slate-900">Thông tin thêm</h3>
              <ul className="space-y-2">
                <li>Check-in: 14:00 • Check-out: 12:00</li>
                <li>Phù hợp tổ chức sinh nhật, team building nhỏ</li>
                <li>Hỗ trợ đặt xe riêng, tour địa phương</li>
              </ul>
            </div>
          </aside>
        </div>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Homestay tương tự bạn có thể thích</h2>
            <Link to="/listings" className="text-sm font-semibold text-primary">
              Xem tất cả →
            </Link>
          </div>
          <PropertyGrid properties={related} />
        </section>
      </div>
    </div>
  );
}
