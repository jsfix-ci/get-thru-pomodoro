const EditTodo = ({ appendTask, setTask, task, resetInputField, taskId }) => {
    const newList = task.map((items) =>
      items.taskId === taskId
        ? {
            ...items,
            title: appendTask.title,
            description: appendTask.description,
            time: appendTask.time,
          }
        : items
    );
    setTask(newList);
    resetInputField();
  };
  
  export { EditTodo };
  