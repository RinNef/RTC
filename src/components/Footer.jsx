import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-width section-padding grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-slate-900 font-bold">
              D
            </span>
            DayLaDau
          </Link>
          <p className="text-sm text-white/70">
            Nền tảng giúp bạn tìm kiếm homestay độc đáo, kết nối với host bản địa và khám phá trải nghiệm địa phương một cách
            chân thực.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-base font-semibold text-white">Điểm đến nổi bật</h3>
          <ul className="space-y-2 text-white/70">
            <li>Sa Pa</li>
            <li>Đà Lạt</li>
            <li>Phú Quốc</li>
            <li>Hội An</li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-base font-semibold text-white">Dịch vụ</h3>
          <ul className="space-y-2 text-white/70">
            <li>Gói trải nghiệm địa phương</li>
            <li>Workation dài ngày</li>
            <li>Dịch vụ tổ chức sự kiện</li>
            <li>Hỗ trợ host mới</li>
          </ul>
        </div>
        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold text-white">Liên hệ</h3>
          <p className="text-white/70">
            Hotline: <a href="tel:+84987654321" className="text-secondary">0987 654 321</a>
          </p>
          <p className="text-white/70">Email: support@dayladau.com</p>
          <p className="text-white/70">Địa chỉ: 38 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} DayLaDau. All rights reserved.
      </div>
    </footer>
  );
}
