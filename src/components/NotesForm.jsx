/* eslint-disable react/prop-types */
import { useState } from "react";
import NotesSection from "./NotesSection";

const NotesForm = ({ createItem, items }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: +new Date(),
      title,
      note,
      archived: false,
      createdAt: Date.now(),
    };
    createItem(newNote);
    setTitle("");
    setNote("");
  };
  return (
    <section>
      <div className="pt-20 pb-40 flex flex-col gap-4 max-w-md mx-auto">
        <h2>create your nyotes</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <span className="text-right">50 characters left</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title..." className="border border-green-400 bg-black p-2 rounded-md outline-none" />
          </div>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="write your notes.." className="border border-green-400 bg-black min-h-[100px] p-2 rounded-md outline-none" />
          <button type="submit" className="bg-green-400 rounded-md text-black font-bold lowercase hover:bg-green-500">
            Add
          </button>
        </form>
      </div>

      <NotesSection items={items} />
    </section>
  );
};

export default NotesForm;
