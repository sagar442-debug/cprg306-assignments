"use client";
import ItemList from "./item-list";
import NewItem from "@/app/week-5/new-item";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();
  const { user } = useUserAuth();

  useEffect(() => {
    if (user == null) {
      router.push("/week-10");
    }
  }, [user]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      const itemWithId = { ...newItem, id: itemId };
      setItems((prevItems) => [...prevItems, itemWithId]);
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const loadItems = async () => {
    try {
      // Call getItems using the current user's UID
      const items = await getItems(user.uid);

      setItems(items);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  return (
    <main className="">
      <div className="text-center">
        <Link href={"/week-10"} className="text-white">
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
