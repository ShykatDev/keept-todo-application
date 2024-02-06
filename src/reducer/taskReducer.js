const localTasks = localStorage.getItem("localTasks");
let init = [];

if (localTasks) {
  init = JSON.parse(localTasks);
}

const initialTasks = {
  tasks: init,
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newState = [...state.tasks, action.payload];
      localStorage.setItem("localTasks", JSON.stringify(newState));
      return { tasks: newState };
    }
    case "EDIT_TASK": {
      const updatedTask = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });

      localStorage.setItem("localTasks", JSON.stringify(updatedTask));
      return {
        tasks: updatedTask,
      };
    }

    case "COMPLETE": {
      const completeTask = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...action.payload,
            isComplete: !action.payload.isComplete,
          };
        } else {
          return task;
        }
      });

      localStorage.setItem("localTasks", JSON.stringify(completeTask));

      return {
        tasks: completeTask,
      };
    }

    case "FAV": {
      const favTask = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...action.payload,
            isFav: !action.payload.isFav,
          };
        } else {
          return task;
        }
      });

      localStorage.setItem("localTasks", JSON.stringify(favTask));

      return {
        tasks: favTask,
      };
    }

    case "DELETE": {
      const newTask = state.tasks.filter((item) => item.id !== action.payload);
      localStorage.setItem("localTasks", JSON.stringify(newTask));

      return {
        tasks: newTask,
      };
    }

    default:
      return state;
  }
};

export { initialTasks, tasksReducer };
