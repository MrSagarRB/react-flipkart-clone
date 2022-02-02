import React, { useState, useEffect } from "react";

function DealsOfTheDay() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`10/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  console.log();

  return (
    <div className="container">
      <div className="flex justify-between  bg-white p-4">

        <div className="flex items-center space-x-5 ">
          <h1 className="text-xl"> Deals Of The Day</h1>
          <span className="flex justify-center items-center">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              className="mr-2"
            />{" "}
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </span>
        </div>

        <button className="bg-blue-600 text-white px-7"> View All</button>
      </div>

      <div> </div>
      <div> </div>
    </div>
  );
}

export default DealsOfTheDay;
