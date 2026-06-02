import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../utilities/types';
import { Axios } from '../utilities/api';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    Axios.get<Product[]>('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="group relative overflow-hidden rounded-2xl shadow-2xl transform-gpu hover:scale-[1.02] transition-all duration-300"
            aria-labelledby={`product-${product.id}-title`}
          >
            <div className="relative h-52 bg-gradient-to-br from-indigo-800 to-indigo-900">
              <img
                src={product.photoURL}
                alt={product.name}
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="bg-indigo-900/95 border border-indigo-700/50 p-4 sm:p-5">
              <h3
                id={`product-${product.id}-title`}
                className="text-lg font-semibold text-white line-clamp-2"
              >
                {product.name}
              </h3>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-700/60 text-indigo-50 text-sm font-medium shadow-sm">
                  ${product.price.toFixed(2)}
                </span>

                <Link
                  to={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-lg transition"
                  aria-label={`View details for ${product.name}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
