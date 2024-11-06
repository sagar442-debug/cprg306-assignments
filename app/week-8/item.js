import React from "react";

function Item({ item, onSelect }) {
  return (
    <section
      className="bg-[#21213f] shadow-lg rounded-md text-white cursor-pointer hover:bg-[#28284b] transition-all duration-100"
      onClick={onSelect}
    >
      <div className="p-3">
        <h1 className="text-xl">Item name: {item.name}</h1>
        <h1>Quantity: {item.quantity}</h1>
        <h1>Category: {item.category}</h1>
      </div>
    </section>
  );
}

export default Item;
