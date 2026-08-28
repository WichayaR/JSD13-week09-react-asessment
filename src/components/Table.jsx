export default function Table({ members, isAdmin, handleDelete }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            {isAdmin && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {members && members.length > 0 ? (
            members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
                {isAdmin && (
                  <td>
                    <button onClick={() => handleDelete(member.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={isAdmin ? 4 : 3}>No DATA Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
