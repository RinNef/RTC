import { properties } from '../data/properties.js';
import { testimonials } from '../data/testimonials.js';
import { destinations } from '../data/destinations.js';
import { articles } from '../data/articles.js';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchProperties(filters = {}) {
  await wait(150);

  const { query, city, guests, priceRange } = filters;

  return properties.filter((property) => {
    const matchesQuery = query
      ? property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.city.toLowerCase().includes(query.toLowerCase()) ||
        property.region.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesCity = city ? property.city === city : true;
    const matchesGuests = guests ? property.guests >= Number(guests) : true;

    const matchesPrice = priceRange
      ? property.price >= priceRange[0] && property.price <= priceRange[1]
      : true;

    return matchesQuery && matchesCity && matchesGuests && matchesPrice;
  });
}

export async function fetchPropertyById(id) {
  await wait(120);
  return properties.find((property) => property.id === id);
}

export async function fetchTestimonials() {
  await wait(80);
  return testimonials;
}

export async function fetchDestinations() {
  await wait(100);
  return destinations;
}

export async function fetchArticles() {
  await wait(90);
  return articles;
}
