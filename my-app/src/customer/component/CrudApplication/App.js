import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Fetch users
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 5))) // Only 5 sample users
      .catch((err) => console.error(err));
  }, []);

  // Add or Update User
  const handleSave = (userData) => {
    if (editUser) {
      // Update existing user
      setUsers(
        users.map((u) => (u.id === editUser.id ? { ...u, ...userData } : u))
      );
      setEditUser(null);
    } else {
      // Add new user
      const newUser = { ...userData, id: Date.now() };
      setUsers([...users, newUser]);
    }
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm
        onSave={handleSave}
        editUser={editUser}
        onCancel={() => setEditUser(null)}
      />
      <hr />
      <UserList users={users} onEdit={setEditUser} onDelete={handleDelete} />
    </div>
  );
}

export default App;
