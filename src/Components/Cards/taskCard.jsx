import "../Cards/taskCard.css";
import { colors } from "./cardColor";
import { useTask } from "../../Context/taskContext";
import { DeleteTodo } from "../helperFunctions/deleteTodo";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/themeContext";
const TaskCard = ({ items, setTaskDetails, setShowModal, showModal }) => {
  const { task, setTask } = useTask();
  const {theme} = useTheme();
  const editAction = () => {
    setTaskDetails(items);
    setShowModal(true);
  };
  localStorage.setItem('task', JSON.stringify(task));
  localStorage.setItem('theme', JSON.stringify(theme));
  return (
    <>
      <div className="all-card-collection">
        <div className="card-container">
          <div
            style={{
              backgroundColor:
                colors[(Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 5]
                  .primaryColor,
              height: "8px",
            }}
          ></div>
          <main className="main-body">
            <h3
              className="card-title"
              style={{
                color: theme === 'light' ? 
                  colors[
                    ((Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 5) % 5
                  ].secondaryColor : '#000'
              }}
            >
              {items.title}
            </h3>
            <p style={{color: '#000'}}>{items.description}</p>
          </main>
          <main className="main-body">
            <p style={{color: '#000'}}>Don't miss this, Procastination is bad!</p>
          </main>

          <footer className="footer-card">
            <Link to="/pomodoro-task" state={{ items }}>
              <button className="btn-primary-card">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </Link>
            <button
              className="btn-primary-card green-text"
              style={{
                color:
                  colors[
                    ((Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 5) % 5
                  ].primaryColor,
              }}
              onClick={() => editAction(items, setTaskDetails, setShowModal)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="btn-primary-card red-color"
              onClick={() => DeleteTodo(task, setTask, items.taskId)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
