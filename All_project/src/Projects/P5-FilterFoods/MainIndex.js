import React, { useState } from "react";
import Catagory from "./Catagory";
import Data from "./Data";
import Menu from "./Menu";

const MainIndex = () => {
  const catagoriesBtn = [new Set(Data.map((btn) => btn.catagory))];

  const [MenuItems, setMenuItems] = useState(Data);
  const [catagories, setcatagories] = useState(catagoriesBtn);
  const FilterData = (catagory) => {
    setMenuItems(Data.filter((it) => it.catagory === catagory));
  };

  return (
    <div className="g__body">
      <Catagory catagoryData={catagories} onClick={FilterData} />
      <Menu MenuItems={MenuItems} />
    </div>
  );
};

export default MainIndex;
