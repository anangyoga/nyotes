/* eslint-disable react/prop-types */
import NotesCard from "./NotesCard";

const NotesSection = ({ items }) => {
  return (
    <div className="pb-32 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2>Active</h2>
        <div className="flex gap-2 flex-wrap">
          {items.map((item) => (
            <NotesCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2>Archive</h2>
        <div className="flex gap-2 flex-wrap"></div>
      </div>
    </div>
  );
};

export default NotesSection;
