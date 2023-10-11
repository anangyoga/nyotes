const NotesCard = () => {
  return (
    <div className="flex flex-col justify-between md:w-[300px] border border-green-400 rounded-md divide-y divide-green-400">
      <div className="flex flex-col gap-2.5  p-2 ">
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
          <p className="text-sm text-slate-500">12 Jan, 2023</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed iste doloribus ex perferendis illum aut dolor sunt fugiat! Laborum necessitatibus sunt nemo rerum fugiat voluptatibus pariatur voluptatem doloremque saepe
          facilis. Dolorum, accusantium repellat.
        </p>
      </div>
      <div className="flex justify-evenly py-2">
        <button className="text-red-400 hover:text-red-500 duration-200 transition-colors ease-in">delete</button>
        <button className="text-green-400 hover:text-green-500 duration-200 transition-colors ease-in">archive</button>
      </div>
    </div>
  );
};

export default NotesCard;
