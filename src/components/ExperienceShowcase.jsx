const experiences = [
  {
    title: 'Lớp nấu phở cùng host Hà Nội',
    description: 'Học cách chọn nguyên liệu, nấu nước dùng chuẩn vị và thưởng thức cùng gia đình host.',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Chèo sup ngắm hoàng hôn Phú Quốc',
    description: 'Trải nghiệm chèo sup trên mặt biển phẳng lặng, kết hợp picnic sunset tại bãi biển riêng.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Săn mây và picnic Đà Lạt',
    description: 'Dậy sớm, săn mây trên đồi cao rồi thư giãn với bữa sáng picnic do host chuẩn bị.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ExperienceShowcase() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-width flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Trải nghiệm bản địa đi kèm homestay</h2>
          <p className="mt-3 text-slate-500">
            Đặt homestay không chỉ là chỗ ở. Khám phá những hoạt động độc quyền được host thiết kế riêng cho khách DayLaDau.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <article key={experience.title} className="overflow-hidden rounded-3xl bg-white shadow-card">
              <img
                src={experience.image}
                alt={experience.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                <p className="text-sm text-slate-500">{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
