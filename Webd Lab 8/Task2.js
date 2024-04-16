import React, { useState, useEffect } from 'react';
const Stopwatch = () => {
const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
useEffect(() => {
let intervalId;
if (isRunning) {
intervalId = setInterval(() => {
setTime((prevTime) => prevTime + 1);

}, 1000);
} else {
clearInterval(intervalId);
}
return () => clearInterval(intervalId);
}, [isRunning]);
const startStopwatch = () => {
setIsRunning(true);
};
const pauseStopwatch = () => {
setIsRunning(false);
};
const resetStopwatch = () => {
setIsRunning(false);
setTime(0);
};
const formatTime = (seconds) => {
const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
const remainingSeconds = seconds % 60;
return `${hours.toString().padStart(2, '0')}:${minutes
.toString()
.padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
return (
<div>
<h1>Stopwatch</h1>
<div>
<p>{formatTime(time)}</p>
</div>
<div>
{!isRunning ? (
<button onClick={startStopwatch}>Start</button>
) : (
<button onClick={pauseStopwatch}>Pause</button>
)}
<button onClick={resetStopwatch}>Reset</button>
</div>
</div>
);
};
export default Stopwatch;