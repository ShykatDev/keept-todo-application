import { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({
  setShowModal,
  onAddorEdit,
  taskToUpdate,
  setTaskToUpdate,
}) => {
  const [taskProps, setTaskProps] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      taskTitle: "",
      taskDesc: "",
      priority: "",
      isFav: false,
      isComplete: false,
    }
  );
  const isAdd = Object.is(taskToUpdate, null);

  const handleSave = (newTask, isAdd) => {
    if (
      taskProps.taskTitle !== "" &&
      taskProps.taskDesc !== "" &&
      taskProps.priority !== ""
    ) {
      onAddorEdit(newTask, isAdd);
    } else {
      toast.warning("Every field is required");
    }
  };

  const handleOnChange = (evnt) => {
    const { name, value } = evnt.target;

    setTaskProps({
      ...taskProps,
      [name]: value,
    });
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 dark:bg-black z-50 dark:bg-opacity-50 backdrop-blur-md flex justify-center items-center p-10">
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 md:p-10 bg-neutral-50 dark:bg-neutral-950 rounded-lg border dark:border-neutral-700 border-neutral-400 shadow-md">
        <div className="mb-6">
          <h1 className="text-center text-2xl font-semibold dark:text-blue-400 text-blue-500">
            {!isAdd ? "📝 Update Task" : "🖊️ Add Task "}
          </h1>
        </div>

        <form className="w-full">
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-neutral-500 text-base font-medium">
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Task Title"
              required
              name="taskTitle"
              value={taskProps.taskTitle}
              onChange={(e) => handleOnChange(e)}
              className="w-full border dark:border-neutral-700 border-neutral-400 rounded-md bg-transparent p-3 outline-none placeholder:text-neutral-700 text-neutral-500 duration-200 dark:focus:border-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-neutral-500 text-base font-medium">
              Task Description <span className="text-red-500">*</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Task Description"
              rows={3}
              required
              name="taskDesc"
              value={taskProps.taskDesc}
              onChange={(e) => handleOnChange(e)}
              className="w-full border dark:border-neutral-700 border-neutral-400 rounded-md bg-transparent p-3 outline-none placeholder:text-neutral-700 text-neutral-500 duration-200 dark:focus:border-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              name="priority"
              value={taskProps.priority}
              onChange={(e) => handleOnChange(e)}
              className="bg-transparent text-neutral-500 text-base font-medium border dark:border-neutral-700 border-neutral-400 px-3 py-2 rounded-md outline-none"
            >
              <option value="" className="">
                Select Priority
              </option>
              <option value="Low" className="">
                Low
              </option>
              <option value="Medium" className="">
                Medium
              </option>
              <option value="High" className="">
                High
              </option>
            </select>

            {taskProps.priority !== "" && (
              <div className="flex items-center gap-2">
                <p className="dark:text-neutral-500">
                  Selected {taskProps.priority}
                </p>
                <div
                  className={`w-4 h-4 rounded-full ${
                    taskProps.priority === "Low"
                      ? "bg-green-400"
                      : `${
                          taskProps.priority === "Medium"
                            ? "bg-amber-300"
                            : "bg-red-400"
                        }`
                  }`}
                ></div>
              </div>
            )}
          </div>

          <div className="w-full flex justify-center sm:justify-end items-center gap-6 mt-10">
            <button
              type="button"
              className="px-4 py-2 bg-red-400 font-semibold rounded-md"
              onClick={() => {
                setShowModal(false);
                setTaskToUpdate(null);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleSave(taskProps, isAdd)}
              className="px-4 py-2 bg-green-500 font-semibold rounded-md"
            >
              {!isAdd ? "Update Task" : "Add task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
