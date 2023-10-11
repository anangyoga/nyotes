/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import NotesSection from "./NotesSection";

const NotesForm = ({ createItem, items }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [char, setChar] = useState(50);

  const limitTitleCharacters = (e) => {
    if (char - title.length === 0) return;
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (char - title.length < 0) return;

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
            <span className={char - title.length < 10 ? `text-red-500 text-right` : `text-right`}>{char - title.length} characters left</span>
            <input value={title} onChange={limitTitleCharacters} type="text" placeholder="title..." className="border border-green-400 bg-black p-2 rounded-md outline-none" />
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
