"use client";
import { useEffect, useState } from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setSortedItems([...items].sort((a, b) => a.name.localeCompare(b.name)));
  }, [items]);

  const sortByName = () => {
    setSortedItems(
      [...sortedItems].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const sortByCategory = () => {
    setSortedItems(
      [...sortedItems].sort((a, b) => a.category.localeCompare(b.category))
    );
  };

  const handleSort = (sortKey) => {
    setSortBy(sortKey);
    if (sortKey === "name") {
      sortByName();
    } else {
      sortByCategory();
    }
  };

  return (
    <div className="text-white text-center">
      <div className="mt-2 space-x-4">
        <button
          className={`bg-cyan-800 rounded p-2 hover:bg-cyan-600 duration-100 ${
            sortBy === "name" ? "bg-cyan-600" : ""
          }`}
          onClick={() => handleSort("name")}
        >
          Sort by Name
        </button>
        <button
          className={`bg-cyan-800 rounded p-2 hover:bg-cyan-600 duration-100 ${
            sortBy === "category" ? "bg-cyan-600" : ""
          }`}
          onClick={() => handleSort("category")}
        >
          Sort by Category
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 mx-10">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
