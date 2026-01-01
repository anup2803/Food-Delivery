import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { dataContext } from "../context/UserContext";
import Cards2 from "./Cards2";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Carts = () => {
  const { showCart, setShowCart, count, setCount } = useContext(dataContext);
  const items = useSelector((state) => state.cart);

  const subTotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const deliveryFee = 150;
  const taxes = (subTotal * 0.5) / 100;
  const grandTotal = subTotal + deliveryFee + taxes;

  return (
    <div
      className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="w-full flex justify-between items-center">
        <span className="text-green-500 font-semibold text-[18px]">
          Order Items
        </span>
        <RxCross1
          className="text-green-500 font-semibold w-[30px] h-[20px] cursor-pointer hover:text-green-600"
          onClick={() => setShowCart(false)}
        />
      </header>

      {/* Scrollable items container */}
      <div className="w-full flex flex-col gap-5 mt-4 max-h-[70vh] overflow-y-auto">
        {items.length === 0 && (
          <div className="text-green-600 text-2xl font-semibold text-center py-10">
            Your cart is empty.
          </div>
        )}

        {items.map((item) => (
          <Cards2
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            qty={item.qty}
          />
        ))}
      </div>

      {/* Totals Section */}
      {items.length > 0 && (
        <div className="w-full border-t-2 border-gray-400 mt-4 pt-4">
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">SubTotal:</span>
            <span className="text-green-500 font-semibold">
              Rs {subTotal.toFixed(2)}/-
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Delivery Fee:</span>
            <span className="text-green-500 font-semibold">
              Rs {deliveryFee}/-
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Taxes:</span>
            <span className="text-green-500 font-semibold">
              Rs {taxes.toFixed(2)}/-
            </span>
          </div>
          <div className="flex justify-between border-t-2 border-gray-400 mt-2 pt-2">
            <span className="text-gray-600 font-semibold">Total:</span>
            <span className="text-green-500 font-semibold">
              Rs {grandTotal.toFixed(2)}/-
            </span>
          </div>
          <div>
            <button
              className=" text-lg font-semibold w-full  bg-green-500 rounded-md h-[50px]  text-center  mt-2  text-white hover:bg-green-600 transition  cursor-pointer"
              onClick={() => toast.success(`Place Order Successfully`)}
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;
