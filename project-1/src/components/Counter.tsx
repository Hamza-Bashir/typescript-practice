import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0); // ✅ strong typing

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">🧮 Counter</h2>
      <p className="text-3xl font-bold mb-6 text-center">{count}</p>
      <div className="flex justify-between space-x-4">
        <button
          onClick={increment}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          + Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          - Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          ⟳ Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
