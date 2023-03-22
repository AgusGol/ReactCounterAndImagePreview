import "../assets/css/Countdown.css";
import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";

const Countdown = () => {
  const cdInput = useRef();
  const [cdTime, setCdTime] = useState(0);
  const [cdStart, setCdStart] = useState(false);

  useEffect(() => {
    if (cdTime > 0) {
      const timeOutTimer = setTimeout(() => {
        const newTime = cdTime - 0.1;
        setCdTime(Number(newTime.toFixed(1)));
      }, 100);

      return () => {
        clearTimeout(timeOutTimer);
      };
    } else setCdTime(0);
  }, [cdTime]);

  const startCD = (e) => {
    e.preventDefault();
    if (cdInput.current.value.length) {
      setCdTime(Number(cdInput.current.value));
      setCdStart(true);
    }
  };

  return (
    <section className="countdown">
      <h1 className="cdTitle">Countdown</h1>
      <form className="secondsForm" onSubmit={startCD}>
        <input
          ref={cdInput}
          type="number"
          min="0.1"
          step="0.1"
          placeholder="Enter the number of seconds here..."
          name="seconds"
          id="seconds"
          required
        />
        <input
          type="submit"
          value="Start!"
          name="submitCD"
          className="submitCD"
          required
        />
      </form>
      {cdStart && cdTime === 0 ? (
        <div>
          <img
            className="fireworks"
            src="https://i.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.webp"
            alt="fireworks"
          />
          <p id="cdFinished">Countdown finished!</p>
        </div>
      ) : (
        <Timer cdTime={cdTime} />
      )}
    </section>
  );
};

export default Countdown;
