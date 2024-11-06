"use client";
import ItemList from "./item-list";
import NewItem from "../week-5/new-item";
import itemsData from "./item.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="">
      <h1 className="text-3xl font-bold my-5 text-white text-center">
        Shopping List
      </h1>
      <div className="flex ">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleSelectItem} items={items} />
        </div>
        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
}
