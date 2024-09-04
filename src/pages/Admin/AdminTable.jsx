import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TicketsTab from "./Tabs/TicketsTab";
import CampaignTab from "./Tabs/CampaignTab";
import AnnouncementTab from "./Tabs/AnnouncementTab";

const AdminTable = () => {
  return (
    <TabGroup>
      <TabList className="bg-white w-[500px] flex items-center justify-center rounded-md border gap-x-3 px-5 py-2  mb-5">
        <Tab className=" rounded-md py-1 px-5 data-[selected]:bg-zinc-100 data-[selected]:shadow-md outline-none">
          Biletler
        </Tab>
        <Tab className=" rounded-md py-1 px-5 data-[selected]:bg-zinc-100 data-[selected]:shadow-md outline-none">
          Kampanyalar
        </Tab>
        <Tab className=" rounded-md py-1 px-5 data-[selected]:bg-zinc-100 data-[selected]:shadow-md outline-none">
          Duyuru / Yenilikler
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TicketsTab />
        </TabPanel>
        <TabPanel>
          <CampaignTab />
        </TabPanel>
        <TabPanel>
          <AnnouncementTab />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default AdminTable;
