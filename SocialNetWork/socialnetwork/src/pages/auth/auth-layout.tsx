import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../helpers/hooks/useAuth';
import { AuthNavBar } from './components/Navbar';

export const AuthLayout = () => {
  const [user, setUser] = useAuth();
  return (
    user && (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-900 to-purple-900 text-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <aside className="hidden lg:block">
            <AuthNavBar />
          </aside>

          {/* Main content */}
          <main>
            <div className="bg-gradient-to-tr from-indigo-900/30 to-black/30 border border-indigo-700/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl min-h-[60vh]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-lg font-semibold">Dashboard</h2>
                <div className="hidden sm:flex items-center gap-3">
                  <button className="px-3 py-2 bg-indigo-700/30 text-indigo-100 rounded-lg text-sm hover:bg-indigo-700/40">
                    New post
                  </button>
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pb-6">
                <Outlet context={{ user, setUser }} />
              </div>
            </div>
          </main>
        </div>

        {/* Mobile bottom nav */}
        <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-40">
          <div className="bg-gradient-to-tr from-indigo-900/30 to-black/30 border border-indigo-700/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center justify-between shadow-xl">
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                `${isActive ? 'text-white' : 'text-indigo-200'} flex-1 text-center`
              }
            >
              Profile
            </NavLink>

            <NavLink
              to="/profile/messages"
              className={({ isActive }) =>
                `${isActive ? 'text-white' : 'text-indigo-200'} flex-1 text-center`
              }
            >
              Messages
            </NavLink>

            <NavLink
              to="/profile/posts"
              className={({ isActive }) =>
                `${isActive ? 'text-white' : 'text-indigo-200'} flex-1 text-center`
              }
            >
              Posts
            </NavLink>
          </div>
        </div>
      </div>
    )
  );
};
