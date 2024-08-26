import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TicketsTab from "./Tabs/TicketsTab";
import CampaignTab from "./Tabs/CampaignTab";
import AnnouncementTab from "./Tabs/AnnouncementTab";

const AdminTable = () => {
  return (
    <TabGroup>
      <TabList className="bg-[#F4F4F5] w-[400px] flex items-center justify-center rounded-md border gap-x-3  p-2 mb-5">
        <Tab className=" rounded-md  p-2 data-[selected]:bg-white data-[selected]:shadow-md outline-none">
          Biletler
        </Tab>
        <Tab className=" rounded-md  p-2 data-[selected]:bg-white data-[selected]:shadow-md outline-none">
          Kampanyalar
        </Tab>
        <Tab className=" rounded-md  p-2 data-[selected]:bg-white data-[selected]:shadow-md outline-none">
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
