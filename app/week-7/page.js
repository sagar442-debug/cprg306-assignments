"use client";
import ItemList from "./item-list";
import NewItem from "../week-5/new-item";
import itemsData from "./item.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="">
      <h1 className="text-3xl font-bold my-5 text-white text-center">
        Shopping List
      </h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
