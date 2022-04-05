import { useState } from "react";
import { useLocation } from "react-router-dom";
import bruh from "../../Assets/bruh.png";
import {
  pauseTimerBtn,
  resetTimerBtn,
  secondConversion,
  startTimerBtn,
} from "../helperFunctions/pomodoroHelpers";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../Pomodoro/pomodoro.css";

const Pomodoro = () => {
  const location = useLocation();
  const { items } = location.state;
  const [timeId, setTimeId] = useState(0);
  const [continuous, setContinuous] = useState(0);
  if (continuous > items.time * 60) resetTimerBtn(timeId, setContinuous);
  return (
    <>
      <div className="task-timer-warp">
        <div className="wrap-timer-buttons">
          <CircularProgressbar
            value={continuous}
            text={secondConversion(items.time * 60 - continuous)}
            minValue={0}
            maxValue={items.time * 60}
            styles={buildStyles({
              textSize: "0.8rem",
            })}
          />

          <div className="two-btn">
            <button
              className="btn-com btn-primary-outline"
              onClick={() => {
                startTimerBtn(timeId, setTimeId, setContinuous);
              }}
            >
              {" "}
              <i class="fa-solid fa-play"></i> Start
            </button>
            <button
              className="btn-com btn-primary-solid"
              onClick={() => {
                pauseTimerBtn(timeId);
              }}
            >
              <i class="fa-solid fa-pause"></i> Pause
            </button>
          </div>
          <button
            className="btn-com btn-primary-outline"
            onClick={() => {
              resetTimerBtn(timeId, setContinuous);
            }}
          >
            Reset
          </button>
        </div>
        <div className="title-description">
          <img src={bruh} alt="bruh-img" className="res-img-hero bruh-img" />
          <h1 className="spacer-1rem"> God Promise! Complete This Task</h1>
          <h2 className="spacer-1rem">Title Of Task : {items.title} </h2>
          <h2>Description : </h2>
          <p className="font-size-p">{items.description}</p>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
