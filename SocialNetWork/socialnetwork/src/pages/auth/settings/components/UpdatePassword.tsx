import { useForm } from 'react-hook-form';
import { HTTP } from '../../../../config/api';
import axios from 'axios';
import { useState } from 'react';

type FormValues = {
  currentPassword: string;
  newPassword: string;
};

export const UpdatePassword = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const handleUpdate = (data: FormValues) => {
    setError('');
    setSuccess('');

    HTTP.patch<FormValues>('/account/settings/password', data)
      .then(() => {
        setSuccess('Password updated successfully!');
        reset();
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Something went wrong');
        } else {
          setError('An unexpected error occurred.');
        }
      });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-tr from-indigo-900/20 to-black/20 border border-indigo-700/20 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Update password
            </h3>
            <p className="text-sm text-indigo-200/80 mt-1">
              Keep your account secure. Choose a strong password you haven't
              used elsewhere.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
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
                  d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11z"
                />
              </svg>
              Secure
            </span>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleUpdate)}>
          {error && (
            <p className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400">
              {error}
            </p>
          )}
          {success && (
            <p className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-400">
              {success}
            </p>
          )}

          <div>
            <label
              htmlFor="current-password"
              className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2"
            >
              Current password
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
                    d="M12 11V7a4 4 0 10-8 0v4M4 20h16"
                  />
                </svg>
              </span>
              <input
                id="current-password"
                type="password"
                aria-invalid={errors.currentPassword ? 'true' : 'false'}
                {...register('currentPassword', {
                  required: 'Current password is required',
                })}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border ${errors.currentPassword ? 'border-red-500' : 'border-indigo-700/30'} text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition`}
                placeholder="••••••••"
              />
            </div>
            {errors.currentPassword && (
              <p className="mt-2 text-xs text-red-400">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="new-password"
              className="block text-xs font-medium uppercase tracking-wide text-indigo-200 mb-2"
            >
              New password
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
                    d="M12 17a4 4 0 004-4V9a4 4 0 10-8 0v4a4 4 0 004 4z"
                  />
                </svg>
              </span>
              <input
                id="new-password"
                type="password"
                aria-invalid={errors.newPassword ? 'true' : 'false'}
                {...register('newPassword', {
                  required: 'New password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border ${errors.newPassword ? 'border-red-500' : 'border-indigo-700/30'} text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition`}
                placeholder="Choose a strong password"
              />
            </div>
            {errors.newPassword && (
              <p className="mt-2 text-xs text-red-400">
                {errors.newPassword.message}
              </p>
            )}

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-indigo-200/80 mb-2">
                <span>Password strength</span>
                <span>0 / 4</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="h-2 w-1/3 bg-gradient-to-r from-indigo-500 to-purple-600" />
              </div>
              <p className="mt-2 text-xs text-indigo-200/70">
                Use at least 8 characters, mix letters, numbers and symbols.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60"
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
              {isSubmitting ? 'Updating...' : 'Update password'}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setError('');
                setSuccess('');
              }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-transparent border border-indigo-700/30 text-indigo-200 hover:bg-indigo-700/10 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
