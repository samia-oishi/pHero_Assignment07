import React, { use } from "react";
import { CalendarDays } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';


const CustomerTickets = ({ ticketsPromise,setPCardNo,pCardNo,inProgress,setInProgress}) => {
  const tickets = use(ticketsPromise);
  const colorMap = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700"
  };
  const dotColorMap = {
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    blue: "bg-blue-500",
    red: "bg-red-500"
  };
  const priorityColorMap = {
    "HIGH PRIORITY": "text-red-600 font-semibold",
    "MEDIUM PRIORITY": "text-yellow-600 font-semibold",
    "LOW PRIORITY": "text-green-600 font-semibold"
  };

  const handleTasks=(ticketData)=>{
    setInProgress([...inProgress,ticketData])
    setPCardNo(pCardNo+1)
    toast(`"${ticketData.title}" moved to in-progress queue`);
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Customer Tickets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {tickets.map((ticket) => (
          <div onClick={()=>{handleTasks(ticket)}}
              key={ticket.id}
              className="w-105 h-40 bg-white rounded-md shadow-md p-5 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{ticket.title}</h3>
                <div
                  className={`text-sm font-medium px-4 py-1 rounded-full flex items-center gap-2 ${colorMap[ticket.statusColor]}`}
                >
                  <div className={`w-2 h-2 rounded-full ${dotColorMap[ticket.statusColor]}`} />
                  <div>{ticket.status}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 text-justify">
                {ticket.description}
              </p>
              <div className="flex justify-between items-center text-sm mt-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="text-gray-500">#{ticket.id}</div>
                  <div className={`${priorityColorMap[ticket.priority]}`}>
                    {ticket.priority}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>{ticket.customerName}</div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <CalendarDays size={14} />
                    <div>{ticket.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
