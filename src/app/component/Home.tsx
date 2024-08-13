"use client";

import { tokenContext } from "@/context/TokenContextProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";
import { getURL } from "./functions";

export default function Home() {
  const router = useRouter();
  const context = useContext(tokenContext);

  if (!context) {
    throw new Error("tokenContext must be used within a TokenContextProvider");
  }



  const { token, setToken } = context;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
            localStorage.setItem("authToken", `Bearer ${token}`);

      setToken(tokenFromUrl);
    }

    if (tokenFromUrl || token) {
      router.push("/onebox");
    }
  }, [router, token, setToken]);


  const handleSignIn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Sign in with Google...");

    const URL = getURL();
    console.log(URL);

    router.push(
      `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${URL}`
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      {/* Header */}
      <div className="flex items-center justify-center w-full border-b border-header h-[5.3%]">
        <Image
          src="/reachinbox-logo.png"
          width={156.77}
          height={24}
          alt="ReachInbox Logo"
        />
      </div>

      {/* Body */}
      <div className="flex justify-center items-center w-full h-[87%] text-xl px-4 md:px-0">
        <div className="flex flex-col items-center border border-footer-new justify-around bg-body-bg w-full max-w-[460px] h-[410px] min-[300]:h-[312px] rounded-xl p-4">
          <div className="flex flex-col justify-between items-center text-2xl">
            <h1 className="font-bold mb-4 text-lg md:text-xl">
              Create a new account
            </h1>

            <div
              className="flex max-[190]:flex-col w-[110%] min-[300]:w-[150%] xs:w-[100%] sm:w-[150%]  md:w-[380px] h-[48px] justify-center items-center text-2xl border border-footer-new rounded-md"
              onClick={handleSignIn}
            >
              <Image
                src="/google_g_icon.svg"
                width={35}
                height={35}
                alt="google icon"
                className="w-[30px] h-auto md:w-[35px]" // Adjust for responsiveness
              />
              <p className="text-body-font text-sm md:text-l mx-2">
                Sign Up with Google
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-2xl mt-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-8  focus:ring-blue-300 font-medium rounded text-lg md:text-xl px-3 py-2 md:px-5 md:py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create an Account
            </button>

            <div className="text-sm text-footer-new md:text-lg">
              <p>
                Already have an account?{" "}
                <a href="#" className="text-white">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center h-[4.6%] w-full border-t text-xs md:text-sm text-footer-new bg-footer-color border-header">
        &copy; 2024 Reachinbox. All right reserved.
      </div>
    </div>
  );
}
