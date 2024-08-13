"use client";

import React from "react";
import NavbarTop from "../component/NavbarTop";
import NavbarSide from "../component/NavbarSide";
import { useState } from "react";
import CommonView from "../component/CommonView";
import Mail from "../component/Mail";

const OneBox = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div id="root" className="h-screen w-screen dark:bg-black bg-white pl-14">
        <NavbarSide onMenuItemClick={handleMenuItemClick} />
        <NavbarTop />
        <CommonView />
      </div>
    );
  }

  return (
    <div id="root" className="h-screen w-screen dark:bg-black bg-white pl-14">
      <NavbarTop />
      <NavbarSide onMenuItemClick={handleMenuItemClick} />
      {/* <CommonView /> */}



       <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <NavbarSide onMenuItemClick={handleMenuItemClick} />
      <NavbarTop />
      <div>
        {/* Render the selected component */}
        {selectedComponent === "/" && <CommonView />}
        {selectedComponent === "/search" && <CommonView />}
        {selectedComponent === "/mail" && <CommonView />}
        {selectedComponent === "/send" && <CommonView />}
        {selectedComponent === "/stack" && <CommonView />}
        {selectedComponent === "/inbox" && <Mail />}
        {selectedComponent === "/stacks" && <CommonView />}
      </div>
      </div>
    </div>
  );
};

export default OneBox;
