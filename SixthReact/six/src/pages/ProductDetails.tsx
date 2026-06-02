import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Axios } from '../utilities/api';
import type { Product, Comment } from '../utilities/types';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [imgError, setImgError] = useState(false);

  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (!id) return;
    Axios.get<Product>(`/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch(() => navigate('/'));
  }, [id, navigate]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      id: Date.now(),
      author: author.trim() || 'Anonymous',
      text: commentText.trim(),
      createdAt: new Date().toISOString(),
    };
    setComments((s) => [newComment, ...s]);
    setAuthor('');
    setCommentText('');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-700/80 text-white hover:bg-indigo-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          aria-label="Go back"
        >
          ← Back
        </button>
        <Link
          to="/"
          className="text-sm text-indigo-200 hover:text-white transition"
        >
          Home
        </Link>
      </div>

      <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 border border-indigo-700/60 rounded-2xl p-6 md:p-10 shadow-2xl">
        {!product && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin mb-4" />
            <p className="text-indigo-200">Loading product...</p>
          </div>
        )}

        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-indigo-700/40 bg-indigo-900 relative">
                {!imgError ? (
                  <img
                    src={product.photoURL}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                    onError={() => setImgError(true)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-indigo-800 text-indigo-100">
                    <span className="text-sm">Image not available</span>
                  </div>
                )}
                <div className="absolute pointer-events-none inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <section className="bg-indigo-900/95 border border-indigo-700/60 rounded-xl p-4 shadow-md">
                <h4 className="text-lg font-semibold text-white">Comments</h4>
                <p className="text-sm text-indigo-200/80 mt-1">
                  Leave a short note about this book — polite and concise.
                </p>

                <form onSubmit={handleAddComment} className="mt-4 space-y-3">
                  <div className="grid grid-cols-1 gap-2">
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Your name (optional)"
                      className="w-full px-3 py-2 rounded-md bg-indigo-800 border border-indigo-700 text-indigo-100 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      rows={3}
                      placeholder="Write a short comment..."
                      className="w-full px-3 py-2 rounded-md bg-indigo-800 border border-indigo-700 text-indigo-100 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                      Add Comment
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setAuthor('');
                        setCommentText('');
                      }}
                      className="px-3 py-2 text-sm rounded-md bg-transparent border border-indigo-700/40 text-indigo-200 hover:bg-indigo-800/40 transition"
                    >
                      Clear
                    </button>
                  </div>
                </form>

                <div className="mt-4 space-y-3 max-h-40 overflow-auto pr-2">
                  {comments.length === 0 ? (
                    <p className="text-sm text-indigo-200/70">
                      No comments yet — be the first.
                    </p>
                  ) : (
                    comments.map((c) => (
                      <div
                        key={c.id}
                        className="bg-indigo-800/40 border border-indigo-700/30 rounded-md p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {c.author}
                            </div>
                            <div className="text-xs text-indigo-200/70">
                              {new Date(c.createdAt).toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-indigo-100/90 leading-relaxed">
                          {c.text}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  {product.name}
                </h1>

                <div className="mt-4 flex items-center gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400 text-indigo-900 text-sm font-semibold shadow-sm">
                    ${product.price.toFixed(2)}
                  </span>

                  <span className="text-sm text-indigo-200/90">
                    SKU #{product.id}
                  </span>

                  <span className="ml-auto text-sm text-emerald-300 hidden sm:inline">
                    In stock
                  </span>
                </div>

                <p className="mt-6 text-indigo-100/90 leading-relaxed">
                  A classic pick — this product entry uses the name and price
                  from the catalogue. Add a longer description in your data
                  source for a richer product page.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-indigo-200/90">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    High quality selection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    Carefully curated covers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    Fast shipping available
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => alert('Checkout flow not implemented')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-indigo-900 font-medium border border-indigo-700 shadow-sm hover:bg-indigo-50 transition"
                >
                  Buy Now
                </button>

                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-800/70 border border-indigo-700/50 text-indigo-100 hover:bg-indigo-800 transition"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
