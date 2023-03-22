import "../assets/css/Timer.css";
import PropTypes from "prop-types";

const Timer = ({
  cdTime,
}) => (
  <div className="timerDiv">
    <p className="timer">
      {cdTime}
      <span className="sTimer">s</span>
    </p>
  </div>
);

Timer.propTypes = {
  cdTime: PropTypes.number,
};

export default Timer;
