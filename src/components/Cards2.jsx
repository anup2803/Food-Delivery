import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Cards2 = ({ id, name, image, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] shadow-lg p-2 flex justify-between items-center">
      <div className="flex gap-5 w-[70%] h-full">
        <div className="w-[40%] h-full overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover" />
        </div>
        <div className="w-[60%] flex flex-col justify-center gap-2">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="flex w-[110px] h-[50px] border-2 border-green-500 rounded-lg overflow-hidden shadow-lg">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-200"
              onClick={() => dispatch(decreaseQty(id))}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-500">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-200"
              onClick={() => dispatch(increaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center gap-2">
        <span className="text-xl text-green-500 font-semibold">Rs {price}</span>
        <RiDeleteBinLine
          className="w-[30px] h-[30px] text-red-500 cursor-pointer"
          onClick={() => {
            dispatch(removeItem(id));

            toast.error(`${name} is removed`);
          }}
        />
      </div>
    </div>
  );
};

export default Cards2;
