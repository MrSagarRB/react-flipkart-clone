import React, { useState } from "react";
import menu from "../menu";

function Categories() {
  const data = menu;

  //    const [value, setValue]=useState(data)

  return (
    <div>
      <div className="menu-wrap flex  shadow-lg space-x-6 text-sm  justify-evenly p-7">
        {data.map((items) => {
          return (
            <div className="flex flex-col  " key={items.id} >
              <img src={items.imgUrl} className="w-16" />
              <h1>{items.title} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
