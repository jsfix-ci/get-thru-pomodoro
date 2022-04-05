import { v4 as uuid } from "uuid";

   const addTodo = (appendTask, task, setTask, resetInputField) => {
    setTask([
      ...task,
      {
        ...appendTask,
        taskId: uuid(),
      },
    ]);
    resetInputField();
  };

export { addTodo };
