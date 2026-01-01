import React, { createContext, useState } from "react";

const dataContext = createContext();
const UserContext = ({ children }) => {
  const [item, setItem] = useState("All");
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const data = { item, search, setItem, setSearch, setShowCart, showCart };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
export { dataContext };
