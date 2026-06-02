import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-3 rounded-lg text-base font-medium transition ${
      isActive
        ? 'text-indigo-600 bg-indigo-50 shadow-inner ring-1 ring-indigo-100'
        : 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50'
    }`;

  const actionClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center px-5 py-3 rounded-xl text-sm font-semibold transition ${
      isActive
        ? 'bg-gradient-to-br from-indigo-700 to-rose-600 text-white shadow-2xl'
        : 'bg-gradient-to-br from-indigo-600 to-rose-500 text-white shadow-xl hover:from-indigo-700 hover:to-rose-600'
    }`;

  const signInClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? 'bg-white border border-slate-100 text-indigo-600 shadow-sm'
        : 'bg-white/90 border border-slate-100 text-slate-800 hover:shadow-md'
    }`;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-50 via-sky-50 to-rose-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-white/70 shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <NavLink to={'/'} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-rose-500 flex items-center justify-center shadow-2xl transform-gpu hover:scale-105 transition-all">
                <span className="text-white text-2xl font-extrabold tracking-tight">
                  S
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-semibold text-slate-800">
                  Six Shop
                </div>
                <div className="text-sm text-slate-400 -mt-0.5">
                  Products & demo
                </div>
              </div>
            </NavLink>

            <nav className="hidden md:flex items-center gap-4">
              <NavLink to={'/'} className={navItemClass}>
                Home
              </NavLink>

              <NavLink to={'/add'} className={navItemClass}>
                Add Product
              </NavLink>

              {/* Added Login in the main navbar between Add and About */}
              <NavLink to={'/login'} className={navItemClass}>
                Login
              </NavLink>

              <NavLink to={'/about'} className={navItemClass}>
                About
              </NavLink>
            </nav>

            <div className="flex items-center gap-4">
              <NavLink to={'/login'} className={signInClass}>
                Sign In
              </NavLink>

              <NavLink to={'/signup'} className={actionClass}>
                Sign Up
              </NavLink>
            </div>

            <button className="md:hidden p-3 rounded-lg bg-white/90 ring-1 ring-slate-100 shadow">
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-slate-700"></span>
                <span className="block w-6 h-0.5 bg-slate-700"></span>
                <span className="block w-6 h-0.5 bg-slate-700"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <Outlet />
      </main>
    </div>
  );
};
