import React from "react";
import { ConfigProvider, Steps } from "antd";
import { db } from "~/firebase/firebaseConfig";
import TicketDetail from "./TicketDetail";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import moment from "moment";

const Tickets = () => {
  const filterCriteria = useSelector((store) => store.filter.filterCriteria);

  const ref = collection(db, "tickets");
  const [snapshot] = useCollection(ref);
  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const filteredTickets = data?.filter((ticket) => {
    const formattedTicketDate = moment(ticket.date, "MMMM DD, YYYY").format(
      "DD.MM.YYYY"
    );

    return (
      ticket.departure === filterCriteria.departure &&
      ticket.arrival === filterCriteria.arrival &&
      formattedTicketDate === filterCriteria.date
    );
  });

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
        {filteredTickets?.map((ticket) => (
          <TicketDetail key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
