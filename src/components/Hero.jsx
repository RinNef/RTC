import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80"
          alt="Homestay view"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-primary/90" />
      </div>
      <div className="relative container-width section-padding flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-sm text-secondary font-semibold">
            Thuê homestay tại Việt Nam
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-balance">
            DayLaDau.com - trải nghiệm địa phương chân thực, homestay độc bản cho mọi hành trình
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Khám phá hơn 500 homestay được tuyển chọn kỹ lưỡng tại 35 tỉnh thành. Đặt homestay trong vài phút,
            nhận hỗ trợ từ host bản địa và tận hưởng những hoạt động đặc sắc.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Xác thực host nhiều bước
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Miễn phí huỷ đến 24h
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Tư vấn trải nghiệm địa phương
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/listings"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-secondary/30 transition hover:-translate-y-0.5"
            >
              Khám phá homestay nổi bật
            </Link>
            <Link to="/about" className="text-sm font-semibold text-white underline-offset-4 hover:underline">
              Tìm hiểu DayLaDau →
            </Link>
          </div>
        </div>
        <div className="max-w-3xl">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}
