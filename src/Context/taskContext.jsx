const { createContext, useContext, useState } = require("react");

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);
const TaskContext = createContext();
export { useTask, TaskProvider };
