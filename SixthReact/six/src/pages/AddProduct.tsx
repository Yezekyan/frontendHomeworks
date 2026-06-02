import { useForm } from 'react-hook-form';
import type { Product } from '../utilities/types';

export const AddProduct = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddProduct = (data: Product) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="bg-gradient-to-br from-indigo-800/95 to-indigo-900/95 border border-indigo-700/50 rounded-3xl p-10 shadow-2xl backdrop-blur-sm"
        aria-label="Add product form"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-white">Add Product</h2>
          <p className="text-sm text-indigo-200 mt-2 max-w-xl">
            Create a new product — fields marked with{' '}
            <span className="font-medium text-rose-300">*</span> are required.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-100">
                Product Name <span className="text-rose-400">*</span>
              </span>
              <span className="text-xs text-indigo-300">Required</span>
            </div>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.name ? 'border-rose-400' : 'border-indigo-700/40'
              } text-indigo-50 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-shadow duration-150 shadow-sm`}
              placeholder="e.g. Cozy Ceramic Mug"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="text-xs text-rose-300 mt-1">
                {errors.name.message as string}
              </span>
            )}
          </label>

          <label className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-100">
                Price (USD) <span className="text-rose-400">*</span>
              </span>
              <span className="text-xs text-indigo-300">Numeric</span>
            </div>
            <input
              type="number"
              step="0.01"
              {...register('price', { required: 'Price is required' })}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.price ? 'border-rose-400' : 'border-indigo-700/40'
              } text-indigo-50 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-shadow duration-150 shadow-sm`}
              placeholder="0.00"
              aria-invalid={!!errors.price}
            />
            {errors.price && (
              <span className="text-xs text-rose-300 mt-1">
                {(errors.price as { message: string }).message}
              </span>
            )}
          </label>
        </div>

        <div className="mt-5">
          <label className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-100">
                Photo URL <span className="text-rose-400">*</span>
              </span>
              <span className="text-xs text-indigo-300">JPG, PNG</span>
            </div>
            <input
              type="text"
              {...register('photoUrl', { required: 'Photo URL is required' })}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.photoUrl ? 'border-rose-400' : 'border-indigo-700/40'
              } text-indigo-50 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-shadow duration-150 shadow-sm`}
              placeholder="https://example.com/photo.jpg"
              aria-invalid={!!errors.photoUrl}
            />
            {errors.photoUrl && (
              <span className="text-xs text-rose-300 mt-1">
                {(errors.photoUrl as { message: string }).message}
              </span>
            )}
          </label>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-transparent border border-indigo-700/30 text-indigo-200 hover:bg-indigo-800/40 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition"
          >
            Save Product
          </button>
        </div>

        <p className="mt-6 text-xs text-indigo-200/70">
          Tip: Fill accurate price and a valid image URL for best results.
        </p>
      </form>
    </div>
  );
};
