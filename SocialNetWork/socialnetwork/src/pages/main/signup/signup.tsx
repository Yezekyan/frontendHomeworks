import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import type { User } from '../../../helpers/types';
import { HTTP } from '../../../config/api';
import axios from 'axios';
import { useState } from 'react';

export const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp: SubmitHandler<User> = (data) => {
    HTTP.post('/auth/signup', data)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          const res = err.response.data;
          setError(res.message);
        }
        console.log(err.message);
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
                d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zM4 20v-2a6 6 0 016-6h0a6 6 0 016 6v2"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-white text-2xl font-semibold leading-tight">
              Create your account
            </h1>
            <p className="text-indigo-200 text-sm">
              Join the community — quick, secure, and delightful
            </p>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleSignUp)}>
          {error && <p className="text-red-500">{error}</p>}
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2">
                First name
              </label>
              <input
                {...register('firstName', {
                  required: 'First name is required',
                })}
                type="text"
                placeholder="Jane"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-700/30 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                aria-label="First name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2">
                Last name
              </label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-700/30 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                aria-label="Last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2"
            >
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
                id="username"
                name="username"
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
                id="password"
                name="password"
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

          <div className="flex items-start gap-3 text-sm text-indigo-200">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-indigo-600 bg-transparent text-indigo-400 focus:ring-indigo-400"
            />
            <label className="leading-tight">
              I agree to the{' '}
              <a href="#" className="text-indigo-200 underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-indigo-200 underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:scale-[1.01] active:scale-[0.99] transition-transform shadow-lg text-white font-semibold"
            >
              <svg
                className="h-5 w-5 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 5v14M5 12h14"
                />
              </svg>
              Create account
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-xs text-indigo-200">
          Already have an account?{' '}
          <Link to="/" className="text-white font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
