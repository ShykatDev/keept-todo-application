import { FaPlus, FaSearch } from "react-icons/fa";
import TaskFilters from "./TaskFilters";
import { useContext } from "react";
import { TaskContext } from "../context";

const TaskActions = ({ setShowModal }) => {
  const { state, searchText, setSearchText } = useContext(TaskContext);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="mb-10 flex justify-start sm:justify-between items-start sm:items-center flex-col md:flex-row gap-6 md:gap-0">
        <div
          className={`flex items-center gap-3 p-3 border w-full md:w-[25rem] rounded-md dark:border-neutral-700 border-neutral-400 dark:focus-within:border-blue-500 focus-within:border-blue-500 ${
            state.tasks.length === 0 ? "opacity-30" : "opacity-100"
          }`}
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => handleSearch(e)}
            disabled={state.tasks.length === 0}
            className="w-full h-full outline-none bg-transparent dark:text-neutral-300 dark:placeholder:text-neutral-700"
            placeholder="search task"
          />
          <FaSearch className="dark:text-neutral-500" />
        </div>

        <button
          className="bg-amber-400 flex px-3 py-2 rounded-md items-center cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <FaPlus />
          <span className="ml-2 font-medium">Add Task</span>
        </button>
      </div>

      <TaskFilters />
    </>
  );
};

export default TaskActions;
