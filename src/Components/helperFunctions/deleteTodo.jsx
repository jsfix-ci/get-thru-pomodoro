const DeleteTodo = (task, setTask, taskId) => {
    const updatedTask = task.filter((items) => items.taskId !== taskId);
    setTask(updatedTask);
  };
  export { DeleteTodo };
  