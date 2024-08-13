import Image from "next/image";
import SignUp from "./component/SignUp";

export default function Home() {
  return (
    // {main div}
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      {/* {// for the header} */}
      <div className="flex items-center justify-center w-full border-b border-header h-[8.3%]">
        <Image
          src="/reachinbox-logo.png"
          width={156.77}
          height={24}
          alt="ReachInbox Logo"
        />
      </div>

      {/* {// for the body} */}
      <div className="flex justify-center items-center text-white w-full h-[87%] ">
        <p>Hey</p>
      </div>

      {/* {// for the footer} */}
      <div className="flex justify-center items-center h-[4.6%] w-full border-t text-footer-new  bg-footer-color border-header">
        &copy; 2024 Reachinbox. All right reserved.
      </div>
    </div>
  );
}
