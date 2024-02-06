import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck, FaCircleDot } from "react-icons/fa6";
import { TaskContext } from "../context";

const TaskFilters = () => {
  const { state, filter, setFilter } = useContext(TaskContext);
  const [pColors, setPColors] = useState(false);

  const handleColorSelect = (type) => {
    if (type === "low") {
      setFilter({
        ...filter,
        compelete: false,
        fav: false,
        pType: {
          ...filter.pType,
          low: !filter.pType.low,
          mid: false,
          high: false,
        },
      });
    }
    if (type === "mid") {
      setFilter({
        ...filter,
        compelete: false,
        fav: false,
        pType: {
          ...filter.pType,
          low: false,
          mid: !filter.pType.mid,
          high: false,
        },
      });
    }
    if (type === "high") {
      setFilter({
        ...filter,
        compelete: false,
        fav: false,
        pType: {
          ...filter.pType,
          low: false,
          mid: false,
          high: !filter.pType.high,
        },
      });
    }
  };

  const completedTasks = state.tasks.filter((task) => task.isComplete);

  return (
    <div className={`${state.tasks.length === 0 ? "hidden" : "block"}`}>
      <p className="dark:text-neutral-400 text-xl font-semibold mb-3">
        Task Filters
      </p>
      <div className="flex justify-between flex-col md:flex-row items-start md:items-center">
        <ul className="flex justify-start items-center gap-3 flex-wrap">
          <li
            onClick={() => {
              setFilter({
                ...filter,
                compelete: false,
                fav: !filter.fav,
              });
              setPColors(false);
            }}
            className={`cursor-pointer flex items-center gap-2 mb-2 px-4 py-2 rounded-md border dark:border-neutral-700 border-neutral-400 ${
              filter.fav && "dark:bg-neutral-800 bg-neutral-400"
            }`}
          >
            <FaStar className="text-amber-300" />
            <span className="dark:text-neutral-500">Favourite</span>
          </li>
          <li
            onClick={() => {
              setFilter({
                ...filter,
                fav: false,
                compelete: !filter.compelete,
              });
              setPColors(false);
            }}
            className={`cursor-pointer flex items-center gap-2 mb-2 px-4 py-2 rounded-md border dark:border-neutral-700 border-neutral-400 ${
              filter.compelete && "dark:bg-neutral-800 bg-neutral-400"
            }`}
          >
            <FaCircleCheck className="text-green-500" />
            <span className="dark:text-neutral-500">Complete</span>
          </li>
          <li
            onClick={() => {
              setPColors(!pColors);
              setFilter({
                ...filter,
                fav: false,
                compelete: false,
              });
            }}
            className={`cursor-pointer flex items-center gap-2 mb-2 px-4 py-2 rounded-md border dark:border-neutral-700 border-neutral-400 ${
              pColors && "dark:bg-neutral-800 bg-neutral-400"
            }`}
          >
            <FaCircleDot className="text-pink-300" />
            <span className="dark:text-neutral-500">Priority</span>
          </li>
          {pColors && (
            <li className="flex gap-3">
              <button
                onClick={() => handleColorSelect("low")}
                className={`w-5 h-5 bg-green-400 rounded-full ${
                  filter.pType.low && "border-4 border-green-700 bg-transparent"
                }`}
              ></button>
              <button
                onClick={() => handleColorSelect("mid")}
                className={`w-5 h-5 bg-amber-300 rounded-full ${
                  filter.pType.mid &&
                  "border-4 border-yellow-600 bg-transparent"
                }`}
              ></button>
              <button
                onClick={() => handleColorSelect("high")}
                className={`w-5 h-5 bg-red-400 rounded-full ${
                  filter.pType.high && "border-4 border-red-700 bg-transparent"
                }`}
              ></button>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3">
          <p className="text-neutral-600 dark:text-neutral-400">
            Total Tasks :{" "}
            <span className="text-blue-500 p-1 font-semibold">
              {state.tasks.length}
            </span>
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Completed :{" "}
            <span className="text-green-500 p-1 font-semibold">
              {completedTasks.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;
