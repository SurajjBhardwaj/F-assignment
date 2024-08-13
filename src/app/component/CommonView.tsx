"use client";

import { useContext, useEffect } from "react";
import Image from "next/image";
import { tokenContext } from "@/context/TokenContextProvider";

function CommonView() {
  const { token } = useContext(tokenContext) || {};

  useEffect(() => {
    async function call() {
      if (token) {
        const response = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
          {
            method: "GET",
            headers: {
              Authorization: token,
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
    <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
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
