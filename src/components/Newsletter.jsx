import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="container-width overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary px-8 py-14 text-white">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">BẢN TIN HOMESTAY</p>
            <h2 className="text-3xl font-semibold leading-tight text-balance">
              Nhận gợi ý homestay bí mật và ưu đãi chỉ dành cho thành viên DayLaDau Insider
            </h2>
            <p className="text-sm text-white/80">
              Mỗi tuần một email, tổng hợp các homestay mới lên sóng, trải nghiệm độc quyền và mã giảm giá.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row md:items-center">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Nhập email của bạn"
              className="h-12 flex-1 rounded-full border border-white/40 bg-white/15 px-6 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Đăng ký
            </button>
            {submitted && (
              <p className="text-xs font-medium text-white/80 md:ml-4">
                Cảm ơn bạn! Chúng tôi sẽ gửi ưu đãi sớm nhất.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
