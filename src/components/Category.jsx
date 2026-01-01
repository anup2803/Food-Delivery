import React, { useState } from "react";
import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";

const catgeory = [
  {
    id: 1,
    name: "All",
    image: <FaBorderAll className="w-[50px] h-[50px]  text-green-400" />,
  },
  {
    id: 2,
    name: "BreakFast",
    image: (
      <MdOutlineFreeBreakfast className="w-[50px] h-[50px]  text-green-400" />
    ),
  },
  {
    id: 3,
    name: "Soup",
    image: <FaBorderAll className="w-[50px] h-[50px]  text-green-400" />,
  },
  {
    id: 4,
    name: "Pasta",
    image: <GiNoodles className="w-[50px] h-[50px]  text-green-400" />,
  },
  {
    id: 5,
    name: "Main_course",
    image: <MdOutlineFoodBank className="w-[50px] h-[50px]  text-green-400" />,
  },
  {
    id: 6,
    name: "Pizza",
    image: <FaPizzaSlice className="w-[50px] h-[50px]  text-green-400" />,
  },
  {
    id: 7,
    name: "Burger",
    image: <GiHamburger className="w-[50px] h-[50px]  text-green-400" />,
  },
];

const Category = ({ setItem, item }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 my-2 [w-100%]">
      {catgeory.map((cat) => {
        return (
          <div
            onClick={() => setItem(cat.name)}
            key={cat.id}
            className={`flex flex-col items-center justify-center p-5 gap-5 w-[140px] h-[140px] text-[20px] font-semibold cursor-pointer transition-all duration-200 rounded-lg shadow-lx 
            ${
              item === cat.name
                ? "bg-green-700 text-white"
                : "bg-white text-gray-600 hover:bg-green-200"
            }`}
          >
            {cat.image}
            <span>{cat.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
