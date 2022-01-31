import React from "react";
import Search from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Header() {
  return (
    <div>
      <div className="heading-div bg-blue-600 flex justify-center items-center p-4 opacity-90">
        <div className="logo pr-4">
          <img
            className="w-20"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
          />
          <p className="text-white italic text-xs">
            Explore <span class="text-yellow-400"> Pluse + </span>
          </p>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="bg-white">
            <input
              type="text"
              class=" mr-7 w-72 px-2 py-2  outline-none"
              placeholder="Search for Products, brands and more"
            />
            <Search className="text-blue-500 mr-3 " />
          </div>
          <button className="bg-white px-10 py-[5px] text-blue-500 font-semibold ml-5 ">
            Login
          </button>
        </div>

        <div className="text-white ml-9 flex justify-center items-center text-xl">
          <h1>More</h1>
          <span className="rotate-90 hover:-rotate-90 ml-2 ">
            {" "}
            <ArrowForwardIosIcon />{" "}
          </span>
        </div>

        <div className="text-white ml-7 mr-20 flex">
          <ShoppingCartIcon className="mr-2" />
          <h1 className="text-xl">Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
