import { useState } from "react";
import { Header } from "./components/Header";
import NotesForm from "./components/NotesForm";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const createItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem);
  };

  const archiveItem = (id) => {
    const itemToArchive = items.map((item) => (item.id === id ? { ...item, isArchived: !item.isArchived } : item));
    setItems(itemToArchive);
  };
  return (
    <main className="bg-[#101010] text-white font-mono">
      <section className="px-10 md:px-0 ">
        <Header search={search} setSearch={setSearch} />
        <div className="max-w-7xl mx-auto">
          <NotesForm createItem={createItem} deleteItem={deleteItem} items={items} search={search} archiveItem={archiveItem} />
        </div>
      </section>
    </main>
  );
}

export default App;
