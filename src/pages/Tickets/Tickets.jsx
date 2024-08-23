import React, { useState } from "react";
import { ConfigProvider, Steps } from "antd";

import TicketDetail from "./TicketDetail";

const Tickets = () => {
  return (
    <div className="w-full h-screen container mx-auto p-7 flex flex-col gap-y-5 font-rubik">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4FC647",
            contentBg: "#aaac1d",
          },
        }}
      >
        <Steps
          size="large"
          current={1}
          items={[
            {
              title: "Sefer Seçimi",
            },
            {
              title: "Koltuk Seçimi",
            },
            {
              title: "Ödeme Bilgileri",
            },
          ]}
        />
      </ConfigProvider>
      <div className="flex justify-center items-center p-3 w-full flex-col gap-y-12">
        <TicketDetail />
        <TicketDetail />
        <TicketDetail />
      </div>
    </div>
  );
};

export default Tickets;
