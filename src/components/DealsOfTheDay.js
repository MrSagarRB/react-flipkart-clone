import React, { useState, useEffect } from "react";
import ProductData from "../dealOfDpro";

const products= ProductData;

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

      <div className="product bg-white mt-1 flex flex-row">

{ 
         products.map((items)=>{
           return(  <div className="product-wrap flex flex-col items-center  p-3" key={items.id}> 
           <img
             className="w-24 h-40 hover:w-[98px] hover:h-[165px]"
             src={items.imgUrl}
           />
           <h1 className="text-sm">{items.title}</h1>
           <p className="text-green-700">{items.dicount}</p>
           <p className="text-gray-500 text-sm">{items.offer}</p>
         </div>
    

                


           )
         })

      
   }




      </div>

      <div> </div>
    </div>
  );
}

export default DealsOfTheDay;
