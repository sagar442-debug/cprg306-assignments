"use client";
import { useEffect, useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

const ItemList = () => {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    sortingName();
  }, []);

  const sortingName = () => {
    setItems([...items].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortingCategory = () => {
    setItems([...items].sort((a, b) => a.category.localeCompare(b.category)));
  };

  const handleSort = (name) => {
    if (name === "name") {
      setSortBy("name");
      sortingName();
    } else {
      setSortBy("category");
      sortingCategory();
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
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

{
  /* <Item item={item1} />
        <Item item={item2} />
        <Item item={item3} />
        <Item item={item4} />
        <Item item={item5} />
        <Item item={item6} />
        <Item item={item7} />
        <Item item={item8} />
        <Item item={item9} />
        <Item item={item10} />
        <Item item={item11} />
        <Item item={item12} /> */
}
