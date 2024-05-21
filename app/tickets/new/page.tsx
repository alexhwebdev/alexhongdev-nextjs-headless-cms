import dynamic from "next/dynamic";
import React from "react";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

const NewTicket = () => {
  return <TicketForm />;
};

export default NewTicket;



/*
  + dynamic
  https://www.udemy.com/course/nextjs14-ticketapp/learn/lecture/41657324#questions


 */