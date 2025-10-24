export default function ResolvedTasks({ isResolved }) {
  return (
    <>
      <h2 className="text-lg text-gray-800 font-medium mb-4 max-sm:mx-10">Resolved Tasks</h2>

      {isResolved.length === 0 ? (
        <p className="text-gray-500">No resolved tasks yet</p>
      ) : (
        isResolved.map((ticket) => (
          <div
            key={ticket.id}
            className="max-sm:mx-25 bg-blue-200 w-70 h-10 font-semibold text-gray-600 p-2 rounded-md shadow-md flex flex-col items-center mb-4"
          >
            <div className="mb-2 text-left">{ticket.title}</div>
          </div>
        ))
      )}
    </>
  );
}
