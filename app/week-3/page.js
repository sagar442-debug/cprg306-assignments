import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="mx-10">
      <h1 className="text-3xl font-bold my-5 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}
