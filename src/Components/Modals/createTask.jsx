import { useState } from "react";
import { useTask } from "../../Context/taskContext";
import { addTodo } from "../helperFunctions/addTodo";
import { EditTodo } from "../helperFunctions/editTodo";
import "../Modals/createTask.css";
const CreateTask = ({
  taskDetails,
  setTaskDetails,
  setShowModal,
  showModal,
}) => {
  const resetInputField = () => {
    setShowModal(false);
    setAppendTask(initialDetails);
    setTaskDetails();
  };
  const initialDetails = {
    title: "",
    description: "",
    time: 25,
    isDone: false,
  };
  const { task, setTask } = useTask();
  const [appendTask, setAppendTask] = useState(taskDetails || initialDetails);
  return (
    <>
      <form className="form-submit" onSubmit={(e) => e.preventDefault()}>
        <lable htmlFor="task">
          {" "}
          Task Name
          <input
            className="input-task"
            id="task"
            type="text"
            placeholder="Enter task name"
            autoComplete="hidden"
            name="taskName"
            value={appendTask.title}
            onChange={(e) => {
              setAppendTask({ ...appendTask, title: e.target.value });
            }}
            required
          />
        </lable>
        <label>
          {" "}
          Description
          <textarea
            rows="5"
            className="textarea-des"
            value={appendTask.description}
            onChange={(e) => {
              setAppendTask({ ...appendTask, description: e.target.value });
            }}
            name="description"
            required
          ></textarea>{" "}
        </label>
        <lable htmlFor="task">
          {" "}
          Timer
          <input
            className="input-task"
            id="timer"
            type="number"
            placeholder="Enter Time In Minutes"
            autoComplete="hidden"
            name="timer"
            value={appendTask.time}
            onChange={(e) => {
              setAppendTask({ ...appendTask, time: e.target.value });
            }}
            required
          />
        </lable>

        <div className="btnDiv">
          {!taskDetails ? (
            <button
              onClick={() =>
                addTodo(appendTask, task, setTask, resetInputField)
              }
            >
              {" "}
              Add{" "}
            </button>
          ) : (
            <button
              onClick={() =>
                EditTodo({
                  taskId: taskDetails.taskId,
                  appendTask,
                  setTask,
                  task,
                  resetInputField,
                })
              }
            >
              {" "}
              Update{" "}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export { CreateTask };
