import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold my-5 text-white text-center">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
