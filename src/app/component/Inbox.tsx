import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import Image from "next/image";

function AllInbox({
  data,
  loadMail,
}: {
  data: any;
  loadMail: (threadId: number) => void;
}) {

  const token = localStorage.getItem("authToken");
  async function reloadHandler() {
    try {
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

      if (response.ok) {
        console.log("Mail reset successfully.");
      } else {
        console.error("Failed to reset mail.");
      }
    } catch (error) {
      console.error("Error during mail reset:", error);
    }
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null; // Handle the error as needed
  }

  return (
    <div className="border-r-2 bg-gray-100 dark:bg-black dark:border-gray-700 border-gray-200 h-full overflow-y-scroll no-scrollbar">
      <div className="px-4 pt-4 flex justify-between">
        <div className="px-4 ">
          <div className="text-2xl py-3 text-blue-500 font-semibold flex items-center">
            All Inbox(s){" "}
            <FaAngleDown className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="dark:text-white text-black font-bold">
            {data.length}/25{" "}
            <span className="text-gray-500 font-normal">Inboxes selected</span>
          </div>
        </div>
        <div
          className="p-3 mt-3 dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer"
          onClick={reloadHandler}
        >
          <TbReload className="text-black dark:text-white" />
        </div>
      </div>

      <div className="my-4 px-8">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full dark:bg-gray-800 bg-gray-200 rounded-md p-1 pl-8 border dark:border-gray-600 border-gray-300"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex justify-between py-4">
          <div className="dark:text-white text-black">
            <span className="dark:bg-gray-700 bg-gray-300 text-blue-500 px-2 py-1 rounded-3xl">
              {data.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center dark:text-white text-black ">
            Newest <FaAngleDown className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      <div>
        {data.map((email: any) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({
  fromEmail,
  subject,
  threadId,
  loadMail,
}: {
  fromEmail: string;
  subject: string;
  threadId: number;
  loadMail: (threadId: number) => void;
}) {
  const trimSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className="border-t-2 dark:border-gray-600 border-gray-400 mx-8 py-4 cursor-pointer"
      onClick={handleMailClick}
    >
      <div>
        <div className="flex justify-between">
          <div className="dark:text-white text-black text-lg font-normal">
            {fromEmail}
          </div>
          <div className="dark:text-gray-500 text-gray-400 font-thin pr-3">
            Mar 7
          </div>
        </div>
        <div className="py-2 dark:text-gray-300 text-gray-600 font-normal">
          {trimSubject(subject, 7)}
        </div>
        <div className="flex">
          <div className="dark:bg-gray-700 bg-gray-200 px-3 py-1 rounded-2xl text-green-400 text-sm flex items-center">
            <GoDotFill className="mr-1 text-lg" />
            Interested
          </div>
          <div className="flex items-center dark:bg-gray-700 bg-gray-200 px-3 py-1 rounded-2xl dark:text-white text-black text-sm ml-2">
            <IoIosSend className="mr-1 text-lg" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
