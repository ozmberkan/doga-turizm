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
import DashboardBox from "~/components/Admin/DashboardBox";
import { getAllMessages } from "~/redux/slices/contactsSlice";
import { getAllCampaigns } from "~/redux/slices/campaignSlice";
import { getAllAnnouncement } from "~/redux/slices/announcementSlice";

const DashboardTab = () => {
  quantum.register();
  const { users, isLoading } = useSelector((store) => store.user);
  const { tickets } = useSelector((store) => store.tickets);
  const { contacts } = useSelector((store) => store.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllTickets());
    dispatch(getAllMessages());
    dispatch(getAllCampaigns());
    dispatch(getAllAnnouncement());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full h-[700px] flex justify-center items-center">
        <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>;
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4F6] dark:bg-transparent  h-[700px] rounded-md lg:p-4  flex flex-col gap-y-5">
      <h1 className="lg:text-4xl dark:text-white text-2xl font-semibold text-zinc-700 lg:text-left text-center">
        Hoş geldin!
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-0 p-5  ">
        <DashboardBox
          data={users?.length}
          icon={<FaUsers />}
          label={"Kullanıcı Sayısı"}
          color="primary"
        />
        <DashboardBox
          data={tickets?.length}
          icon={<IoTicketSharp />}
          label={"Bilet Sayısı"}
          color="orange-500"
        />
        <DashboardBox
          data={contacts?.length}
          icon={<FaCircleQuestion />}
          label={"Soru Sayısı"}
          color="blue-500"
        />
        <DashboardBox
          data={"??"}
          icon={<IoDocument />}
          label={"Yakında"}
          color="pink-500"
        />
      </div>
    </div>
  );
};

export default DashboardTab;
