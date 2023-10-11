import NotesCard from "./NotesCard";

const NotesSection = () => {
  return (
    <div className="pb-32 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2>Active</h2>
        <div className="flex gap-2 flex-wrap">
          <NotesCard />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2>Archive</h2>
        <div className="flex gap-2 flex-wrap">
          <NotesCard />
        </div>
      </div>
    </div>
  );
};

export default NotesSection;
