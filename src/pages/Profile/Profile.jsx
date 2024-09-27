import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import UserTab from "./Tabs/UserTab";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import MyTicketsTab from "./Tabs/MyTicketsTab";
import LastTicketTab from "./Tabs/LastTicketTab";
import { BsTicketDetailed, BsTicketDetailedFill } from "react-icons/bs";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="w-full px-14 py-3 ">
      <div className="bg-white rounded-md w-full border p-3 h-[600px]">
        <div className="border-b p-3 flex items-center justify-start gap-x-5">
          <img
            src={user?.photoURL || "https://avatar.iran.liara.run/public/13"}
            className="w-[100px] h-[100px] rounded-md object-cover drop-shadow-lg"
          />
          <div className="flex flex-col gap-y-1.5">
            <h1 className="text-2xl text-zinc-700 font-semibold">
              Hoş geldin, {user?.displayName}
            </h1>
            <p className="text-sm text-zinc-700">
              Buradan bilgilerini güncelleyebilir, biletlerini
              görüntüleyebilirsin.
            </p>
          </div>
        </div>
        <div className="w-full px-5 flex flex-col gap-y-5 p-4">
          <TabGroup className="rounded-md  mt-2 flex flex-col gap-y-5">
            <TabList className="w-full flex justify-between items-center bg-[#F4F4F5] px-4 py-2 gap-x-5 rounded-lg  ">
              <Tab className=" w-full rounded-md  py-1 px-5 flex justify-center text-zinc-400 data-[selected]:text-zinc-800  items-center gap-x-1.5 data-[selected]:bg-white data-[selected]:shadow-md outline-none transition-colors duration-300">
                <FiUser />
                Kişisel Bilgilerim
              </Tab>
              <Tab className="w-full rounded-md py-1 px-5 flex justify-center  text-zinc-400 data-[selected]:text-zinc-800 items-center gap-x-1.5 data-[selected]:bg-white data-[selected]:shadow-md outline-none transition-colors duration-300">
                <BsTicketDetailed />
                Aktif Biletlerim
              </Tab>
              <Tab className="w-full rounded-md py-1 px-5 flex justify-center text-zinc-400 data-[selected]:text-zinc-800  items-center gap-x-1.5 data-[selected]:bg-white data-[selected]:shadow-md outline-none transition-colors duration-300">
                <BsTicketDetailedFill />
                Geçmiş Biletlerim
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <UserTab />
              </TabPanel>
              <TabPanel>
                <MyTicketsTab />
              </TabPanel>
              <TabPanel>
                <LastTicketTab />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile;
