export const Header = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      <h1 className="text-2xl font-bold text-green-400">Nyotes</h1>
      <input type="text" placeholder="Search your notes ..." className="px-5 py-1 bg-black outline-none border border-green-400 text-green-50" />
    </nav>
  );
};
