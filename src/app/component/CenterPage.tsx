"use client";

import React, { useEffect, useState } from "react";
import { FaReply } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineExpand } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import CustomMail from "./CustomMail";
import DeletePopUp from "./Delete";

interface MailData {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  body: string;
  sentAt: string;
}

interface Props {
  selectedThread: string;
}

const CenterPage: React.FC<Props> = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState<MailData[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(window.localStorage.getItem("authToken"));
  }, []);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        }
      );
      setShowDelete(false);
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  // Helper function to check if an input or textarea is focused
  const isInputFocused = () =>
    document.activeElement?.tagName === "INPUT" ||
    document.activeElement?.tagName === "TEXTAREA";

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isInputFocused() || event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
        console.log("Pressed D");
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const res = await fetch(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                contentType: "application/json",
              },
            }
          );
          const data = await res.json();
          setSelectedMail(data.data || []);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      }
      // } 
      // else {
      //   setSelectedMail([
      //     {
      //       id: 0,
      //       fromName: "",
      //       fromEmail: "jeanne@icloud.com",
      //       toName: "",
      //       toEmail: "lennon.j@mail.com",
      //       subject: "New Product Launch",
      //       body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
      //       sentAt: "2022-01-01T00:00:00.000Z",
      //     },
      //   ]);
      // }
    };
    fetchMail();
  }, [selectedThread, showDelete, token]);

  return (
    <div className="overflow-y-scroll no-scrollbar h-full">
      <div className="border-b-2 dark:border-dark-border border-light-border w-full flex justify-between px-8 py-4">
        <div>
          <div className="dark:text-theme-white text-theme-dark text-lg">
            Orlando
          </div>
          <div className="dark:text-[#FFFFFF66] text-text-light text-sm">
            orladom@gmail.com
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex dark:bg-dark-sidebar bg-theme-white border dark:border-body-border items-center text-theme-dark dark:text-theme-white rounded-md py-2 px-3 text-sm">
            <GoDotFill className="text-icon-yellow text-xl" /> Meeting Completed{" "}
            <SlArrowDown className="ml-2" />
          </div>
          <div className="dark:bg-dark-sidebar flex items-center text-theme-dark dark:text-theme-white border bg-theme-white dark:border-body-border rounded-md py-2 px-3 text-sm">
            Move <SlArrowDown className="ml-2" />
          </div>
          <div className="dark:bg-dark-sidebar border bg-theme-white text-theme-dark dark:text-theme-white dark:border-body-border rounded-md py-2 px-3 text-sm">
            ...
          </div>
        </div>
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full dark:bg-dark-border bg-light-border"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-dark-bg bg-light-bg px-4 py-1 text-sm text-theme-dark dark:text-theme-white">
            Today
          </div>
        </div>
      </div>

      <div>
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-light-border dark:bg-dark-border"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-dark-bg bg-light-bg text-theme-dark dark:text-theme-white px-4 py-1 text-sm flex items-center space-x-1">
            <MdOutlineExpand className="mr-3 text-xl text-sidebar2" /> View all{" "}
            <span className="text-blue-500">4</span>
            <span>replies</span>
          </div>
        </div>
      </div>

      <div className="mx-8">
        {showPopUp && (
          <CustomMail
            threadId={selectedThread}
            onClose={() => setShowPopUp(false)}
          />
        )}
      </div>
      <div
        className="cursor-pointer flex items-center fixed bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-10 py-2"
        onClick={togglePopUp}
      >
        <FaReply className="mr-2 text-xl" /> Reply
      </div>
      {showDelete && (
        <DeletePopUp
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

const Mail: React.FC<MailData> = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className="dark:bg-theme-dark bg-theme-white border dark:border-body-border mx-8 rounded-md my-3">
      <div className="p-4">
        <div className="flex justify-between py-4">
          <div className="space-y-2">
            <div className="font-bold dark:text-theme-white text-theme-dark">
              {subject}
            </div>
            <div className="dark:text-sidebar2 text-text-light text-sm">
              from: {fromEmail}
            </div>
            <div className="dark:text-sidebar2 text-text-light text-sm">
              to: {toEmail}
            </div>
          </div>
          <div className="text-sm dark:text-[#7F7F7F] text-text-light">
            20 June 2022 : 9:16AM
          </div>
        </div>
        <div
          className="py-4 dark:text-body-font text-[#172B4D] w-2/3"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default CenterPage;
