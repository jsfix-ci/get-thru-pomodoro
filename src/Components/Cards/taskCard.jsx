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
  return (
    <>
      <div class="all-card-collection">
        <div class="card-container">
          <div
            style={{
              backgroundColor:
                colors[(Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 5]
                  .primaryColor,
              height: "8px",
            }}
          ></div>
          <main class="main-body">
            <h3
              class="card-title"
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
          <main class="main-body">
            <p style={{color: '#000'}}>Don't miss this, Procastination is bad!</p>
          </main>

          <footer class="footer-card">
            <Link to="/pomodoro-task" state={{ items }}>
              <button class="btn-primary-card">
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </Link>
            <button
              class="btn-primary-card green-text"
              style={{
                color:
                  colors[
                    ((Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 5) % 5
                  ].primaryColor,
              }}
              onClick={() => editAction(items, setTaskDetails, setShowModal)}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              class="btn-primary-card red-color"
              onClick={() => DeleteTodo(task, setTask, items.taskId)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
