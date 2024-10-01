import React from "react";

function Item({ item }) {
  return (
    <section className="bg-[#21213f] shadow-lg  rounded-md text-white">
      <div className="p-3">
        <h1 className="text-xl">Item name: {item.name}</h1>
        <h1>Quantity: {item.quantity}</h1>
        <h1>Category: {item.category}</h1>
      </div>
    </section>
  );
}

export default Item;
