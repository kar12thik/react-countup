import React from "react";
import "./styles.css";
import CountUp, { useCountUp } from "react-countup";

export default function App() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false
  });
  return (
    <div className="App">
      <h1>React Countup</h1>
      <h2>Watch the Count Rise Up!</h2>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <h1>
        <CountUp end={200} /> <br />
        <CountUp end={200} duration={5} /> <br />
        <CountUp start={500} end={1000} duration={5} /> <br />
        <CountUp
          start={500}
          end={1000}
          prefix="$"
          decimals={2}
          duration={5}
        />{" "}
        <br />
        <CountUp
          start={500}
          end={1000}
          suffix="USD"
          decimals={2}
          duration={5}
        />{" "}
        <br />
      </h1>
    </div>
  );
}
