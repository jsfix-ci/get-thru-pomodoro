const startTimerBtn = (timeId, setTimeId, setContinuous) => {
  clearInterval(timeId);

  let setter = setInterval(() => setContinuous((T) => T + 1), 1000);

  setTimeId(setter);
};
const pauseTimerBtn = (timeId) => {
  clearInterval(timeId);
};
const resetTimerBtn = (timeId, setContinuous) => {
  setContinuous(0);
  clearInterval(timeId);
};
const secondConversion = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const mm = minutes.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");

  const mmss = `${mm}m : ${ss}s`;

  return mmss;
};
export { startTimerBtn, pauseTimerBtn, resetTimerBtn, secondConversion };
