import { useEffect, useState, useContext } from "react";
import AllInbox from "./Inbox";
import CenterPage from "./CenterPage";
import RightSection from "./Right";
import { tokenContext } from "@/context/TokenContextProvider";


function Mail() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState<number | null>(null);


  // // Ensure the context is available
  // if (!context) {
  //   throw new Error("tokenContext must be used within a TokenContextProvider");
  // }


    


  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchMails = async () => {
      try {
        if(!token) {

          console.log("{No token ", token);
          return;

        }

        console.log("here is the token", token);
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


        if (response.ok) {
          const data = await response.json();
          setData(data.data);
          setLoading(false);
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const interval = setInterval(fetchMails, 2500);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [token]);

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
    <div className="bg-gray-200 dark:bg-black text-white pt-8  overflow-hidden flex w-full h-screen">
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
