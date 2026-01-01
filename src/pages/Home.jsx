import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Category from "../components/Category";
import Cards from "../components/Cards";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import Carts from "../components/Carts";
import { useSelector } from "react-redux";

const Home = () => {
  const { item, setItem, search, setSearch } = useContext(dataContext);

  const filterItem = food_items.filter((food_item) => {
    const searchFood = food_item.food_name
      .toLowerCase()
      .includes(search.toLowerCase());
    const categoryfilter =
      item === "All" || food_item.food_category === item.toLowerCase();

    return searchFood && categoryfilter;
  });

  return (
    <div className="bg-slate-200 w-full min-h-[100vh]">
      <NavBar setSearch={setSearch} />
      {!search && <Category setItem={setItem} item={item} />}
      <div className="flex w-full flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 ">
        {filterItem.length > 1 ? (
          filterItem.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              food_name={item.food_name}
              food_image={item.food_image}
              price={item.price}
              food_type={item.food_type}
            />
          ))
        ) : (
          <h1 className="text-2xl font-bold text-green-500">No Food Found</h1>
        )}
      </div>
      <Carts />
    </div>
  );
};

export default Home;
