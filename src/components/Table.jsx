export default function Table({ members, isAdmin, handleDelete }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white text-left text-sm rounded shadow-sm">
        <thead className="bg-gray-100 border-b border-gray-300 text-gray-700">
          <tr className="p-3 border-r border-gray-300 font-bold text-center">
            <th className="p-3 border-r border-gray-300 font-bold text-center">Name</th>
            <th className="p-3 border-r border-gray-300 font-bold text-center">Last Name</th>
            <th className="p-3 border-r border-gray-300 font-bold text-center">Position</th>
            {isAdmin && <th className="p-3 font-bold text-center">Action</th>}
          </tr>
        </thead>
        <tbody>
          {members && members.length > 0 ? (
            members.map((member) => (
              <tr 
              key={member.id} 
              className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 border-r border-gray-200 text-center text-gray-800">{member.name}</td>
                <td className="p-3 border-r border-gray-200 text-center text-gray-800">{member.lastname}</td>
                <td className="p-3 border-r border-gray-200 text-center text-gray-800">{member.position}</td>
                {isAdmin && (
                  <td className="p-3 text-center">
                    <button onClick={() => handleDelete(member.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td 
              colSpan={isAdmin ? 4 : 3}
              className="p-6 text-center text-gray-400"
              >
                No DATA Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
