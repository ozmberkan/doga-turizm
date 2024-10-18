import { ConfigProvider, Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTickets } from "~/redux/slices/ticketsSlice";
import TicketDetail from "../../components/Ticket/TicketDetail";
import { quantum } from "ldrs";

const Tickets = () => {
  quantum.register();
  const filterCriteria = useSelector((store) => store.filter.filterCriteria);
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  const { tickets, status } = useSelector((store) => store.tickets);

  useEffect(() => {
    dispatch(getAllTickets());
  }, [dispatch]);

  const filteredTickets = tickets?.filter((ticket) => {
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

  if (status === "loading") {
    return (
      <div className="w-full flex-grow flex justify-center items-center">
        <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>;
      </div>
    );
  }

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

      <div className="flex justify-center items-center p-3 w-full flex-col gap-y-12 ">
        {filteredTickets?.length > 0 ? (
          filteredTickets?.map((ticket) => (
            <TicketDetail key={ticket.id} ticket={ticket} />
          ))
        ) : tickets?.length > 0 ? (
          <div className="w-full flex flex-col gap-y-5">
            <div className="w-full px-4 py-2 rounded-md bg-red-100 text-red-500 text-lg">
              Aranan değerlerde bilet bulunamadı, Ancak farklı tarihlerde
              bulunan biletlere göz atabilirsiniz.
            </div>
            <div className="flex flex-col gap-y-5">
              {tickets?.map((ticket) => (
                <TicketDetail key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full px-4 py-2 rounded-md bg-red-100 text-red-500 text-lg">
            Hiç bilet bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
