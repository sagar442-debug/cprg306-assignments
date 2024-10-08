"use client";
import { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="text-white flex justify-center mt-2">
      <div className="text-3xl flex space-x-3">
        <button
          disabled={quantity <= 1}
          className={`bg-sky-700 rounded px-2 ${quantity <= 1 && "opacity-50"}`}
          onClick={decrement}
        >
          -
        </button>
        <h1 className="w-12 text-center bg-white text-black rounded">
          {quantity}
        </h1>
        <button
          disabled={quantity >= 20}
          className={`bg-sky-700 rounded px-2 ${
            quantity >= 20 && "opacity-50"
          }`}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default NewItem;
