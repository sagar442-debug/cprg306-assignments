"use client";
import { useState } from "react";

function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const options = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const finalOutput = (e) => {
    let id = (Math.random() + 1).toString(36).substring(7);
    e.preventDefault();
    console.log({ id, name, quantity, category });
    onAddItem({ id, name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="">
      <div className="text-white flex flex-col items-center justify-center mt-2 gap-2">
        <form onSubmit={finalOutput} className="space-y-4">
          <input
            className="p-2 w-64 text-black"
            type="text"
            required={true}
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-3xl flex space-x-3">
            <h1 className="text-2xl">Quantity:</h1>
            <button
              disabled={quantity <= 1}
              className={`bg-sky-700 rounded px-2 ${
                quantity <= 1 && "opacity-50"
              }`}
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
          <div className="text-black">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 w-64"
            >
              <option value={"produce"}>Produce</option>
              <option value={"Dairy"}>Dairy</option>
              <option value={"Bakery"}>Bakery</option>
              <option value={"Meat"}>Meat</option>
              <option value={"Frozen Foods"}>Frozen Foods</option>
              <option value={"Beverages"}>Beverages</option>
              <option value={"Snacks"}>Snacks</option>
              <option value={"Household"}>Household</option>
              <option value={"Other"}>Other</option>
            </select>
          </div>
          <div>
            <input
              className=" bg-sky-600 p-2 cursor-pointer w-64"
              type="submit"
              value="Submit"
              onSubmit={finalOutput}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewItem;
