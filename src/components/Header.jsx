/* eslint-disable react/prop-types */
export const Header = ({ search, setSearch }) => {
  return (
    <header>
      <div className="flex justify-between items-center py-5 md:px-28 border border-x-0 border-t-0 border-b border-green-400">
        <h1 className="text-2xl font-bold text-green-400">Nyotes</h1>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your notes ..." className="px-5 py-1 bg-black outline-none border border-green-400 text-green-50 rounded-md" />
      </div>
    </header>
  );
};
