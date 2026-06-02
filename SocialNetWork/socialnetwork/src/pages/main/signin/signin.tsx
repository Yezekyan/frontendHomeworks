import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import type { User } from '../../../helpers/types';
import { HTTP } from '../../../config/api';
import axios from 'axios';
import { useState } from 'react';
type AuthUser = Pick<User, 'username' | 'password'>;

export const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthUser>();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSignIn = (data: AuthUser) => {
    HTTP.post<{ token: string }>('/auth/signin', data)
      .then((response) => {
        localStorage.setItem('authtoken', response.data.token);
        navigate('/profile');
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const res = error.response.data;
          setError(res.message);
        }
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gradient-to-tr from-indigo-900/40 to-black/40 border border-indigo-700/30 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg">
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
                d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zM2 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-white text-2xl font-semibold leading-tight">
              Welcome back
            </h1>
            <p className="text-indigo-200 text-sm">
              Sign in to continue to your Social Network
            </p>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleSignIn)}>
          {error && <p className="text-red-500">{error}</p>}
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200">
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
                    d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11z"
                  />
                </svg>
              </span>
              <input
                {...register('username', { required: 'Username is required' })}
                type="text"
                placeholder="jane.doe"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-indigo-700/30 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                aria-label="Username"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200">
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
                    d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zM4 20v-2a6 6 0 016-6h0a6 6 0 016 6v2"
                  />
                </svg>
              </span>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    message:
                      'Must include uppercase, lowercase, a number, and a special character',
                  },
                })}
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-indigo-700/30 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                aria-label="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-indigo-200">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-indigo-600 bg-transparent text-indigo-400 focus:ring-indigo-400"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-indigo-200/90 hover:text-white underline"
            >
              Forgot?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:scale-[1.01] active:scale-[0.99] transition-transform shadow-lg text-white font-semibold"
            >
              <svg
                className="h-5 w-5 text-white/90"
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
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-indigo-200/80">
          New here?{' '}
          <Link to={'/signup'} className="text-white underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};
