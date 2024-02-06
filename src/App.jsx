import { useEffect, useReducer, useState } from "react";
import Pages from "./components/Pages";
import { TaskContext, ThemeContext } from "./context";
import { initialTasks, tasksReducer } from "./reducer/taskReducer";

function App() {
  const [dark, setDark] = useState(true);
  const [state, dispatch] = useReducer(tasksReducer, initialTasks);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState({
    fav: false,
    compelete: false,
    pType: {
      low: false,
      mid: false,
      high: false,
    },
  });


  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify([]));
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <TaskContext.Provider
          value={{
            state,
            dispatch,
            searchText,
            setSearchText,
            filter,
            setFilter,
          }}
        >
          <Pages />
        </TaskContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
