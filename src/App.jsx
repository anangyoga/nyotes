import { Header } from "./components/Header";
import NotesForm from "./components/NotesForm";

function App() {
  return (
    <main className="bg-[#101010] text-white font-mono">
      <section>
        <Header />
        <div className="max-w-7xl mx-auto">
          <NotesForm />
        </div>
      </section>
    </main>
  );
}

export default App;
