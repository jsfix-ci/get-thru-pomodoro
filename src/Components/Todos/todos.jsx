import { useEffect, useState } from "react";
import { useTask } from "../../Context/taskContext";
import TaskCard from "../Cards/taskCard";
import { CreateTask } from "../Modals/createTask";
import "../Todos/todos.css";
import emptyTodo from "../../Assets/empty-todo.png";
import darkEmptyTodo from "../../Assets/dark-empty-todo.png";
import { useTheme } from "../../Context/themeContext";
const TodoList = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskDetails, setTaskDetails] = useState();
  const { task } = useTask();
  const {theme} = useTheme
  return (
  <div>
      <div className="task-append">
        <h1 style={{marginTop:'3rem'}}>Welcome Back!</h1>
        <h2>{`You have ${task.length} tasks pending, Best Wishes!! `}</h2>
        {showModal ? (
          <button
            className="btn-com btn-primary-solid"
            onClick={() => setShowModal(!showModal)}
            
          >
            {" "}
            Discard
          </button>
        ) : (
          <button
            className="btn-com btn-primary-solid"
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
      {task.length >= 1 ? (
        <>
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
      ) : (
        <>
          <h2 style={{ textAlign: "center", margin: "1rem" }}>
            No Tasks As Of Now{" "}
          </h2>
          { theme === 'light' ? <img
            src={emptyTodo}
            alt="empty-task"
            className="res-img-hero empty-task-list"
          /> :<img
          src={darkEmptyTodo}
          alt="empty-task"
          className="res-img-hero empty-task-list"
        /> }
          
        </>
      )}
  </div>
  );
};

export { TodoList };
