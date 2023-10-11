import { useState } from "react";
import { Header } from "./components/Header";
import NotesForm from "./components/NotesForm";

function App() {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem);
  };
  return (
    <main className="bg-[#101010] text-white font-mono">
      <section>
        <Header />
        <div className="max-w-7xl mx-auto">
          <NotesForm createItem={createItem} deleteItem={deleteItem} items={items} />
        </div>
      </section>
    </main>
  );
}

export default App;
