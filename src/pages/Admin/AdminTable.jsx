import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TicketsTab from "./Tabs/TicketsTab";
import CampaignTab from "./Tabs/CampaignTab";
import AnnouncementTab from "./Tabs/AnnouncementTab";
import UsersTab from "./Tabs/UsersTab";
import { adminTabs } from "~/data/data";

const AdminTable = () => {
  return (
    <div className="p-5">
      <TabGroup>
        <TabList className="bg-white dark:bg-gray-700 dark:border-gray-800 sm:w-[700px] flex sm:flex-row flex-col items-center justify-center rounded-md border gap-x-3 px-5 py-2  mb-5">
          {adminTabs.map((tab) => (
            <Tab
              key={tab.id}
              className="sm:w-auto w-full rounded-md py-1 px-5 dark:data-[selected]:bg-gray-800 dark:text-white data-[selected]:bg-zinc-100 data-[selected]:shadow-md outline-none transition-all duration-300"
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
    </div>
  );
};

export default AdminTable;
