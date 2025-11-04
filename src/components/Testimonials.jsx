import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../api/mockApi.js';

export default function Testimonials() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchTestimonials().then(setItems);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-width flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Khách hàng kể về DayLaDau</h2>
          <p className="mt-3 text-slate-500">
            Mỗi trải nghiệm là một câu chuyện đẹp. Chúng tôi tự hào được đồng hành cùng hàng nghìn du khách trên khắp Việt Nam.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-slate-600"
            >
              <p className="text-balance text-sm leading-relaxed">“{testimonial.quote}”</p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest text-primary">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
