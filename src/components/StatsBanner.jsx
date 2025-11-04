const stats = [
  { label: 'Homestay độc đáo', value: '500+' },
  { label: 'Tỉnh thành phủ sóng', value: '35' },
  { label: 'Khách hàng hài lòng', value: '48.000+' },
  { label: 'Trải nghiệm bản địa', value: '120+' },
];

export default function StatsBanner() {
  return (
    <section className="bg-white">
      <div className="container-width grid gap-6 rounded-3xl bg-slate-100/70 p-10 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-3xl font-semibold text-primary">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
