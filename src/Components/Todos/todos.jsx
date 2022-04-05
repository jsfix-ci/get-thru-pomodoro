import { useEffect, useState } from "react";
import { useTask } from "../../Context/taskContext";
import TaskCard from "../Cards/taskCard";
import { CreateTask } from "../Modals/createTask";
import "../Todos/todos.css";
const TodoList = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskDetails, setTaskDetails] = useState();
  const { task } = useTask();
  return (
    <>
      <div className="task-N-List">
        <div className="task-append">
          <h1>Welcome Back!</h1>
          <h2>{`You have ${task.length} tasks pending, go kill it! `}</h2>
          {showModal ? (
            <button
              className="btn-com btn-primary-outline"
              onClick={() => setShowModal(!showModal)}
            >
              {" "}
              Discard
            </button>
          ) : (
            <button
              className="btn-com btn-primary-outline"
              onClick={() => setShowModal(!showModal)}
            >
              Create Task
            </button>
          )}
        </div>

        <div className="todoList">
          {showModal && (
            <CreateTask
              taskDetails={taskDetails}
              showModal={showModal}
              setShowModal={setShowModal}
              setTaskDetails={setTaskDetails}
            />
          )}
        </div>
      </div>
      <div className="taskCard">
        {task.map((items) => (
          <TaskCard
            items={items}
            setTaskDetails={setTaskDetails}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        ))}
      </div>
    </>
  );
};

export { TodoList };
