import PropertyCard from './PropertyCard.jsx';

export default function PropertyGrid({ properties, emptyLabel = 'Không có homestay phù hợp.' }) {
  if (!properties.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
