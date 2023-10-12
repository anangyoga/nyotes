/* eslint-disable react/prop-types */
import NotesCard from "./NotesCard";

const NotesSection = ({ items, deleteItem, search, archiveItem }) => {
  return (
    <div className="pb-20 md:px-28 lg:px-0 md:pb-32 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2>Active</h2>
        <div className="flex flex-col md:flex-row gap-5 md:gap-2 md:flex-wrap">
          {items.filter((item) => !item.isArchived).length === 0 && <p className="text-slate-500">no nyotes. please make one.</p>}
          {items
            .filter((item) => {
              return search.toLowerCase() === item ? "" : item.title.toLowerCase().includes(search);
            })
            .map((item) => (!item.isArchived ? <NotesCard deleteItem={deleteItem} key={item.id} item={item} archiveItem={archiveItem} /> : null))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2>Archive</h2>
        <div className="flex flex-col md:flex-row gap-5 md:gap-2 md:flex-wrap">
          {items.filter((item) => item.isArchived).length === 0 && <p className="text-slate-500">no archived.</p>}
          {items
            .filter((item) => {
              return search.toLowerCase() === item ? "" : item.title.toLowerCase().includes(search);
            })
            .map((item) => (item.isArchived ? <NotesCard deleteItem={deleteItem} key={item.id} item={item} archiveItem={archiveItem} /> : null))}
        </div>
      </div>
    </div>
  );
};

export default NotesSection;
