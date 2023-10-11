const NotesForm = () => {
  return (
    <section className="pt-20 pb-40 flex flex-col gap-4 max-w-md mx-auto">
      <h2>create your nyotes</h2>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="text-right">50 characters left</span>
          <input type="text" placeholder="title..." className="border border-green-400 bg-black p-2 rounded-md outline-none" />
        </div>
        <textarea type="text" placeholder="write your notes.." className="border border-green-400 bg-black min-h-[100px] p-2 rounded-md outline-none" />
        <button type="submit" className="bg-green-400 rounded-md text-black font-bold lowercase hover:bg-green-500">
          Add
        </button>
      </form>
    </section>
  );
};

export default NotesForm;
