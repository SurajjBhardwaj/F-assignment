"use client";

import React from "react";
import NavbarTop from "../component/NavbarTop";
import NavbarSide from "../component/NavbarSide";
import { useState } from "react";
import CommonView from "../component/CommonView";

const OneBox = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  return (
    <div id="root" className="h-screen w-screen dark:bg-black bg-white pl-14">
      <NavbarTop />
      <NavbarSide onMenuItemClick={handleMenuItemClick} />
      <CommonView />
    </div>
  );
};

export default OneBox;
