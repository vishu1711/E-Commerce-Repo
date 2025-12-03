import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => onEdit(user)}>Edit</button>
                  <button onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
