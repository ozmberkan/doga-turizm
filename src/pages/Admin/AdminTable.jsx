import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TicketsTab from "./Tabs/TicketsTab";
import CampaignTab from "./Tabs/CampaignTab";
import AnnouncementTab from "./Tabs/AnnouncementTab";
import UsersTab from "./Tabs/UsersTab";
import { adminTabs } from "~/data/data";

const AdminTable = () => {
  return (
    <TabGroup>
      <TabList className="bg-white sm:w-[700px] flex sm:flex-row flex-col items-center justify-center rounded-md border gap-x-3 px-5 py-2  mb-5">
        {adminTabs.map((tab) => (
          <Tab
            key={tab.id}
            className="sm:w-auto w-full rounded-md py-1 px-5 data-[selected]:bg-zinc-100 data-[selected]:shadow-md outline-none"
          >
            {tab.label}
          </Tab>
        ))}
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
        <TabPanel>
          <UsersTab />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default AdminTable;
