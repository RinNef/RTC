import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding bg-slate-50">
      <div className="container-width grid gap-10 lg:grid-cols-[1fr,1.1fr]">
        <section className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Liên hệ</p>
          <h1 className="text-4xl font-semibold text-slate-900">Hãy kể cho DayLaDau về chuyến đi của bạn</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Đội ngũ tư vấn sẽ gợi ý homestay phù hợp, thiết kế lịch trình và giới thiệu các hoạt động địa phương độc đáo dành riêng
            cho bạn.
          </p>
          <div className="rounded-3xl bg-white p-6 shadow-card">
            <h2 className="text-lg font-semibold text-slate-900">Thông tin văn phòng</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Địa chỉ: 38 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</li>
              <li>Hotline: <a href="tel:+84987654321" className="text-primary">0987 654 321</a></li>
              <li>Email: support@dayladau.com</li>
              <li>Giờ làm việc: Thứ 2 - Thứ 7 (9:00 - 18:00)</li>
            </ul>
          </div>
        </section>
        <section className="rounded-3xl bg-white p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Nhận tư vấn miễn phí</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500" htmlFor="name">
                  Họ và tên
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="ban@dayladau.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="09xx xxx xxx"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500" htmlFor="service">
                  Nhu cầu
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Chọn nhu cầu</option>
                  <option value="family">Du lịch gia đình</option>
                  <option value="workation">Workation</option>
                  <option value="event">Tổ chức sự kiện</option>
                  <option value="experience">Trải nghiệm địa phương</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500" htmlFor="message">
                Lời nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Chia sẻ mong muốn về chuyến đi, lịch trình dự kiến..."
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Nhận tư vấn
            </button>
            {submitted && (
              <p className="rounded-2xl bg-primary/10 p-4 text-sm text-primary">
                Cảm ơn bạn! Đội ngũ DayLaDau sẽ liên hệ trong 24h.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
