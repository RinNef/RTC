import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section-padding bg-slate-50">
      <div className="container-width flex flex-col items-center gap-6 text-center">
        <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">404</span>
        <h1 className="text-4xl font-semibold text-slate-900">Trang bạn tìm không tồn tại</h1>
        <p className="max-w-xl text-sm text-slate-500">
          Có thể link đã hết hạn hoặc nội dung đã được di chuyển. Quay lại trang chủ để tiếp tục khám phá những homestay thú vị.
        </p>
        <Link
          to="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
