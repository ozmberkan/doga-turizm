import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEventSeat } from "react-icons/md";

import LogoDark from "~/assets/logos/LogoBlack.png";
import LogoLight from "~/assets/logos/Logo.png";
import { BiUser } from "react-icons/bi";
import { TbTicket } from "react-icons/tb";
import { IoQrCodeOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";

const MobileTicket = () => {
  const { id } = useParams();
  const { user } = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.theme);

  const findTicket = user.ownedTickets.find((ticket) => ticket.ticketID === id);

  return (
    <div className="flex flex-col  w-full gap-y-5 h-screen">
      <Link
        to="/"
        className="w-full flex justify-start items-start px-12 py-5 "
      >
        <img src={theme === "dark" ? LogoLight : LogoDark} className="w-64" />
      </Link>
      <div className="flex justify-start items-start flex-col gap-y-2 px-12">
        <p className="flex gap-x-1 items-center p-1 border rounded-md w-full px-5 dark:border-gray-700">
          <span className="dark:text-white">
            <BiUser />
          </span>
          <span className="text-sm dark:text-white">{user.displayName}</span>
        </p>
        <p className="flex gap-x-1 items-center p-1 border rounded-md w-full px-5 dark:border-gray-700">
          <span className="dark:text-white">
            <TbTicket />
          </span>
          <span className="text-sm dark:text-white"> PNR{findTicket.pnr}</span>
        </p>
        <p className="flex gap-x-1 items-center p-1 border rounded-md w-full px-5 dark:border-gray-700">
          <span className="dark:text-white">
            <GoClock />
          </span>
          <span className="text-sm dark:text-white">
            {findTicket.date} {findTicket.time}
          </span>
        </p>
        <div className="w-full justify-between flex items-center border p-1 rounded-md px-5 dark:border-gray-700">
          <p className="flex items-center ">
            <span className="dark:text-white">
              <IoLocationOutline />
            </span>
            <span className="text-sm dark:text-white">
              {findTicket.departure}
            </span>
          </p>
          <p className="flex items-center ">
            <span className="dark:text-white">
              <IoLocationOutline />
            </span>
            <span className="text-sm dark:text-white">
              {findTicket.arrival}
            </span>
          </p>
        </div>
        <p className="flex gap-x-1 items-center p-1 border rounded-md w-full dark:border-gray-700">
          {findTicket.seats.map((seat, i) => (
            <span
              key={i}
              className={`flex gap-x-1 items-center dark:text-white justify-center p-1 w-full  rounded-md ${
                seat.gender === "Erkek" ? "text-blue-500" : "text-pink-500"
              }
              `}
            >
              <MdOutlineEventSeat />
              {seat.number}
              <span className="dark:text-white">{seat.gender}</span>
            </span>
          ))}
        </p>
      </div>

      <div className="flex w-full sm:justify-start sm:px-12 justify-center items-start h-full bg-primary pt-12 relative overflow-hidden">
        <IoQrCodeOutline className="text-green-100/60 rotate-12 text-[250px] absolute z-0 -top-24 -left-24 sm:absolute lg:hidden md:hidden" />

        <QRCode
          size={256}
          value={findTicket?.ticketID}
          viewBox={`0 0 256 256`}
          className="rounded-md shadow-xl z-10"
        />
      </div>
    </div>
  );
};

export default MobileTicket;
