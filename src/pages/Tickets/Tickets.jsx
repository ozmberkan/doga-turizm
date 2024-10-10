import { ConfigProvider, Steps } from "antd";
import { db } from "~/firebase/firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import TicketDetail from "../../components/Ticket/TicketDetail";

const Tickets = () => {
  const filterCriteria = useSelector((store) => store.filter.filterCriteria);
  const theme = useSelector((store) => store.theme.theme);
  const ticketRef = collection(db, "tickets");

  const [snapshot] = useCollection(ticketRef);
  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const filteredTickets = data?.filter((ticket) => {
    return (
      ticket.departure === filterCriteria.departure &&
      ticket.arrival === filterCriteria.arrival &&
      ticket.date === filterCriteria.date
    );
  });

  const configTheme = {
    token: {
      colorPrimary: theme === "dark" ? "#4FC647" : "#4FC647",
      colorText: theme === "dark" ? "#E5E5E5" : "#000",
    },
  };

  return (
    <div className="w-full h-screen container mx-auto p-7 flex flex-col gap-y-5 font-rubik">
      <ConfigProvider theme={configTheme}>
        <Steps
          size="large"
          current={1}
          items={[
            {
              title: "Sefer Seçimi",
              status: "finish",
            },
            {
              title: "Koltuk Seçimi",
              status: "process",
            },
            {
              title: "Ödeme Bilgileri",
              status: "wait",
            },
          ]}
        />
      </ConfigProvider>

      <div className="flex justify-center items-center p-3 w-full flex-col gap-y-12">
        {filteredTickets?.length > 0 ? (
          filteredTickets?.map((ticket) => (
            <TicketDetail key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <div
            className={`w-full p-4 rounded-md ${
              theme === "dark"
                ? "bg-red-900 text-red-300"
                : "bg-red-200 text-red-500"
            }`}
          >
            Aranan değerlerde bilet bulunamadı!
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
