import { Header } from "./components/Header";
import NotesForm from "./components/NotesForm";

function App() {
  return (
    <main className="bg-[#101010] text-white font-mono">
      <section className="max-w-7xl mx-auto">
        <Header />
        <NotesForm />
      </section>
    </main>
  );
}

export default App;
