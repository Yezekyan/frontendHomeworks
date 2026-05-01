const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
const trace = (callback) => {
  const history = [];

  const wrapper = (...args) => {
    const result = callback(...args);
    history.push({ inp: args, out: result });
    return result;
  };

  wrapper.history = history;

  return wrapper;
};
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
    }
  };
};
