import { formatDate } from "../utils/formatDate";

/* eslint-disable react/prop-types */
const NotesCard = ({ item, deleteItem, archiveItem }) => {
  return (
    <div className="flex flex-col justify-between md:w-[300px] border border-green-400 rounded-md divide-y divide-green-400">
      <div className="flex flex-col gap-2.5  p-2 ">
        <div>
          <h3>{item?.title}</h3>
          <p className="text-sm text-slate-500">{formatDate(item?.createdAt)}</p>
        </div>
        <p className={item.isArchived ? "line-through" : ""}>{item?.note}</p>
      </div>
      <div className="flex justify-evenly py-2">
        <button onClick={() => deleteItem(item.id)} className="text-red-400 hover:text-red-500 duration-200 transition-colors ease-in">
          delete
        </button>
        <button onClick={() => archiveItem(item.id)} className="text-green-400 hover:text-green-500 duration-200 transition-colors ease-in">
          {item.isArchived ? "un-archived" : "archive"}
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
