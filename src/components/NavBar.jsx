import React, { useContext } from "react";
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { setSearch, setShowCart, cart, search } = useContext(dataContext);
  4;

  const items = useSelector((state) => state.cart || []);
  return (
    <div className="w-full h-[100px]   p-5 md:p-8 flex justify-between">
      <div className="w-[60px] h-[60px]  bg-white  flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px]  text-green-400" />
      </div>
      <form
        className="w-[45%] md:w-[70%]  h-[60px] bg-white  rounded-md px-5 gap-5 flex items-center shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoMdSearch className="w-[20px] h-[20px] text-green-500" />
        <input
          value={search}
          type="text"
          placeholder="search your dish"
          className="w-full outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="w-[60px] h-[60px]  bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer">
        <span className=" absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <LuShoppingBag
          className="w-[30px] h-[30px]  text-green-400 "
          onClick={() => setShowCart((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default NavBar;
