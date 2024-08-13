import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import Image from "next/image";

const RightSection: React.FC = () => {
  return (
    <div className="border-l-2 bg-white dark:bg-black dark:border-dark-border border-light-border h-full overflow-y-scroll no-scrollbar px-2">
      <div className="mt-5 dark:bg-dark-bg bg-light-bg text-black dark:text-white rounded-lg py-2 pl-4">
        Lead Details
      </div>
      <div className="px-6 my-10 space-y-6 dark:text-white text-text-light">
        <div className="flex justify-between text-sm">
          <div className="">Name</div>
          <div className="dark:text-text-dark">Orlando</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Contact No</div>
          <div className="dark:text-text-dark">+54-9062827869</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Email ID</div>
          <div className="dark:text-text-dark">orlando@gmail.com</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Linkedin</div>
          <div className="dark:text-text-dark">linkedin.com/in/timvadde/</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Company Name</div>
          <div className="dark:text-text-dark">Reachinbox</div>
        </div>
      </div>

      <div className="mt-8 dark:bg-dark-bg bg-light-bg text-black dark:text-white rounded-lg py-2 pl-4">
        Activities
      </div>

      <div className="my-8 px-4">
        <div className="px-2 text-black dark:text-white">Campaign Name</div>
        <div className="my-4 text-sm px-2 text-black dark:text-white">
          3 Steps | 5 Days in Sequence
        </div>
        <div className="px-2">
          <div className="flex my-4 items-center">
            <div>
              <Image
                src="/mail.svg"
                alt="Mail"
                width={48}
                height={48}
                className="dark:bg-dark-bg bg-light-bg p-2 rounded-full"
              />
            </div>
            <div className="ml-10 space-y-2 text-black dark:text-white">
              <div>Step 1: Email</div>
              <div className="text-text-dark text-sm flex items-center">
                <IoIosSend className="mr-2" /> Sent 3rd, Feb
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <Image
                src="/assets/mail.svg"
                alt="Mail"
                width={48}
                height={48}
                className="dark:bg-dark-bg bg-light-bg p-2 rounded-full"
              />
            </div>
            <div className="ml-10 space-y-2 text-black dark:text-white">
              <div>Step 2: Email</div>
              <div className="text-text-dark text-sm flex items-center">
                <IoMailOpen className="mr-2 text-icon-yellow" /> Open 5th, Feb
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <Image
                src="/assets/mail.svg"
                alt="Mail"
                width={48}
                height={48}
                className="dark:bg-dark-bg bg-light-bg p-2 rounded-full"
              />
            </div>
            <div className="ml-10 space-y-2 text-black dark:text-white">
              <div>Step 3: Email</div>
              <div className="text-text-dark text-sm flex items-center">
                <IoMailOpen className="mr-2 text-icon-yellow" /> Open 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
