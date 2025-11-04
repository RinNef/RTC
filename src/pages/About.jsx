import Highlights from '../components/Highlights.jsx';
import StatsBanner from '../components/StatsBanner.jsx';

const values = [
  {
    title: 'Tôn trọng văn hoá bản địa',
    description:
      'Mỗi homestay trên DayLaDau đều được kiểm duyệt để đảm bảo giữ gìn bản sắc và hỗ trợ cộng đồng địa phương phát triển bền vững.',
  },
  {
    title: 'Trải nghiệm chân thực',
    description:
      'Chúng tôi kết nối du khách với những hoạt động đời thường của người dân bản địa, tạo nên ký ức đáng nhớ cho mỗi chuyến đi.',
  },
  {
    title: 'Công nghệ vì con người',
    description:
      'Hệ thống đặt phòng linh hoạt, thanh toán an toàn và hỗ trợ 24/7 giúp du khách an tâm trọn hành trình.',
  },
];

export default function About() {
  return (
    <div className="section-padding bg-slate-50">
      <div className="container-width space-y-16">
        <section className="grid gap-10 rounded-3xl bg-white p-10 shadow-card lg:grid-cols-[1.3fr,1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Về DayLaDau</p>
            <h1 className="text-4xl font-semibold text-slate-900">Chúng tôi xây dựng cộng đồng homestay tử tế</h1>
            <p className="text-sm leading-relaxed text-slate-600">
              DayLaDau ra đời từ mong muốn đưa du lịch Việt Nam đến gần hơn với du khách bằng những trải nghiệm chân thực và tử
              tế. Mỗi host là một đại sứ văn hoá, mỗi homestay là một câu chuyện. Chúng tôi đồng hành cùng host trong việc nâng
              cao chất lượng dịch vụ và kết nối họ với những du khách phù hợp.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Đội ngũ DayLaDau gồm những người trẻ đam mê du lịch, công nghệ và phát triển cộng đồng. Chúng tôi tin rằng du lịch
              bền vững bắt đầu từ việc tôn trọng địa phương, chia sẻ giá trị và mang lại lợi ích thiết thực cho người dân.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="DayLaDau team"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
        <StatsBanner />
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900">Giá trị cốt lõi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl bg-white p-8 shadow-card">
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="grid gap-10 rounded-3xl bg-white p-10 shadow-card lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-slate-900">Hành trình phát triển</h2>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <strong className="text-slate-900">2018:</strong> DayLaDau ra mắt tại Hà Nội với 20 homestay đầu tiên.
              </li>
              <li>
                <strong className="text-slate-900">2020:</strong> Mở rộng tới 15 tỉnh thành, ra mắt chương trình DayLaDau Host
                Academy.
              </li>
              <li>
                <strong className="text-slate-900">2022:</strong> Đạt mốc 30.000 lượt đặt phòng, triển khai gói trải nghiệm bản
                địa độc quyền.
              </li>
              <li>
                <strong className="text-slate-900">2024:</strong> Ra mắt DayLaDau for Business, hỗ trợ doanh nghiệp tổ chức
                workation.
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
              alt="Guests enjoying homestay"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
        <Highlights />
      </div>
    </div>
  );
}
