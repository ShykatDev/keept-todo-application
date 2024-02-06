import { FaTrash } from "react-icons/fa6";
const DeletePopup = ({ confirmDelete, onClose }) => {
  return (
    <div className="bg-white dark:bg-black dark:bg-opacity-50 absolute min-w-[22rem] rounded-md bottom-10 right-10 p-4 text-neutral-700 dark:text-neutral-500 border border-neutral-400 dark:border-neutral-700">
      <p className="flex items-center gap-2">
        <FaTrash className="text-red-500" /> Do you really want to delete?
      </p>
      <div className="flex justify-end items-center mt-6 gap-6">
        <button className="text-neutral-600" onClick={onClose}>
          Cancel
        </button>
        <button className="text-red-500" onClick={confirmDelete}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;
