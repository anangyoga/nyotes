/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import NotesSection from "./NotesSection";

const NotesForm = ({ createItem, deleteItem, items, search, archiveItem }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [char, setChar] = useState(50);
  const [requiredTitle, setRequiredTitle] = useState(false);
  const [requiredNote, setRequiredNote] = useState(false);

  const limitTitleCharacters = (e) => {
    if (char - title.length === 0) return;
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (char - title.length < 0) return;
    if (title.length === 0) {
      setRequiredTitle(true);
      return;
    }
    if (note.length === 0) {
      setRequiredNote(true);
      return;
    }

    const newNote = {
      id: +new Date(),
      title,
      note,
      isArchived: false,
      createdAt: Date(),
    };

    createItem(newNote);
    setTitle("");
    setNote("");
    setChar(50);
    setRequiredTitle(false);
    setRequiredNote(false);
  };

  return (
    <section>
      <div className="pt-20 pb-40 flex flex-col gap-4 max-w-md mx-auto">
        <h2>create your nyotes</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <span className={char - title.length < 10 ? `text-red-500 text-right` : `text-right`}>{char - title.length} characters left</span>
            <input value={title} onChange={limitTitleCharacters} type="text" placeholder="title..." className="border border-green-400 bg-black p-2 rounded-md outline-none" />
            {requiredTitle && <p className="text-red-500">guess who forgot to write the title?</p>}
          </div>
          <div className="flex flex-col">
            <textarea value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="write your notes.." className="border border-green-400 bg-black min-h-[100px] p-2 rounded-md outline-none" />
            {requiredNote && <p className="text-red-500">guess who forgot to write the note?</p>}
          </div>
          <button type="submit" className="bg-green-400 rounded-md text-black font-bold lowercase hover:bg-green-500">
            Add
          </button>
        </form>
      </div>

      <NotesSection deleteItem={deleteItem} items={items} search={search} archiveItem={archiveItem} />
    </section>
  );
};

export default NotesForm;
