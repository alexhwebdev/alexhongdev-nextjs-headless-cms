import React from "react";
import { Badge } from "./ui/badge";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

// NOTES : Record
const statusMap: Record<
  Status,
  { 
    label: string; 
    color: "bg-red-400" | "bg-blue-400" | "bg-green-400" 
  }
> = {
  OPEN: { label: "Open", color: "bg-red-400" },
  STARTED: { label: "Started", color: "bg-blue-400" },
  CLOSED: { label: "Closed", color: "bg-green-400" },
};

const TicketStatusBadge = ({status}: Props) => {
  // console.log('status ', status)
  return (
    <Badge
      className={`
        ${statusMap[status].color} 
        text-background 
        hover:${statusMap[status].color}
      `}
    >
      {statusMap[status].label}
    </Badge>
  );
}

export default TicketStatusBadge



/* --------------- NOTES
  Record<Keys, Type> :
  https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type




  */




// SOURCE CODE
// import React from "react";
// import { Badge } from "./ui/badge";
// import { Status } from "@prisma/client";

// interface Props {
//   status: Status;
// }

// const statusMap: Record<
//   Status,
//   { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
// > = {
//   OPEN: { label: "Open", color: "bg-red-400" },
//   STARTED: { label: "Started", color: "bg-blue-400" },
//   CLOSED: { label: "Closed", color: "bg-green-400" },
// };

// const TicketStatusBadge = ({ status }: Props) => {
//   return (
//     <Badge
//       className={`${statusMap[status].color} text-background hover:${statusMap[status].color}`}
//     >
//       {statusMap[status].label}
//     </Badge>
//   );
// };

// export default TicketStatusBadge;
