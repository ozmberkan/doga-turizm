import React from "react";
import { ConfigProvider, Steps, Collapse } from "antd";
import { seatsData } from "~/data/data";

const Tickets = () => {
  const TicketDetail = ({ label }) => {
    return (
      <div className="w-full flex justify-center items-center text-xl font-rubik gap-y-5 flex-col">
        <div className="w-full">
          <ul className="bg-[#4FC647] px-4 py-2 text-white rounded-md flex-1 flex justify-between gap-x-5 items-center w-full">
            <span className="bg-[#4FC647] px-4 py-2 text-green-200 rounded-md">
              {label}
            </span>
            <span className="flex gap-x-5 items-center ">
              <li>Wifi</li>
              <li>Tv</li>
              <li>Yeni Otoban</li>
              <li>Priz</li>
              <li>Elektrikli Otobüs</li>
            </span>
            <li className="text-3xl">750₺</li>
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full bg-red- p-24 grid grid-cols-10 gap-5">
            {seatsData.map((seat) => (
              <div
                key={seat.id}
                className={`w-full h-12 flex justify-center items-center rounded-md cursor-pointer ${
                  seat.isAvailable ? "bg-green-300" : "bg-gray-500"
                }`}
              >
                {seat.seatNumber}
              </div>
            ))}
          </div>
          <button className="bg-[#4FC647] px-4 py-2 text-white rounded-xl">
            Bilet Al
          </button>
        </div>
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: "13:00",
      children: <TicketDetail label="13:00" />,
    },
    {
      key: "2",
      label: "14:00",
      children: <TicketDetail label="14:00" />,
    },
    {
      key: "3",
      label: "15:00",
      children: <TicketDetail label="15:00" />,
    },
  ];

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
      <div className="flex justify-center items-center p-5 rounded-md bg-white border w-full ">
        <div className="flex justify-between items-center w-full text-xl">
          <span>İstanbul {"->"} İzmir</span>
          <span>21.08.2024</span>
        </div>
      </div>
      <div className="w-full bg-white  rounded-md">
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                contentBg: "#fff",
                headerBg: "#f4f4f4",
                colorBorder: "#E5E7EB",
              },
            },
          }}
        >
          <Collapse size="large" items={items} defaultActiveKey={["1"]} />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Tickets;
