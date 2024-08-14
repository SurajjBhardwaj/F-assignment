"use client";

import React, { useEffect } from "react";
import NavbarTop from "../component/NavbarTop";
import NavbarSide from "../component/NavbarSide";
import { useState } from "react";
import CommonView from "../component/CommonView";
import Mail from "../component/Mail";

const OneBox = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "/";
    }
  }, []);


  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div
        id="root"
        className="min-h-screen w-screen dark:bg-black bg-white pl-14"
      >
        <NavbarSide onMenuItemClick={handleMenuItemClick} />
        <NavbarTop />
        <CommonView />
      </div>
    );
  } else {
    return (
      <div
        id="root"
        className="min-h-screen w-screen dark:bg-black bg-white pl-14"
      >
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
    );
  }

};

export default OneBox;
