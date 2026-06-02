import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-rose-50 flex items-center justify-center p-6">
      {/* Decorative blurred shapes */}
      <div className="absolute -left-24 -top-16 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-200 opacity-40 blur-3xl transform rotate-45 pointer-events-none" />
      <div className="absolute -right-24 -bottom-16 w-80 h-80 rounded-full bg-gradient-to-br from-rose-200 via-yellow-200 to-indigo-200 opacity-30 blur-2xl transform -rotate-12 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/30 via-white/10 to-transparent opacity-40 pointer-events-none" />

      <main className="relative z-10 w-full max-w-3xl bg-white/75 backdrop-blur-md border border-white/60 rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-lg px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold text-sm shadow-sm ring-1 ring-indigo-100">
            OOPS — Page missing
          </div>

          <h1 className="mt-2 text-[5.5rem] sm:text-[7rem] leading-none font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-500 drop-shadow-[0_10px_30px_rgba(99,102,241,0.12)]">
            404
          </h1>

          <p className="max-w-xl text-lg sm:text-xl font-semibold text-slate-700">
            We can't find the page you're looking for.
          </p>

          <p className="max-w-xl text-sm sm:text-base text-slate-500">
            The link may be broken, the page may have been removed, or the URL
            is incorrect. Try returning home or contact support if you think
            this is an error.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              aria-label="Go to homepage"
            >
              Return Home
            </Link>

            <Link
              to="/search"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/80 hover:bg-white rounded-lg border border-slate-100 text-slate-700 shadow-sm transition duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
              aria-label="Search site"
            >
              Search the site
            </Link>

            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:support@example.com';
              }}
              className="hidden sm:inline-block text-sm px-4 py-2 rounded-lg border border-transparent text-indigo-600 hover:bg-indigo-50 transition"
              aria-label="Contact support"
            >
              Contact Support
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Tip: Double-check the URL or try using the search.
          </p>
        </div>
      </main>
    </div>
  );
};
