import { useOutletContext } from 'react-router-dom';
import type { Context } from '../../../../helpers/types';
import { HTTP } from '../../../../config/api';

export const UpdatePrivacy = () => {
  const { user, setUser } = useOutletContext<Context>();
  const handlePrivacy = () => {
    HTTP.patch<{ isAccountPrivate: boolean }>('/account/privacy').then(
      (response) => {
        setUser({
          ...user,
          isAccountPrivate: response.data.isAccountPrivate,
        });
      },
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-tr from-indigo-900/20 to-black/20 border border-indigo-700/20 backdrop-blur-md rounded-2xl p-5 shadow-lg flex items-center gap-4">
        <div
          className={`flex items-center justify-center h-14 w-14 rounded-lg shadow-md ${
            user.isAccountPrivate
              ? 'bg-gradient-to-br from-purple-600 to-indigo-500 text-white'
              : 'bg-gradient-to-br from-indigo-700 to-indigo-500 text-white/95'
          }`}
          aria-hidden
        >
          {user.isAccountPrivate ? (
            // closed lock
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="10"
                rx="2"
                ry="2"
                className="fill-current text-white/10"
              />
              <path
                d="M7 11V8a5 5 0 0110 0v3"
                className="stroke-current text-white"
              />
              <circle
                cx="12"
                cy="16"
                r="1.2"
                className="fill-current text-white"
              />
            </svg>
          ) : (
            // open lock
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="10"
                rx="2"
                ry="2"
                className="fill-current text-white/8"
              />
              <path
                d="M16 11V8a4 4 0 10-8 0"
                className="stroke-current text-white"
              />
              <path d="M12 16v.01" className="stroke-current text-white" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {user.isAccountPrivate ? 'Private account' : 'Public account'}
              </h3>
              <p className="text-sm text-indigo-200 mt-1">
                {user.isAccountPrivate
                  ? 'Only approved followers can see your posts and activity.'
                  : 'Anyone can view your posts and follow you without approval.'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.isAccountPrivate
                    ? 'bg-purple-700/20 text-purple-100 border border-purple-600/30'
                    : 'bg-indigo-700/20 text-indigo-100 border border-indigo-600/30'
                }`}
              >
                {user.isAccountPrivate ? 'Private' : 'Public'}
              </span>

              <button
                onClick={handlePrivacy}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
                aria-label="Change privacy"
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
                    d="M12 5v14M5 12h14"
                  />
                </svg>
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
