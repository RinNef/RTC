import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../api/mockApi.js';

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-width flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Cẩm nang trải nghiệm từ DayLaDau</h2>
            <p className="mt-3 text-slate-500">
              Lên kế hoạch hoàn hảo cho chuyến đi tiếp theo cùng những gợi ý độc quyền từ cộng đồng du khách.
            </p>
          </div>
          <Link to="/contact" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            Nhận tư vấn cá nhân hoá →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="flex h-full flex-col overflow-hidden rounded-3xl border bg-slate-50">
              <img src={article.image} alt={article.title} className="h-48 w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{article.category}</span>
                <h3 className="text-lg font-semibold text-slate-900">{article.title}</h3>
                <p className="text-sm text-slate-500">{article.excerpt}</p>
                <div className="mt-auto text-sm font-semibold text-primary">Đọc thêm</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
