// import React, { useRef, useState } from "react";

// function Timer() {
//   const { time, setTime } = useState(0);
// }
// let id = useRef();

// function handleTime() {
//   id.current = setInterval(() => {
//     setTime((prev) => prev + 1);
//   }, 1000);
// }
// return (
//   <div className="App">
//     <h1>{time}</h1>
//     <button onClick={() => handleTime()}>start</button>
//     <button onCanPlay={() => clearInterval(id.current)}>stop</button>
//     <button
//       onCanPlay={() => {
//         clearInterval(id.current);
//         setTime(0);
//       }}
//     >
//       Restart
//     </button>
//   </div>
// );

// export default Timer;

import React, { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(id.current);
  }

  function handleRestart() {
    clearInterval(id.current);
    setTime(0);
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={handleTime}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default Timer;
