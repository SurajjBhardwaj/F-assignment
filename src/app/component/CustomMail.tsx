"use client";

import { useState, useContext } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail({ threadId, onClose }: any) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const token = localStorage.getItem("authToken");
  const handleSendReply = async () => {
    try {
      const response = await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            to: replyData.to,
            from: replyData.from,
            subject: replyData.subject,
            body: replyData.body,
          }),
        }
      );

      if (response.ok) {
        console.log("Reply sent successfully");
        onClose();
      } else {
        console.error("Failed to send reply");
      }
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-400/25 fixed top-0 left-0 flex justify-center items-center h-full w-full z-20">
      <div className="bg-primaryDark dark:bg-dark-primaryDark w-1/2 h-4/5 rounded-lg border border-borderGray dark:border-dark-borderGray">
        <div className="flex justify-between items-center px-4 bg-bgGray dark:bg-dark-bgGray rounded-t-lg py-2 border-b border-borderGray dark:border-dark-borderGray">
          <div className="pl-4 text-sm text-textGray dark:text-dark-textGray">
            Reply
          </div>
          <div onClick={onClose}>
            <RxCross2 className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex text-sm py-2 border-b border-borderGray dark:border-dark-borderGray pl-8">
          <div className="text-textGray dark:text-dark-textGray">To :</div>
          <input
            className="bg-transparent block w-[80%] focus:outline-none ml-4 text-inputGray dark:text-dark-inputGray"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-borderGray dark:border-dark-borderGray pl-8">
          <div className="text-textGray dark:text-dark-textGray">From :</div>
          <input
            className="bg-transparent block w-[80%] focus:outline-none ml-4 text-inputGray dark:text-dark-inputGray"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-borderGray dark:border-dark-borderGray pl-8">
          <div className="text-textGray dark:text-dark-textGray">Subject :</div>
          <input
            className="bg-transparent block w-[80%] focus:outline-none ml-4 text-inputGray dark:text-dark-inputGray"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-borderGray dark:border-dark-borderGray px-4 pr-8 pt-8 h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-full text-inputGray dark:text-dark-inputGray"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex space-x-8 items-center h-16 ml-8">
          <div
            className="bg-gradient-to-r from-gradientStart to-gradientEnd px-5 py-2 rounded-md flex items-center cursor-pointer"
            onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex items-center text-actionGray dark:text-dark-actionGray">
            <BsLightningChargeFill className="mr-3" />
            Variables
          </div>
          <div className="flex items-center text-actionGray dark:text-dark-actionGray">
            <FaEye className="mr-3" />
            Preview Email
          </div>
          <div className="flex space-x-3 text-xl text-actionGray dark:text-dark-actionGray">
            <div>
              <TbSquareLetterA />
            </div>
            <div>
              <IoLinkSharp />
            </div>
            <div>
              <FaImage />
            </div>
            <div>
              <FaRegSmile />
            </div>
            <div>
              <FaUserMinus />
            </div>
            <div>
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
