const highlights = [
  {
    title: '500+ homestay được tuyển chọn',
    description: 'Kiểm duyệt thủ công, đảm bảo tiêu chuẩn trải nghiệm và an toàn cho du khách.',
  },
  {
    title: 'Host địa phương tận tâm',
    description: 'Đội ngũ host am hiểu bản địa, sẵn sàng gợi ý hoạt động độc đáo và hỗ trợ 24/7.',
  },
  {
    title: 'Thanh toán linh hoạt',
    description: 'Đặt cọc trước, thanh toán phần còn lại sau khi nhận phòng. Hỗ trợ xuất hoá đơn.',
  },
];

export default function Highlights() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-width grid gap-8 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-3xl bg-white/5 p-8">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-white/70">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
