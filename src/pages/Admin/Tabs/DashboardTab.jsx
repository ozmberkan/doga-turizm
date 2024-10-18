import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUsers } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { getAllUsers } from "~/redux/slices/userSlice";
import { quantum } from "ldrs";
import { getAllTickets } from "~/redux/slices/ticketsSlice";
import { IoTicketSharp, IoDocument } from "react-icons/io5";
import { FaCircleQuestion } from "react-icons/fa6";

const DashboardTab = () => {
  const { user, users, isLoading } = useSelector((store) => store.user);
  const { tickets } = useSelector((store) => store.tickets);

  const [contacts, setContacts] = useState([]);

  const dispatch = useDispatch();
  quantum.register();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllTickets());
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      const contactsDocs = await getDocs(contactsRef);

      const contactsData = contactsDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactsData);
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <div className="w-full h-[700px] flex justify-center items-center">
        <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>;
      </div>
    );
  }


  
  return (
    <div className="bg-[#F3F4F6] h-[700px] rounded-md lg:p-5  flex flex-col gap-y-5">
      <h1 className="lg:text-4xl text-2xl font-semibold text-zinc-700 lg:text-left text-center">
        {user.displayName}
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-0 p-5  ">
        <div className="bg-white w-full rounded-md shadow-lg p-3 border   flex items-center gap-x-5">
          <div className="w-[20%] flex justify-center items-center">
            <div className="p-4 bg-primary lg:text-4xl rounded-full text-white">
              <FaUsers />
            </div>
          </div>
          <div className="p-4 w-[80%] flex-col flex items-start justify-center gap-y-1">
            <h1 className="lg:text-4xl text-2xl text-zinc-700">
              {users?.length}
            </h1>
            <span className="lg:text-lg text-base text-zinc-400">
              Kullanıcı Sayısı
            </span>
          </div>
        </div>
        <div className="bg-white w-full rounded-md shadow-lg p-3 border  flex items-center gap-x-5">
          <div className="w-[20%] flex justify-center items-center">
            <div className="p-4 bg-primary lg:text-4xl rounded-full text-white">
              <IoTicketSharp />
            </div>
          </div>
          <div className="p-4 w-[80%] flex-col flex items-start justify-center gap-y-1">
            <h1 className="lg:text-4xl text-2xl text-zinc-700">
              {tickets?.length}
            </h1>
            <span className="lg:text-lg text-base text-zinc-400">
              Bilet Sayısı
            </span>
          </div>
        </div>
        <div className="bg-white w-full rounded-md shadow-lg p-3 border  flex items-center gap-x-5">
          <div className="w-[20%] flex justify-center items-center">
            <div className="p-4 bg-primary lg:text-4xl rounded-full text-white">
              <FaCircleQuestion />
            </div>
          </div>
          <div className="p-4 w-[80%] flex-col flex items-start justify-center gap-y-1">
            <h1 className="lg:text-4xl text-2xl text-zinc-700">
              {contacts?.length}{" "}
            </h1>
            <span className="lg:text-lg text-base text-zinc-400">
              Soru Sayısı
            </span>
          </div>
        </div>
        <div className="bg-white w-full rounded-md shadow-lg p-3 border  flex items-center gap-x-5">
          <div className="w-[20%] flex justify-center items-center">
            <div className="p-4 bg-primary lg:text-4xl rounded-full text-white">
              <IoDocument />
            </div>
          </div>
          <div className="p-4 w-[80%] flex-col flex items-start justify-center gap-y-1">
            <h1 className="lg:text-4xl text-2xl text-zinc-700">???</h1>
            <span className="lg:text-lg text-base text-zinc-400">Yakında</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
