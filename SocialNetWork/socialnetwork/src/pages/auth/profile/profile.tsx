import axios from 'axios';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { HTTP } from '../../../config/api';
import type { Context } from '../../../helpers/types';

type Bio = {
  bio: string;
};

export const Profile = () => {
  const { user, setUser } = useOutletContext<Context>();
  const [error, setError] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const defaultBio = 'Bio';

  const handleSave = (
    e:
      | React.FocusEvent<HTMLParagraphElement>
      | React.KeyboardEvent<HTMLParagraphElement>,
  ) => {
    setIsEditing(false);

    const trimmedBio = e.currentTarget.textContent?.trim() || '';

    HTTP.patch<Bio>('/account/bio', { bio: trimmedBio })
      .then(() => {
        setUser({ ...user, bio: trimmedBio });
        setError('');
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(
            err.response?.data?.message ||
              'Something went wrong saving your bio.',
          );
        }
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    const currentLength = e.currentTarget.textContent?.length || 0;
    const isControlKey = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Escape',
      'Enter',
      'Tab',
    ].includes(e.key);

    if (currentLength >= 30 && !isControlKey) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave(e);
      e.currentTarget.blur();
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsEditing(false);
      e.currentTarget.textContent = user.bio || defaultBio;
      e.currentTarget.blur();
    }
  };

  const startEditing = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setIsEditing(true);
    if (!user.bio || e.currentTarget.textContent === defaultBio) {
      e.currentTarget.textContent = '';
    }
  };

  let profileImage =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  if (user && user.avatar !== '') {
    profileImage = user.avatar;
  }

  return (
    user && (
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-3xl bg-gradient-to-br from-indigo-900/30 via-purple-900/10 to-black/30 border border-indigo-700/20 backdrop-blur-md rounded-2xl shadow-2xl p-6">
          <div className="md:flex md:items-center md:gap-6">
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="h-36 w-36 rounded-full object-cover ring-4 ring-indigo-500/30 shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-400 ring-2 ring-black/50" />
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {user.firstName} {user.lastName}
                  </h1>
                  <p className="text-sm text-indigo-200 mt-1">
                    @{user.username}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-700/20 text-indigo-100 text-xs font-medium">
                      <svg
                        className="h-4 w-4 text-indigo-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zM4 20v-2a6 6 0 016-6h0a6 6 0 016 6v2"
                        />
                      </svg>
                      Member
                    </span>

                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-700/20 text-purple-100 text-xs font-medium">
                      <svg
                        className="h-4 w-4 text-purple-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                      Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform">
                    Message
                  </button>

                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-indigo-700/30 text-indigo-200 hover:bg-indigo-700/10 transition">
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-indigo-200 font-medium">About</h3>
                </div>
                {error && <p className="text-red-500">{error}</p>}

                <p
                  contentEditable
                  dir="ltr"
                  suppressContentEditableWarning
                  onClick={!isEditing ? startEditing : null}
                  onBlur={handleSave}
                  onKeyDown={handleKeyDown}
                  className={`text-sm leading-relaxed p-2 -mx-2 rounded-lg transition-all outline-none text-left break-words
                    ${
                      isEditing
                        ? 'text-white bg-white/10 border border-indigo-500/40 ring-2 ring-indigo-500/10'
                        : 'text-indigo-100/90 border-transparent hover:bg-white/5 hover:border-indigo-500/10 cursor-pointer'
                    }`}
                >
                  {user.bio || defaultBio}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-3 rounded-lg text-center">
                  <div className="text-lg font-semibold text-white">
                    {user.posts.length ?? 0}
                  </div>
                  <div className="text-xs text-indigo-200 mt-1">Posts</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg text-center">
                  <div className="text-lg font-semibold text-white">
                    {user.followers.length ?? 0}
                  </div>
                  <div className="text-xs text-indigo-200 mt-1">Followers</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg text-center">
                  <div className="text-lg font-semibold text-white">
                    {user.followings.length ?? 0}
                  </div>
                  <div className="text-xs text-indigo-200 mt-1">Following</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-indigo-700/10 pt-6">
            <h4 className="text-sm text-indigo-200 font-medium mb-3">
              Recent posts
            </h4>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-gradient-to-tr from-indigo-900/10 to-black/10 border border-indigo-700/10">
                <p className="text-sm text-indigo-100/90">
                  No posts yet — start sharing your thoughts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
