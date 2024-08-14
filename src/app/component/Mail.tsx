"use client";

import { useEffect, useState } from "react";
import AllInbox from "./Inbox";
import CenterPage from "./CenterPage";
import RightSection from "./Right";
import { useToast } from "./reuse/Toast";


function Mail() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { toast } = useToast(); 

  useEffect(() => {
    if (token) {
      return;
    }
    setToken(window.localStorage.getItem("authToken"));
  }, []);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        if (!token) {
          console.log("No token:", token);
          return;
        }

        console.log("Here is the token:", token);
        const response = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // Add this if required by the API
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setData(data.data);
          setLoading(false);
          toast({title: "Data Fetched Successfully", action: "✅"});
        } else {
          console.error("Failed to fetch data.");
                 toast({
                   title: "Error",
                   action: "❌",
                   description: data?.message || " ",
                 });

        }
      } catch (error) {
        console.error("Error fetching data:", error);
        
  toast({
    title: "Error",
    action: "❌",
    description: error instanceof Error ? error.message : "Unknown error",
  });
      }
    };

    if (token) {
      fetchMails();
    }
  }, [token]); // Only depend on token, not datas

  if (loading) {
    return (
      <div className="bg-gray-200 dark:bg-black dark:text-white text-gray-600 flex h-screen w-auto justify-center items-center">
        Loading ...
      </div>
    );
  }

  const loadMail = (threadId: number) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-gray-200 dark:bg-black text-white pt-16 overflow-hidden flex w-full h-screen">
      <div className="w-1/4">
        <AllInbox data={datas} loadMail={loadMail} />
      </div>
      <div className="w-2/4">
        {/* @ts-ignore */}
        <CenterPage selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
}

export default Mail;
