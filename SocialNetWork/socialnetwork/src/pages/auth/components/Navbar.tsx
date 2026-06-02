import type { JSX } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const AuthNavBar = () => {
  const navigate = useNavigate();
  const navItem = (to: string, label: string, icon: JSX.Element) => (
    <NavLink
      to={to}
      end={to === '/profile'}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
          isActive
            ? 'bg-indigo-700/30 text-white shadow-inner'
            : 'text-indigo-200 hover:bg-indigo-700/10'
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );

  const signOut = () => {
    localStorage.removeItem('authtoken');
    navigate('/');
  };
  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-900/30 to-black/20 border border-indigo-700/20 backdrop-blur-md rounded-2xl p-5 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1a6 6 0 0112 0v1"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Your account</h3>
            <p className="text-indigo-200 text-xs">Manage profile & activity</p>
          </div>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        {navItem(
          '/profile',
          'Profile',
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>,
        )}
        {navItem(
          '/profile/settings',
          'Settings',
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15.5A3.5 3.5 0 1012 8.5a3.5 3.5 0 000 7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 014.27 16.9l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2v-1a2 2 0 012-2h.09c.66 0 1.2-.4 1.51-1a1.65 1.65 0 00-.33-1.82l-.06-.06A2 2 0 016.1 4.27l.06.06a1.65 1.65 0 001.82.33h.01c.4-.2.86-.33 1.33-.33H10a1.65 1.65 0 001-1.51V3a2 2 0 012-2h1a2 2 0 012 2v.09c0 .47.13.93.33 1.33.13.24.32.46.55.63l.01.01c.18.13.36.25.55.34.31.17.66.26 1.01.26H21a2 2 0 012 2v1a2 2 0 01-2 2h-.09c-.47 0-.93.13-1.33.33a1.65 1.65 0 00-.63.55l-.01.01c-.09.19-.21.37-.34.55-.1.23-.2.46-.26.71z"
            />
          </svg>,
        )}
        {navItem(
          '/profile/followers',
          'Followers',
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 11a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>,
        )}
        {navItem(
          '/profile/followings',
          'Followings',
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 11V7a4 4 0 10-8 0v4M4 21h16"
            />
          </svg>,
        )}
        {navItem(
          '/profile/messages',
          'Messages',
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
            />
          </svg>,
        )}
        {navItem(
          '/profile/posts',
          'Posts',
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 11H5m14 0a2 2 0 100-4H5a2 2 0 100 4m14 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6"
            />
          </svg>,
        )}

        <button
          onClick={() => signOut()}
          className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-transform"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
          Logout
        </button>
      </nav>
    </>
  );
};
