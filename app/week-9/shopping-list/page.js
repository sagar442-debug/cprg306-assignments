"use client";
import ItemList from "./item-list";
import NewItem from "@/app/week-5/new-item";
import itemsData from "./item.json";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();
  const { user } = useUserAuth();

  useEffect(() => {
    if (user == null) {
      router.push("/week-9");
    }
  }, []);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="">
      <div className="text-center">
        <Link href={"/week-9"} className="text-white">
          {" "}
          Go back
        </Link>
      </div>
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
