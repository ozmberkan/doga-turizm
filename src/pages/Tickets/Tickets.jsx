import React, { useEffect, useState } from "react";
import { ConfigProvider, Steps } from "antd";
import { db } from "~/firebase/firebaseConfig";
import TicketDetail from "./TicketDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setTickets } from "~/redux/slices/ticketsSlice";
import { useCollection } from "react-firebase-hooks/firestore";

const Tickets = () => {
  const dispatch = useDispatch();

  const ref = collection(db, "tickets");
  const [snapshot] = useCollection(ref);
  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

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
        {data?.map((ticket) => (
          <TicketDetail key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
