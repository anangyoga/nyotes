import { useState } from "react";
import { Header } from "./components/Header";
import NotesForm from "./components/NotesForm";

function App() {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="bg-[#101010] text-white font-mono">
      <section>
        <Header />
        <div className="max-w-7xl mx-auto">
          <NotesForm createItem={createItem} items={items} />
        </div>
      </section>
    </main>
  );
}

export default App;
