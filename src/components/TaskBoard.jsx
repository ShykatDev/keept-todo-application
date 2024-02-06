import { useContext, useState } from "react";
import Modal from "./Modal";
import Task from "./Task";
import TaskActions from "./TaskActions";
import { TaskContext } from "../context";
import { GiEmptyHourglass } from "react-icons/gi";
import { toast } from "react-toastify";
import DeletePopup from "./DeletePopup";

const TaskBoard = () => {
  const { state, dispatch, searchText, filter } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false);

  const searchedTasks = state.tasks.filter((task) =>
    task.taskTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  let filteredTasks = searchedTasks;
  if (filter.fav) filteredTasks = searchedTasks.filter((task) => task.isFav);

  if (filter.compelete)
    filteredTasks = searchedTasks.filter((task) => task.isComplete);

  if (filter.pType.low)
    filteredTasks = searchedTasks.filter((task) => task.priority === "Low");

  if (filter.pType.mid)
    filteredTasks = searchedTasks.filter((task) => task.priority === "Medium");

  if (filter.pType.high)
    filteredTasks = searchedTasks.filter((task) => task.priority === "High");

  const handleAddOrAdd = (newTask, isAdd) => {
    if (isAdd) {
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });

      toast.success("Task added successfully");
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: newTask,
      });
      toast.success("Task updated successfully");
    }

    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: taskToDelete.id,
    });
    toast.success("Task Deleted");

    setDeletePopup(false);
  };

  const showDeletePopup = (task) => {
    setDeletePopup(true);
    setTaskToDelete(task);
  };

  const closeDeletePopup = () => {
    setDeletePopup(false);
    setTaskToDelete(null);
  };

  const clickedEditBtn = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-[15vh] pb-10">
      <section className="container">
        <TaskActions setShowModal={setShowModal} />

        {showModal && (
          <Modal
            setShowModal={setShowModal}
            onAddorEdit={handleAddOrAdd}
            taskToUpdate={taskToUpdate}
            setTaskToUpdate={setTaskToUpdate}
          />
        )}

        {deletePopup && (
          <DeletePopup
            confirmDelete={handleDelete}
            onClose={closeDeletePopup}
          />
        )}

        {state.tasks?.length > 0 ? (
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredTasks?.map((task) => (
              <Task
                task={task}
                key={task?.id}
                onEdit={clickedEditBtn}
                onDelete={showDeletePopup}
              />
            ))}
          </div>
        ) : (
          <div className="p-6 border mt-10 rounded-lg border-neutral-400 dark:border-neutral-700 flex justify-center">
            <p className=" dark:text-neutral-500 flex items-center gap-2">
              <GiEmptyHourglass /> No task has been added yet!
            </p>
          </div>
        )}

        {searchText.length > 0 && filteredTasks.length === 0 && (
          <p className=" dark:text-neutral-500 flex items-center gap-2">
            No task found for{" "}
            <span className="dark:text-neutral-300">{searchText}</span>!
          </p>
        )}
        {filter.fav && filteredTasks.length === 0 && (
          <p className=" dark:text-neutral-500 flex items-center gap-2">
            No favourite tasks found!
          </p>
        )}
        {filter.compelete && filteredTasks.length === 0 && (
          <p className=" dark:text-neutral-500 flex items-center gap-2">
            No Complete tasks found!
          </p>
        )}
      </section>
    </div>
  );
};

export default TaskBoard;
