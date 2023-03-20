import "../assets/css/Countdown.css";
import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";

function Countdown() {
  const cdInput = useRef();
  const pError = useRef();
  const [cdTime, setCdTime] = useState(0.0);
  const [cdStart, setCdStart] = useState(0);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      if (cdTime > 0) {
        const newTime = cdTime - 0.1;
        setCdTime(newTime.toFixed(1));
      } else {
        setCdTime(0);
      }
    }, 100);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [cdTime]);

  const startCD = (e) => {
    e.preventDefault();
    if (cdInput.current.value.length) {
      pError.current.innerText = "";
      setCdTime(cdInput.current.value);
      setCdStart(1);
    } else {
      pError.current.innerText =
        "You must enter the number of seconds to start the countdown";
        setCdStart(0);
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
        />
        <input
          type="submit"
          value="Start!"
          name="submitCD"
          className="submitCD"
        />
      </form>
      <p ref={pError} className="pError"></p>
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
}

export default Countdown;
