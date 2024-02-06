import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import {
  FaCircleCheck,
  FaCircleDot,
  FaPenToSquare,
  FaTrash,
} from "react-icons/fa6";
import { TaskContext } from "../context";
import { toast } from "react-toastify";

const Task = ({ task, onEdit, onDelete }) => {
  const { dispatch } = useContext(TaskContext);

  const handleComplete = (task) => {
    dispatch({
      type: "COMPLETE",
      payload: task,
    });

    if (!task.isComplete) {
      toast.success("Task marked Completed");
    } else {
      toast.success("Task marked Incompleted");
    }
  };

  const handleFav = (task) => {
    dispatch({
      type: "FAV",
      payload: task,
    });
    if (!task.isFav) {
      toast.success("Task marked Favourite");
    } else {
      toast.success("Task marked Unfavourite");
    }
  };

  return (
    <div
      className={`border rounded-lg bg-neutral-100 dark:bg-black dark:bg-opacity-10 dark:text-neutral-400 relative ${
        task.isComplete
          ? "dark:border-green-900 border-green-500"
          : "dark:border-neutral-800 border-neutral-400"
      }`}
    >
      {task.isComplete && (
        <div className=" absolute -top-2 -left-2 flex justify-center items-center">
          <FaCircleCheck className="text-green-500 text-2xl" />
        </div>
      )}
      <div className="p-6">
        <h2 className="dark:text-neutral-400 font-semibold">
          {task.taskTitle}
        </h2>
        <p className="dark:text-neutral-500 text-neutral-500 mt-2">
          {task.taskDesc}
        </p>
      </div>

      <div
        className={`flex w-full justify-between items-center px-6 py-4 dark:bg-neutral-900 bg-neutral-300 rounded-bl-lg rounded-br-lg`}
      >
        <p className="text-neutral-500 text-sm">Actions</p>

        <div className="flex gap-3">
          <FaStar
            onClick={() => handleFav(task)}
            className={`${
              task.isFav
                ? "text-amber-500 dark:text-amber-300"
                : "text-neutral-600 "
            } cursor-pointer hover:text-amber-300`}
          />
          <FaCircleCheck
            onClick={() => handleComplete(task)}
            className={`${
              task.isComplete ? "text-green-600" : "text-neutral-600"
            } cursor-pointer hover:text-green-500`}
          />
          <FaCircleDot
            className={`cursor-pointer ${
              task.priority === "Low"
                ? "text-green-400"
                : `${
                    task.priority === "Medium"
                      ? "text-amber-300"
                      : "text-red-400"
                  }`
            }`}
          />
          <FaPenToSquare
            onClick={() => onEdit(task)}
            className="text-neutral-600 cursor-pointer hover:text-sky-500"
          />
          <FaTrash
            onClick={() => onDelete(task)}
            className="text-neutral-600 cursor-pointer hover:text-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
