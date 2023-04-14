import React from 'react';

// TODO: implement and export a functional component called Stopwatch.
// It should render a counter in seconds and a button that initially
// has the label "Start". When the button is clicked, the stopwatch
// starts and keeps updating the counter every second, and the button
// label changes to "Stop". When the button is clicked again, the counter
// pauses and the button label changes back to "Start". Clicking on it
// again causes the counter to resume.
function StopWatch() {
  const [tick, setTick] = React.useState(0);
  const [isTicking, setTicking] = React.useState(false);
  const interval = React.useRef(null);

  const start = () => {
    setTicking(true);
    setTick(tick => tick + 1);
    interval.current = window.setTimeout(start, 1000);
  };

  const stop = () => {
    setTicking(false);
    window.clearTimeout(interval.current);
  };

  const onClick = () => {
    isTicking ? stop() : start();
  };

  return (
    <div>
      <div>
        {tick}
      </div>
      <div>
        <button onClick={onClick}>{ isTicking ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
}

export default StopWatch