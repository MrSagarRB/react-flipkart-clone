import React from "react";
import Search from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Header() {
  return (
    <div className="sticky">
      <div className="heading-div bg-blue-600 sm:flex sm:justify-center sm:items-center p-4 opacity-90 ">
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

        <div className="sm:flex sm:flex-row flex-col sm:justify-center sm:items-center">
          <div className="bg-white flex flex-row items-center w-80 sm:w-full">
            <input
              type="text"
              class=" mr-7 w-72 px-2 py-2  outline-none"
              placeholder="Search for Products, brands and more"
            />
            <Search className="text-blue-500 mr-3 " />
          </div>
          <button className="bg-white px-10  py-[5px] text-blue-500 font-semibold sm:ml-5 mt-4  sm:mt-0">
            Login
          </button>
        </div>

        <div className="text-white sm:ml-9 sm:flex sm:flex-row justify-center sm:items-center text-xl sm:p-0 pt-5">
       <button>More </button>
          <span className="rotate-90 hover:-rotate-90 ml-2 hidden sm:inline cursor-pointer">
            {" "}
            <ArrowForwardIosIcon />{" "}
          </span>
        </div>

        <div className="text-white sm:ml-7 sm:mr-20 flex sm:p-0 pt-5 cursor-pointer">
          <ShoppingCartIcon className="mr-2" />
          <h1 className="text-xl">Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
