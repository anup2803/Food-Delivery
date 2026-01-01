import React from "react";

import { BiLeaf } from "react-icons/bi";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Cards = ({ id, food_name, food_image, price, food_type, search }) => {
  const dispatch = useDispatch();

  const notify = () => toast.success(`${food_name} is added`);
  return (
    <div
      className="w-[150px] md:w-[300px] h-[350px] md:h-[400px] bg-white p-3  rounded-lg flex flex-col gap-4 shadow-lg hover:border-2 border-green-300"
      key={id}
    >
      <div className=" w-[100%] h-[60%]  overflow-hidden rounded-lg">
        <img src={food_image} alt={food_name} className="object-cover" />
      </div>
      <div className="text-xl md:text-2xl font-semibold">
        <span>{food_name}</span>
      </div>
      <div className="flex justify-between w-full items-center">
        <span className="text-green-500  text-sm md:text-lg font-bold text-nowrap">
          Rs {price}
        </span>

        <div className="flex items-center justify-center gap-1 text-green-500 font-semibold text-sm md:text-lg">
          {food_type === "veg" ? <BiLeaf /> : <GiChickenOven />}

          <span>{food_type}</span>
        </div>
      </div>

      <div>
        <button
          className="w-full p-3 rounded-lg  bg-green-500 text-white hover:bg-green-400 transition-all font-bold "
          onClick={() => {
            notify();

            dispatch(
              addItem({
                id: id,
                name: food_name,
                price: price,
                image: food_image,
                qty: 1,
              })
            );
          }}
        >
          Add to Dish
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cards;
