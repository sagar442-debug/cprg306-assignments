import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const getItems = async (userId) => {
  try {
    const items = [];
    const itemsRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsRef);
    itemsSnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return items;
  } catch (error) {
    console.error("Error retrieving items: ", error);
    throw error;
  }
};

const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }
};

// Export the functions
export { getItems, addItem };
