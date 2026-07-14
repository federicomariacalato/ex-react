import { useState, useEffect } from "react";
import "./Clock.scss";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="container">
      <span className="title">ORA CORRENTE</span>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}
