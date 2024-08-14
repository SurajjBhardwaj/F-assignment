"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";

function CommonView() {
 const [token, setToken] = useState<string | null>(null);

 useEffect(() => {
   setToken(window.localStorage.getItem("authToken"));
 }, []);

  useEffect(() => {
    async function call() {
      if (token) {
        const response = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch data:", response.statusText);
        }
      }
    }
    call();
  }, [token]);

  return (
    <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center w-[100%] h-screen flex-col">
      <div>
        <Image src="/main.svg" alt="Illustration" width={100} height={100} />
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#9E9E9E] text-[#5B5F66]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default CommonView;
