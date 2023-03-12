import "../assets/css/Timer.css";

function Timer({ cdTime }) {
  return (
    <div className="timerDiv">
      <p className="timer">{cdTime}<span className="sTimer">s</span></p>
    </div>
  );
}

export default Timer;
