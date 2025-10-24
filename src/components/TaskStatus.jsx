import React from "react";
import { ToastContainer, toast } from 'react-toastify';


const TaskStatus = ({ inProgress, setInProgress, isResolved, setIsResolved, pCardNo, rCardNo, setPCardNo, setRCardNo }) => {

  const handleRTask = (ticket) => {
    setIsResolved([...isResolved, ticket]);
    const updatedInProgress = inProgress.filter(t => t.id !== ticket.id);
    setInProgress(updatedInProgress);
    setPCardNo(pCardNo - 1);
    setRCardNo(rCardNo + 1);
    toast(`"${ticket.title}" moved to Resolved`);
  };

  return (
    <>
      <h2 className="text-lg text-gray-800 font-medium mb-4 max-sm:mx-10">Task Status</h2>

      {inProgress.length === 0 ? (
        <p className="text-gray-500">No tasks in progress</p>
      ) : (
        inProgress.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white w-70 h-25 font-semibold text-gray-800 p-2 rounded-md shadow-md flex flex-col items-center mb-4 max-sm:mx-25"
          >
            <div className="mb-2 text-left">{ticket.title}</div>
            <button
              onClick={() => handleRTask(ticket)}
              className="w-60 h-10 bg-green-600 hover:bg-green-500 text-sm text-white font-medium rounded-sm"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default TaskStatus;
